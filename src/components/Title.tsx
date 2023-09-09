import React from 'react';

interface TitleProps {
  title: string;
  color: string;
}

function Title({ title, color }: TitleProps) {
  return (
    <h1 className={`text-2xl ${color ? color : 'text-black'} font-semibold`}>
      {title}
    </h1>
  );
}

export default Title;
