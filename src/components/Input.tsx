import React, { ChangeEvent } from 'react';

interface InputProps {
  type: string;
  label: string;
  placeholder: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleTextAreaChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
function Input({
  type,
  label,
  placeholder,
  handleInputChange,
  handleTextAreaChange,
}: InputProps) {
  return (
    <div className='my-3'>
      <label htmlFor='' className='block mb-2'>
        {label}
      </label>
      {type === 'text-area' ? (
        <textarea
          name={label.split(' ').join('').toLowerCase()}
          id=''
          placeholder={placeholder}
          onChange={handleTextAreaChange}
          required
          className='w-full h-40 text-black px-2 py-2 placeholder:text-[12px] rounded-md border shadow'
        ></textarea>
      ) : (
        <input
          type={type}
          name={label.split(' ').join('').toLowerCase()}
          placeholder={placeholder}
          required
          className='w-full h-10 text-black px-2 placeholder:text-[12px] rounded-md border shadow'
          onChange={handleInputChange}
        />
      )}
    </div>
  );
}

export default Input;
