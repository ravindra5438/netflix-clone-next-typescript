import React, { HTMLInputTypeAttribute } from "react";

interface InputProps {
  id: string;
  value: string;
  onChange: any;
  label: string;
  type: HTMLInputTypeAttribute;
}

const Input: React.FC<InputProps> = ({ id, value, onChange, label, type }) => {
  return (
    <div className="relative">
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        className="
            w-full  
            rounded-md 
            px-6 
            pt-6
            pb-1
            text-sm
            duration-150
            text-white
            ring-lime-500
            focus:outline-none
            focus:ring-2
            focus:bg-transparent
            bg-neutral-700
            peer
            "
        placeholder=" "
      />
      <label
        className="
            absolute
            text-sm
            text-zinc-400
            duration-150
            transform
            scale-75
            -translate-y-3
            top-4
            z-10
            left-6
            peer-placeholder-shown:scale-90
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-3
            peer-focus:text-lime-500
        "
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
