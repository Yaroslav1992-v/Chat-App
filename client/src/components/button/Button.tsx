import React from "react";

interface Props {
  buttonText: string;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({ buttonText, onClick }) => {
  return (
    <button className="btn btn-primary btn-block btn-lg" onClick={onClick}>
      {buttonText}
    </button>
  );
};
