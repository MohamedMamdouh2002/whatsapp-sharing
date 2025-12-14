import type { ReactNode } from "react";

export type CardProps = {
  cardClassName?: string;
  moreDetails?: string|any;
  moreDetailsClassName?: string;
  bodyCardClassName?: string;
  title?: string;

  titleClassName?: string;
  children: ReactNode;
};
