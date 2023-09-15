import React from 'react';

interface ButtonProps {
  buttonText: string;
  buttonColor: string;
  textColor: string;
}
function Button({ buttonText, buttonColor, textColor }: ButtonProps) {
  return (
    <div
      className={`px-5 py-1 rounded-md border cursor-pointer border-pri text-sm md:text-lg 2xl:text-xl hover:opacity-80 transition-all ease-in-out duration-500 ${buttonColor} ${textColor}`}
    >
      {buttonText}
    </div>
  );
}

export default Button;
