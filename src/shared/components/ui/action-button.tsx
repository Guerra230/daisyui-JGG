import type { ButtonHTMLAttributes, ReactNode } from "react";

type ActionButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ActionButtonSize = "sm" | "md" | "lg";

export interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: ReactNode;
  badgeText?: string;
  isLoading?: boolean;
  variant?: ActionButtonVariant;
  size?: ActionButtonSize;
}

const variantClasses: Record<ActionButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  outline: "btn-outline btn-primary",
  ghost: "btn-ghost",
};

const sizeClasses: Record<ActionButtonSize, string> = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

const badgeVariantClasses: Record<ActionButtonVariant, string> = {
  primary: "badge-secondary",
  secondary: "badge-primary",
  outline: "badge-primary badge-soft",
  ghost: "badge-primary badge-soft",
};

export default function ActionButton({
  label,
  icon,
  badgeText,
  isLoading = false,
  variant = "primary",
  size = "md",
  type = "button",
  disabled,
  className = "",
  ...rest
}: ActionButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      className={`btn ${variantClasses[variant]} ${sizeClasses[size]} gap-2 ${className}`}
      {...rest}
    >
      {isLoading ? <span className="loading loading-spinner loading-xs" aria-hidden="true" /> : icon}
      <span>{isLoading ? "Procesando..." : label}</span>
      {badgeText && !isLoading && (
        <span className={`badge badge-sm ${badgeVariantClasses[variant]}`}>{badgeText}</span>
      )}
    </button>
  );
}
