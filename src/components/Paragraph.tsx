import React from 'react';

interface ParagraphProps {
  paragraph: string;
}

function Paragraph({ paragraph }: ParagraphProps) {
  return (
    <p
      className={`text-sm md:text-[16px] 2xl:text-[20px] md:leading-7 2xl:leading-8  text-gray-600 text-justify`}
    >
      {paragraph}
    </p>
  );
}

export default Paragraph;
