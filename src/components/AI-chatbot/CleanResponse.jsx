import React from 'react';
import { Code, Terminal } from 'lucide-react';

const CleanResponse = ({ content }) => {
  const parseContent = (text) => {
    const codeBlockRegex = /```(\w*)\n([\s\S]*?)```/g;
    const codeBlocks = [];
    let match;
    while ((match = codeBlockRegex.exec(text)) !== null) {
      codeBlocks.push({
        language: match[1] || 'plaintext',
        code: match[2].trim()
      });
    }

    const explanationRegex = /\*\*(.*?)\*\*\s*([\s\S]*?)(?=\n\*\*|$)/g;
    const explanations = [];
    while ((match = explanationRegex.exec(text)) !== null) {
      explanations.push({
        title: match[1].trim(),
        content: match[2].trim().split('\n').map(line => line.trim()).filter(Boolean)
      });
    }

    return { codeBlocks, explanations };
  };

  const { codeBlocks, explanations } = parseContent(content);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {codeBlocks.map((block, index) => (
        <div key={index} className="mb-4">
          <div className="bg-gray-100 px-4 py-2 flex items-center">
            <Code className="h-5 w-5 mr-2 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-800">{block.language}</h2>
          </div>
          <div className="p-4">
            <pre className="bg-gray-50 p-4 rounded overflow-x-auto">
              <code className="text-sm">{block.code}</code>
            </pre>
          </div>
        </div>
      ))}
      {explanations.map((explanation, index) => (
        <div key={index} className="mb-4">
          <div className="bg-gray-100 px-4 py-2">
            <h3 className="text-md font-semibold text-gray-800">{explanation.title}</h3>
          </div>
          <div className="p-4">
            <ul className="list-disc list-inside space-y-2">
              {explanation.content.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      {!codeBlocks.length && !explanations.length && (
        <div className="p-4 text-gray-700">{content}</div>
      )}
    </div>
  );
};

export default CleanResponse;