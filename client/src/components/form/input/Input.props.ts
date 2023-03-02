export interface InputFieldProps {
  type: string;
  placeholder: string;
  required?: boolean;
  autoFocus?: boolean;
  name: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  error?: string | null;
}
