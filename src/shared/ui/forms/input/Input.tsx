import type { InputProps } from "./types";

function Input({
  id,
  name,
  labelName,
  type = "text",
  value,
  size,
  placeholder,
  inputClassName,
  labelClassName,
  disabled,
  accept,
  required,
  error,
  ref,
  prefix,
  onChange,
  onBlur,
}: InputProps) {
  return (
    <div className="flex flex-col w-full">
      {labelName && (
        <label
          htmlFor={id}
          className={`mb-1 font-medium text-[var(--color-black)] dark:text-white text-start ${labelClassName}`}
        >
          {labelName}
        </label>
      )}
      <div
        className={`flex items-center border rounded-md bg-[var(--color-bgInput)] dark:bg-[var(--color-dark)] border-[#D5DBE7] dark:border-[#000] focus-within:border-[var(--color-primary)] transition-all`}
      >
        {prefix && (
          <span className="flex items-center justify-center ps-2 text-gray-500 dark:text-gray-300">
            {prefix}
          </span>
        )}
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          ref={ref}
          accept={accept}
          placeholder={placeholder}
          disabled={disabled}
          size={size}
          required={required}
          className={`flex-1 h-10 ps-3 py-1 bg-transparent text-start text-[var(--color-black)] dark:text-white outline-none ${inputClassName}`}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-1 text-start">{error}</p>
      )}
    </div>
  );
}

export default Input;
