import type { ReactNode } from "react";

interface IContainer {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: IContainer) => {
  return <div className={`mx-[auto] w-[min(100%-64px,1110px)] ${className}`}>{children}</div>;
};
