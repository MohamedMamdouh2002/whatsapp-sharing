import Select, { components } from 'react-select';
import type { SelectProps } from './types';

function CustomSelect({
  id,
  name,
  labelName,
  value,
  placeholder,
  inputClassName,
  labelClassName,
  required,
  error,
  customStyles,
  onChange,
  onBlur,
  options,
  disabled,
  prefix, 
}: SelectProps & { prefix?: React.ReactNode }) {

  const CustomControl = (props: any) => (
    <components.Control {...props}>
      {prefix && <span className="pl-2 text-gray-500">{prefix}</span>}
      {props.children}
    </components.Control>
  );

  return (
    <div className="flex flex-col">
      {labelName && (
        <label
          htmlFor={id}
          className={`font-medium text-[var(--color-black)] dark:text-white ${labelClassName}`}
        >
          {labelName}
        </label>
      )}
      <Select
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        isClearable
        isDisabled={disabled}
        onChange={(selectedOption) => onChange?.(selectedOption ?? null)}
        onBlur={onBlur}
        styles={customStyles}
        options={options}
        className={`text-start ${inputClassName}`}
        components={{ Control: CustomControl }}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default CustomSelect;
