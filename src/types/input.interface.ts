export interface InputType1 {
  label: string;
  name: string;
  className?: string;
  type?: "email" | "text" | "password" | "number";
  placeholder?: string;
  [x: string]: any;
}
export interface InputType2 {
  label: string;
  name: string;
  className?: string;
  type?: "email" | "text" | "password" | "number";
  placeholder?: string;
  [x: string]: any;
}
export interface InputTypeDatePicker {
  label: string;
  name: string;
  className?: string;
  placeholder?: string;
  url?: string;
  initiaValue?: string;
  minDate?: boolean;
  [x: string]: any;
}

export interface FormikDateTimePickerProps {
  label: string;
  name: string;
  className?: string;
}