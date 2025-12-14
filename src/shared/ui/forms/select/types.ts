import type { FocusEvent, HTMLInputTypeAttribute } from "react";

export type SelectProps = {
  id: string;
  name: string;
  labelName?: string;
  customStyles?: any;
  type?: HTMLInputTypeAttribute;
  value?: { value: string; label: string } | null;
  placeholder?: string;
  size?:number;
  inputClassName?: string;
  labelClassName?: string;
  disabled?: boolean;
  required?: boolean; 
  options:SelectOption[]|any,
  error?: string;
  onChange?: (newValue:any) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
};

export interface SelectOption {
    label: string;
    value: number | string|boolean;
}

