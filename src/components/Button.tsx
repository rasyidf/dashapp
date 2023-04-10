import clsx from "clsx";
import { ReactNode } from "react";

type ButtonProps = {
  variant?: "default" | "ghost" | "outline" | "square";
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
  icon?: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant, children, className, icon, color, ...props }: ButtonProps) {
  return (
    <button className={clsx("btn", `btn-${variant}`, `btn-${color}`, className)} {...props}>
      {icon && icon}
      {children}</button>
  );
}


Button.defaultProps = {
  variant: "default",
  color: "primary",
}