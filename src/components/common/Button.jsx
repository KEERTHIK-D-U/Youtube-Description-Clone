import React from "react";

const Button = ({ children, className = "", onClick }) => {
  return (
    <button
      className={`action-btn ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
