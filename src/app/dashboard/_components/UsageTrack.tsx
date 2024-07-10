"use client";
import { Button } from '@/components/ui/button';
// import { useUser } from '@clerk/nextjs';
// import React, { useContext, useEffect } from 'react';
// import { db } from '../../../../utils/db';
// import { AIOutput } from '../../../../utils/schema';
// import { eq } from 'drizzle-orm';
// import { HistoryItem } from '../history/page';
// import { TotalUsageContext } from '@/app/(context)/TotalUsageContet';

const UsageTrack = () => {
  // const { user } = useUser();
  // const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

  // useEffect(() => {
  //   if (user) {
  //     GetData();
  //   }
  // }, [user]);

  // const GetData = async () => {
  //   // @ts-ignore
  //   const result: HistoryItem[] = await db.select().from(AIOutput)
  //     .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

  //   GetTotalUsage(result);
  // };

  // const GetTotalUsage = (result: HistoryItem[]) => {
  //   let total: number = 0;
  //   result.forEach((element) => {
  //     if (element.aiResponse) {
  //       total += element.aiResponse.split(' ').length;
  //     }
  //   });
  //   setTotalUsage(total);
  // };

  return (
    <div className="m-5">
      <div className="bg-primary text-white rounded-lg p-3">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            // style={{
            //   width: (totalUsage / 10000) * 100 + "%",
            // }}
          ></div>
        </div>
        {/* <h2 className="text-sm my-2">{totalUsage}/10,000 Words Used</h2> */}
      </div>
      <Button className="w-full my-3 text-primary" variant="secondary">
        Upgrade
      </Button>
    </div>
  );
};

export default UsageTrack;
