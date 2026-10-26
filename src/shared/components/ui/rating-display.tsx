import { useId } from "react";

export interface RatingDisplayProps {
  score: number;
  totalReviews?: number;
  showScoreText?: boolean;
  maxScore?: number;
  size?: "xs" | "sm" | "md";
}

const sizeClasses = {
  xs: "rating-xs",
  sm: "rating-sm",
  md: "rating-md",
};

export default function RatingDisplay({
  score,
  totalReviews,
  showScoreText = true,
  maxScore = 5,
  size = "sm",
}: RatingDisplayProps) {
  const name = useId();
  const clamped = Math.min(maxScore, Math.max(0, score));
  const selectedHalf = Math.round(clamped * 2);
  const halves = Array.from({ length: maxScore * 2 }, (_, index) => index + 1);

  return (
    <div className="flex flex-wrap items-center gap-2" aria-label={`Calificación de ${clamped.toFixed(1)} sobre ${maxScore}`}>
      <div className={`rating rating-half ${sizeClasses[size]}`} aria-hidden="true">
        <input type="radio" name={name} className="rating-hidden" disabled defaultChecked={selectedHalf === 0} />
        {halves.map((half) => (
          <input
            key={half}
            type="radio"
            name={name}
            disabled
            defaultChecked={half === selectedHalf}
            className={`mask mask-star-2 bg-warning ${half % 2 === 1 ? "mask-half-1" : "mask-half-2"} disabled:cursor-default`}
          />
        ))}
      </div>
      {showScoreText && <span className="font-bold text-base-content">{clamped.toFixed(1)}</span>}
      {totalReviews !== undefined && (
        <span className="text-sm text-base-content/60">({totalReviews.toLocaleString("es-CO")} evaluaciones)</span>
      )}
    </div>
  );
}
