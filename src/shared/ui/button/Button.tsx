import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { BtnProps } from "./types";
import clsx from "clsx";
import { variants } from "./variants";
import Loader from "../loader/Loader";

function Button({
  icon,
  variant,
  children,
  iconClassName,
  disabled,
  loading,
  className,
  ...props
}: BtnProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={clsx(
        "px-5 py-2 rounded-lg flex items-center gap-2 border border-transparent cursor-pointer group transition-colors",
        variant ? variants[variant] : "",
        className,
        disabled || loading
          ? 'cursor-not-allowed disabled:bg-gray-400 hover:cursor-not-allowed'
          : ''
      )}
    >
      {loading ? (
        <Loader />
      ) : (
        icon && <FontAwesomeIcon icon={icon} className={`${iconClassName}`} />
      )}
      {children}
    </button>
  );
}

export default Button;
