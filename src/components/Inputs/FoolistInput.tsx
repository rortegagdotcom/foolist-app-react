import React, { ChangeEvent } from "react";

import "./FoolistInput.css";

interface Props {
  type: string;
  name: string;
  maxLength: number;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const FoolistInput: React.FC<Props> = ({
  type,
  name,
  maxLength,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <input
      type={type}
      name={name}
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      autoFocus
    />
  );
};

export default FoolistInput;
