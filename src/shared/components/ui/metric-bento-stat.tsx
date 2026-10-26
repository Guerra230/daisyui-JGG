import type { ReactNode } from "react";
import { LuMinus, LuTrendingDown, LuTrendingUp } from "react-icons/lu";

type TrendType = "positive" | "negative" | "neutral";

export interface MetricBentoStatProps {
  title: string;
  value: string | number;
  maxValue?: string | number;
  trendText?: string;
  trendType?: TrendType;
  icon: ReactNode;
  className?: string;
}

const trendConfig: Record<TrendType, { text: string; icon: ReactNode }> = {
  positive: { text: "text-icesi-green", icon: <LuTrendingUp className="h-4 w-4" aria-hidden="true" /> },
  negative: { text: "text-error", icon: <LuTrendingDown className="h-4 w-4" aria-hidden="true" /> },
  neutral: { text: "text-base-content/60", icon: <LuMinus className="h-4 w-4" aria-hidden="true" /> },
};

export default function MetricBentoStat({
  title,
  value,
  maxValue,
  trendText,
  trendType = "neutral",
  icon,
  className = "",
}: MetricBentoStatProps) {
  const trend = trendConfig[trendType];

  return (
    <div className={`stats w-full rounded-box border border-base-300 bg-base-100 shadow-sm ${className}`}>
      <div className="stat">
        <div className="stat-figure rounded-xl bg-primary/10 p-3 text-primary">{icon}</div>
        <div className="stat-title">{title}</div>
        <div className="stat-value text-primary">
          {value}
          {maxValue !== undefined && <span className="text-lg font-medium text-base-content/50"> / {maxValue}</span>}
        </div>
        {trendText && (
          <div className={`stat-desc flex items-center gap-1 font-medium ${trend.text}`}>
            {trend.icon}
            {trendText}
          </div>
        )}
      </div>
    </div>
  );
}
