import React from "react";

import "./FoolistButton.css";

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
}

const FoolistButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button className="foolist-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default FoolistButton;
