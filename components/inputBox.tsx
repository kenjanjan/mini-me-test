import React from "react";

interface InputBoxProps {
  label: string;
  type: string;
  value: string;
  name?: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  error?: string;
}

export default function InputBox({
  label,
  type,
  value,
  onChange,
  error,
}: InputBoxProps) {
  return (
    <div className="w-full h-full flex flex-col inputBox">
      <label className="font-lato text-start text-base md:text-lg font-bold leading-normal text-secondary">
        {label || "Reason for inquiry*"}
      </label>
      {type === "text" && (
        <input
          type="text"
          name="name"
          value={value}
          onChange={onChange}
          className="h-[50px] px-3 focus:outline-none focus:ring-1 focus:ring-terracota"
        />
      )}
      {type === "tel" && (
        <input
          name="phone"
          type="tel"
          value={value}
          onChange={onChange}
          className="h-[50px] px-3 focus:outline-none focus:ring-1 focus:ring-terracota"
        />
      )}
      {type === "email" && (
        <input
          name="email"
          value={value}
          onChange={onChange}
          type="email"
          className="h-[50px] px-3 focus:outline-none focus:ring-1 focus:ring-terracota"
        />
      )}
      {type === "select" && (
        <select
          name="select"
          className="h-[50px] px-3 focus:outline-none focus:ring-1 focus:ring-terracota"
          value={value}
          onChange={onChange}
        >
          <option value="" disabled></option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      )}
      {type === "textArea" && (
        <textarea
          name="message"
          className="p-5 h-[236px] md:h-full focus:outline-none focus:ring-1 focus:ring-terracota"
          value={value}
          onChange={onChange}
        ></textarea>
      )}
      {error && (
        <span className="font-lato text-start text-base md:text-lg font-normal leading-normal text-error">
          {error}
        </span>
      )}
    </div>
  );
}
