export const variants = {
  primary: "bg-[var(--color-primary)] text-white  hover:border-[var(--color-primary)] hover:bg-transparent dark:bg-[var(--color-green)] dark:text-white  hover:text-[var(--color-primary)] dark:hover:text-white dark:hover:border-[var(--color-green)]",
  blue: "bg-[#3B82F6] text-white  hover:border-[#3B82F6] hover:bg-transparent dark:bg-[var(--color-green)] dark:text-white  hover:text-[#3B82F6] dark:hover:text-white dark:hover:border-[var(--color-green)]",
  gray: "!bg-gray-500 hover:!bg-transparent hover:!border hover:!border-gray-500 text-white  hover:text-gray-500 dark:hover:text-white dark:hover:border-[var(--color-green)]",
  green: "!bg-[var(--color-green)] hover:!bg-transparent hover:!border hover:!border-[var(--color-green)] text-white hover:text-[var(--color-green)]  dark:hover:text-white dark:hover:border-[var(--color-green)]",
  danger: "bg-red-500 text-white  hover:border-red-500 hover:bg-transparent hover:text-red-500 dark:hover:text-white  dark:hover:border-red-500",
  secondary: "bg-gray-300 text-black [&_svg]:text-black",
} as const;
