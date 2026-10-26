import { useId } from "react";
import { LuCircle, LuCircleCheck } from "react-icons/lu";

type SprintStatus = "completed" | "in_progress" | "pending";

export interface SprintTask {
  description: string;
  isDone: boolean;
}

export interface SprintPhase {
  sprintNumber: number;
  title: string;
  status: SprintStatus;
  tasks: SprintTask[];
  isDefaultOpen?: boolean;
}

export interface SprintAccordionPanelProps {
  sprints: SprintPhase[];
}

const statusConfig: Record<SprintStatus, { badge: string; label: string }> = {
  completed: { badge: "badge-success", label: "Completado" },
  in_progress: { badge: "badge-accent", label: "En progreso" },
  pending: { badge: "badge-ghost", label: "Pendiente" },
};

export default function SprintAccordionPanel({ sprints }: SprintAccordionPanelProps) {
  const groupName = useId();

  return (
    <div className="join join-vertical w-full bg-base-100">
      {sprints.map((sprint) => {
        const status = statusConfig[sprint.status];
        const doneCount = sprint.tasks.filter((task) => task.isDone).length;

        return (
          <div key={sprint.sprintNumber} className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name={groupName} defaultChecked={sprint.isDefaultOpen} aria-label={`Sprint ${sprint.sprintNumber}: ${sprint.title}`} />
            <div className="collapse-title flex flex-wrap items-center gap-x-3 gap-y-1 pe-12">
              <span className="font-mono text-xs text-base-content/50">S{sprint.sprintNumber}</span>
              <span className="font-semibold">{sprint.title}</span>
              <span className={`badge badge-sm ${status.badge}`}>{status.label}</span>
              <span className="ms-auto text-xs text-base-content/60">
                {doneCount}/{sprint.tasks.length} tareas
              </span>
            </div>
            <div className="collapse-content">
              <ul className="space-y-2 text-sm">
                {sprint.tasks.map((task) => (
                  <li key={task.description} className="flex items-start gap-2">
                    {task.isDone ? (
                      <LuCircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-icesi-green" aria-label="Hecha" />
                    ) : (
                      <LuCircle className="mt-0.5 h-4 w-4 shrink-0 text-base-content/30" aria-label="Pendiente" />
                    )}
                    <span className={task.isDone ? "text-base-content/60 line-through" : "text-base-content"}>{task.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
