import React from "react";
interface FormTypeProps {
  question: string;
  action: string;
  onClick: () => void;
}
export const FormType = ({ question, action, onClick }: FormTypeProps) => {
  return (
    <>
      <p className="text-muted">{question}</p>
      <button onClick={onClick} className="btn btn-outline-light btn-sm">
        {action}
      </button>
    </>
  );
};
