import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: IconProp;
    iconClassName?: string;
    children: ReactNode;
     loading?: boolean
  variant: "primary" | "secondary" | "danger"|"blue"|"gray"|"green";
}
