import type { ContainerProps } from "./types";

function Container({ className = "", children }: ContainerProps) {
  return (
    <div className={`container mx-auto md:px-20 px-10 py-4 ${className}`}>{children}</div>
  );
}

export default Container;
