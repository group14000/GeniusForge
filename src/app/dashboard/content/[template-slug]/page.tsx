"use client";
import React, { useState } from 'react';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Template from '@/app/(data)/Template';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatSession } from '../../../../../utils/AiModel';
import { db } from '../../../../../utils/db';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { AIOutput } from '../../../../../utils/schema';

interface PROPS {
  params: {
    'template-slug': string;
  };
}

const CreateNewContent = (props: PROPS) => {
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');
  const { user } = useUser();

  const selectedTemplate: TEMPLATE | undefined = Template?.find(
    (item) => item.slug === props.params['template-slug']
  );

  const generateAIContent = async (formData: any) => {
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const finalAIPrompt = JSON.stringify(formData) + ', ' + selectedPrompt;

    const result = await chatSession.sendMessage(finalAIPrompt);

    setAiOutput(result?.response.text());
    await saveToDB(JSON.stringify(formData), selectedTemplate?.slug, result?.response.text());
    setLoading(false);
  };

  const saveToDB = async (formData: any, slug: any, aiOutput: string) => {
    await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug || '',
      aiResponse: aiOutput || '',
      createdBy: user?.primaryEmailAddress?.emailAddress || '',
      createdAt: moment().format('DD/MM/YYYY'),
    });

  };

  return (
    <div className="p-10">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => generateAIContent(v)}
          loading={loading}
        />

        <div className="col-span-2">
          <OutputSection
            aiOutput={aiOutput}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
