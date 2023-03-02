import React from "react";
import { InputFieldProps } from "./Input.props";

export const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  required,
  autoFocus,
  inputRef,
  error,
}) => {
  return (
    <div className="form-group">
      {error && <div className="invalid-feedback d-block ">{error}</div>}
      <input
        ref={inputRef}
        type={type}
        className={
          "form-control form-control-lg" + (error ? " is-invalid" : "")
        }
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
      />
    </div>
  );
};
