import React from 'react';

interface TitleProps {
  title: string;
  color: string;
  align: string;
}

function Title({ title, color, align }: TitleProps) {
  return (
    <h1
      className={`text-2xl md:text-3xl ${
        color ? color : 'text-black'
      } ${align} font-semibold`}
    >
      {title}
    </h1>
  );
}

export default Title;
