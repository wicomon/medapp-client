import {
  ErrorMessage,
  Field,
  FieldInputProps,
  useField,
  useFormikContext,
} from "formik";
import { useEffect } from "react";

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
const inputStyle = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline';
const formSelectStyle = '';

export const FormikTextInput = ({
  label,
  className = "",
  ...props
}: InputType1) => {
  const [field, meta] = useField(props);

  return (
    <div className="text-sm">
      <label
        htmlFor={props.id || props.name}
        className="block text-gray-700 text-sm font-bold mb-1"
      >
        {label}
      </label>
      <input
        className={
          meta.touched && meta.error
            ? `${inputStyle} ${className}  border-red-300`
            : `${inputStyle} ${className}`
        }
        {...field}
        {...props}
      />
      {
        (meta.touched && meta.error) ? 
          <ErrorMessage
            name={props.name}
            component="p"
            className="text-red-500 text-xs"
          />
        
        :
        <></>
      }
    </div>
  );
};

export const FormikCheckBox = ({ label, ...props }: InputType2) => {
  const [field] = useField({ ...props, type: "checkbox" });

  return (
    <div className="ch-ff__field">
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="p" className="input---error" />
    </div>
  );
};

export const FormikSelectInput = ({
  label,
  className = "",
  ...props
}: InputType2) => {
  const [field, meta] = useField(props);

  return (
    <div className="text-sm">
      <label
        htmlFor={props.id || props.name}
        className="block text-gray-700 dark:text-gray-400 mb-2"
      >
        {label}
      </label>
      <select
        className={
          meta.touched && meta.error
            ? `${formSelectStyle} ${className}  border-red-300 dark:border-red-300`
            : `${formSelectStyle} ${className}`
        }
        {...field}
        {...props}
      />
      <ErrorMessage
        name={props.name}
        component="p"
        className="text-red-500 text-xm italic"
      />
    </div>
  );
};

export const FormikAreaInput = ({ label, ...props }: InputType1) => {
  const [field, meta] = useField(props);

  return (
    <div className="ch-ff__field flex flex-col text-sm ch-ff__note false">
      <label className="text-gray-700 dark:text-gray-400" htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className={
          meta.touched && meta.error
            ? `${formSelectStyle} border-red-300 dark:border-red-300 my-2`
            : `${formSelectStyle} my-2`
        }
        {...field}
        {...props}
      />
      <ErrorMessage
        name={props.name}
        component="p"
        className="text-red-500 text-xm italic"
      />
    </div>
  );
};


export const FocusError = () => {
  const { errors, isSubmitting, isValidating } = useFormikContext();

  useEffect(() => {
    if (isSubmitting && !isValidating) {
      let keys = Object.keys(errors);
      if (keys.length > 0) {
        const selector = `[name=${keys[0]}]`;
        const errorElement = document.querySelector(selector) as HTMLElement;
        if (errorElement) {
          errorElement.focus();
        }
      }
    }
  }, [errors, isSubmitting, isValidating]);

  return null;
};


export const FormikDatePicker = ({ label, ...props }: InputTypeDatePicker) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta, className] = useField(props);
  return (
    <div className="ch-ff__field text-sm">
      <label 
        className="text-gray-700 dark:text-gray-400 overflow-hidden"
        htmlFor={props.id || props.name}>{label}</label>
      {/* <Flatpickr
        // {...field}
        {...props}
        className={
          meta.touched && meta.error
            ? "input-error flatpickr-input"
            : `${formSelectStyle} ${className} mt-1`
        }
        options={{
          // enableTime: true,
          dateFormat: "d/m/Y",
          disableMobile: true,
          defaultDate: props.initialValue ? props.initialValue : '',
          minDate: props.minDate ? "today":"",
          locale: {
            firstDayOfWeek: 1,
            weekdays: {
              shorthand: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
              longhand: [
                "Domingo",
                "Lunes",
                "Martes",
                "Miércoles",
                "Jueves",
                "Viernes",
                "Sábado",
              ],
            },
            months: {
              shorthand: [
                "Ene",
                "Feb",
                "Mar",
                "Abr",
                "May",
                "Jun",
                "Jul",
                "Ago",
                "Sep",
                "Оct",
                "Nov",
                "Dic",
              ],
              longhand: [
                "Enero",
                "Febreo",
                "Мarzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre",
              ],
            },
          },
        }}
        onChange={([date]) => {
          const fecha = date.getTime()
          setFieldValue(field.name, fecha);
        }}
      /> */}
      <ErrorMessage
        name={props.name}
        component="p"
        className="text-red-500 text-xm italic"
      />
    </div>
  );
};