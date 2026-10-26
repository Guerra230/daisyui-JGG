import { Fragment } from "react";

export interface ShortcutPillProps {
  label: string;
  keys: string[];
  size?: "xs" | "sm";
}

export default function ShortcutPill({ label, keys, size = "sm" }: ShortcutPillProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-field px-3 py-2 text-sm hover:bg-base-200">
      <span className="text-base-content/80">{label}</span>
      <span className="flex shrink-0 items-center gap-1" aria-label={`Atajo: ${keys.join(" + ")}`}>
        {keys.map((key, index) => (
          <Fragment key={`${key}-${index}`}>
            {index > 0 && <span className="text-xs text-base-content/40" aria-hidden="true">+</span>}
            <kbd className={`kbd ${size === "xs" ? "kbd-xs" : "kbd-sm"}`}>{key}</kbd>
          </Fragment>
        ))}
      </span>
    </div>
  );
}
