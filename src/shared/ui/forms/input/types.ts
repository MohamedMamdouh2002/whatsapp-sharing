import type { ChangeEvent, FocusEvent, HTMLInputTypeAttribute } from "react";

export type InputProps = {
  id: string;
  name: string;
  labelName?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  placeholder?: string;
  size?:number;
  inputClassName?: string;
  labelClassName?: string;
  accept?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  ref?:any;
  prefix?: React.ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void |any;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
};
