export interface StepItem {
  label: string;
  isCompleted: boolean;
  isCurrent?: boolean;
  stepNumber?: number | string;
}

export interface StepProgressTrackerProps {
  steps: StepItem[];
  title?: string;
}

function getStepState(step: StepItem) {
  if (step.isCompleted) return "completado";
  if (step.isCurrent) return "en curso";
  return "pendiente";
}

export default function StepProgressTracker({ steps, title }: StepProgressTrackerProps) {
  const layout = steps.length > 4 ? "steps-vertical md:steps-horizontal" : "steps-horizontal";

  return (
    <nav aria-label={title ?? "Progreso por hitos"} className="w-full">
      {title && <h3 className="mb-3 text-sm font-semibold text-base-content/70">{title}</h3>}
      <ol className={`steps w-full ${layout}`}>
        {steps.map((step, index) => {
          const isHighlighted = step.isCompleted || step.isCurrent;
          return (
            <li
              key={`${step.label}-${index}`}
              data-content={step.isCompleted ? "✓" : String(step.stepNumber ?? index + 1)}
              aria-current={step.isCurrent ? "step" : undefined}
              className={`step text-xs sm:text-sm ${isHighlighted ? "step-primary" : ""} ${step.isCurrent ? "font-semibold text-primary" : ""}`}
            >
              <span>{step.label}</span>
              <span className="sr-only">: {getStepState(step)}</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
