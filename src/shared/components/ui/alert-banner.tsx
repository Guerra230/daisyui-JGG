import Link from "next/link";
import type { ReactNode } from "react";
import { LuCircleCheck, LuCircleX, LuInfo, LuTriangleAlert } from "react-icons/lu";

type AlertType = "info" | "success" | "warning" | "error";

export interface AlertBannerProps {
  title: string;
  description: string;
  type?: AlertType;
  actionLabel?: string;
  actionHref?: string;
  onActionClick?: () => void;
  className?: string;
}

const typeConfig: Record<AlertType, { alert: string; icon: ReactNode; button: string }> = {
  info: { alert: "alert-info", icon: <LuInfo className="h-6 w-6 text-info" />, button: "btn-info" },
  success: { alert: "alert-success", icon: <LuCircleCheck className="h-6 w-6 text-success" />, button: "btn-success" },
  warning: { alert: "alert-warning", icon: <LuTriangleAlert className="h-6 w-6 text-warning" />, button: "btn-warning" },
  error: { alert: "alert-error", icon: <LuCircleX className="h-6 w-6 text-error" />, button: "btn-error" },
};

export default function AlertBanner({
  title,
  description,
  type = "info",
  actionLabel,
  actionHref,
  onActionClick,
  className = "",
}: AlertBannerProps) {
  const config = typeConfig[type];
  const buttonClasses = `btn btn-xs btn-outline ${config.button}`;

  return (
    <div
      role={type === "error" || type === "warning" ? "alert" : "status"}
      aria-live="polite"
      className={`alert alert-soft ${config.alert} alert-vertical items-start sm:alert-horizontal ${className}`}
    >
      {config.icon}
      <div className="text-base-content">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-base-content/80">{description}</p>
      </div>
      {actionLabel && actionHref && (
        <Link href={actionHref} className={buttonClasses}>
          {actionLabel}
        </Link>
      )}
      {actionLabel && !actionHref && onActionClick && (
        <button type="button" onClick={onActionClick} className={buttonClasses}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}
