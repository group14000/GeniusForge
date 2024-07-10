'use client';

import React, { useEffect, useState } from 'react';
import { db } from '../../../../utils/db';
import { AIOutput } from '../../../../utils/schema';

export interface HistoryItem {
  id: string;
  templateSlug: string;
  aiResponse: string;
  createdAt: string;
}

const History = () => {
  const [data, setData] = useState<HistoryItem[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await db.select().from(AIOutput);
        const formattedResult = result.map((item: any) => ({
          id: item.id.toString(),
          templateSlug: item.templateSlug,
          aiResponse: item.aiResponse || '',
          createdAt: item.createdAt || ''
        }));
        setData(formattedResult);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const calculateWords = (text: string) => {
    return text.split(/\s+/).filter(Boolean).length;
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
      .then(() => setCopied(id))
      .catch((error) => console.error('Failed to copy text: ', error));
  };

  const toggleExpand = (id: string) => {
    setExpandedRows(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const truncateText = (text: string) => {
    const lines = text.split('\n');
    if (lines.length > 3) {
      return lines.slice(0, 3).join('\n') + '...';
    }
    return text;
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">History</h2>
      <p className="mb-4">Search your previous generated AI content.</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Template</th>
              <th className="py-2 px-4 border-b">AI Response</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Words</th>
              <th className="py-2 px-4 border-b">Copy</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b">{item.templateSlug}</td>
                <td className="py-2 px-4 border-b">
                  {expandedRows.has(item.id) ? (
                    <div>
                      <p>{item.aiResponse}</p>
                      <button onClick={() => toggleExpand(item.id)} className="text-blue-500">
                        Show less
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p>{truncateText(item.aiResponse)}</p>
                      <button onClick={() => toggleExpand(item.id)} className="text-blue-500">
                        Show more
                      </button>
                    </div>
                  )}
                </td>
                <td className="py-2 px-4 border-b">{new Date(item.createdAt).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">{calculateWords(item.aiResponse)}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className={`py-1 px-2 rounded ${copied === item.id ? ' text-green-600' : 'text-blue-500'}`}
                    onClick={() => handleCopy(item.aiResponse, item.id)}
                  >
                    {copied === item.id ? 'Copied' : 'Copy'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
