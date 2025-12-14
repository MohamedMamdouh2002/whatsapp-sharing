import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

type LoaderProps = {
  size?: "sm" | "md" | "lg";
  color?: string;
};

export default function Loader({ size = "sm", color = "text-gray-600" }: LoaderProps) {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-10 h-10",
  };

  return (
    <div className="flex justify-center items-center p-0.5">
      <FontAwesomeIcon
        icon={faSpinner}
        spin
        className={`${sizes[size]} ${color}`}
      />
    </div>
  );
}
