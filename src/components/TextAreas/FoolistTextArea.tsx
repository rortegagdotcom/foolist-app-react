import React, { ChangeEvent } from "react";

import "./FoolistTextArea.css";

interface Props {
  name: string;
  rows: number;
  cols: number;
  maxLength: number;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

const FoolistTextArea: React.FC<Props> = ({
  name,
  rows,
  cols,
  maxLength,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <textarea
      name={name}
      rows={rows}
      cols={cols}
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    ></textarea>
  );
};

export default FoolistTextArea;
