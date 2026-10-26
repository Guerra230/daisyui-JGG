export type BadgeStatus = "active" | "pending" | "review" | "danger" | "neutral";

export interface StatusBadgeProps {
  status: BadgeStatus;
  label: string;
  hasPulse?: boolean;
  className?: string;
}

const statusClasses: Record<BadgeStatus, { badge: string; dot: string }> = {
  active: { badge: "badge-success", dot: "bg-success" },
  pending: { badge: "badge-warning", dot: "bg-warning" },
  review: { badge: "badge-secondary", dot: "bg-secondary" },
  danger: { badge: "badge-error", dot: "bg-error" },
  neutral: { badge: "badge-neutral", dot: "bg-base-content/40" },
};

export default function StatusBadge({ status, label, hasPulse = true, className = "" }: StatusBadgeProps) {
  const { badge, dot } = statusClasses[status];

  return (
    <span className={`badge badge-soft ${badge} inline-flex items-center gap-2 font-medium ${className}`}>
      <span className={`h-2 w-2 rounded-full ${dot} ${hasPulse ? "animate-pulse" : ""}`} aria-hidden="true" />
      {label}
    </span>
  );
}
