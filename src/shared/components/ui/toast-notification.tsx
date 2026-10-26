"use client";

import { useEffect, useState, type ReactNode } from "react";
import { LuCircleCheck, LuCircleX, LuInfo, LuTriangleAlert, LuX } from "react-icons/lu";

type ToastVariant = "success" | "info" | "warning" | "error";

export interface ToastNotificationProps {
  title: string;
  message: string;
  variant?: ToastVariant;
  detail?: string;
  autoCloseMs?: number;
  floating?: boolean;
  onClose?: () => void;
}

const variantConfig: Record<ToastVariant, { border: string; iconBox: string; icon: ReactNode }> = {
  success: { border: "border-l-success", iconBox: "bg-success text-white", icon: <LuCircleCheck className="h-5 w-5" /> },
  info: { border: "border-l-info", iconBox: "bg-info text-white", icon: <LuInfo className="h-5 w-5" /> },
  warning: { border: "border-l-warning", iconBox: "bg-warning text-white", icon: <LuTriangleAlert className="h-5 w-5" /> },
  error: { border: "border-l-error", iconBox: "bg-error text-white", icon: <LuCircleX className="h-5 w-5" /> },
};

export default function ToastNotification({
  title,
  message,
  variant = "success",
  detail,
  autoCloseMs,
  floating = true,
  onClose,
}: ToastNotificationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const config = variantConfig[variant];

  useEffect(() => {
    if (!autoCloseMs) return;
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, autoCloseMs);
    return () => clearTimeout(timer);
  }, [autoCloseMs, onClose]);

  if (!isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  const content = (
    <div
      role="status"
      aria-live="polite"
      className={`alert w-full max-w-sm items-start gap-3 border border-base-300 border-l-4 ${config.border} bg-base-100 text-left shadow-lg`}
    >
      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${config.iconBox}`} aria-hidden="true">
        {config.icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-base-content">{title}</p>
        <p className="text-sm text-base-content/70">{message}</p>
        {detail && <code className="mt-1 inline-block rounded bg-base-200 px-1.5 py-0.5 font-mono text-xs">{detail}</code>}
      </div>
      <button type="button" onClick={handleClose} className="btn btn-ghost btn-xs btn-square" aria-label="Cerrar notificación">
        <LuX className="h-4 w-4" />
      </button>
    </div>
  );

  if (!floating) return content;

  return <div className="toast toast-top toast-end z-50 max-w-[calc(100vw-1rem)]">{content}</div>;
}
