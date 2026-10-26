import type { ReactNode } from "react";

export interface StatItem {
  label: string;
  value: string | number;
  total?: string | number;
  description: string;
  icon: ReactNode;
  colorVariant?: "primary" | "secondary";
}

export interface AnalyticsBentoGridProps {
  stats: StatItem[];
  className?: string;
}

const colorClasses = {
  primary: { figure: "bg-primary/10 text-primary", value: "text-primary", desc: "text-icesi-green" },
  secondary: { figure: "bg-secondary/10 text-secondary", value: "text-secondary", desc: "text-secondary" },
};

export default function AnalyticsBentoGrid({ stats, className = "" }: AnalyticsBentoGridProps) {
  return (
    <div className={`stats stats-vertical w-full border border-base-300 bg-base-100 shadow-sm lg:stats-horizontal ${className}`}>
      {stats.map((stat) => {
        const colors = colorClasses[stat.colorVariant ?? "primary"];
        return (
          <div key={stat.label} className="stat">
            <div className={`stat-figure rounded-xl p-3 ${colors.figure}`}>{stat.icon}</div>
            <div className="stat-title">{stat.label}</div>
            <div className={`stat-value ${colors.value}`}>
              {stat.value}
              {stat.total !== undefined && <span className="text-lg font-medium text-base-content/50"> / {stat.total}</span>}
            </div>
            <div className={`stat-desc font-medium ${colors.desc}`}>{stat.description}</div>
          </div>
        );
      })}
    </div>
  );
}
