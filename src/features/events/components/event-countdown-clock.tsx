"use client";

import { useEffect, useState, type CSSProperties } from "react";

export interface CountdownValue {
  days: number;
  hours: number;
  minutes: number;
}

export interface EventCountdownClockProps {
  initial: CountdownValue;
}

function toMinutes({ days, hours, minutes }: CountdownValue) {
  return Math.max(0, days * 1440 + hours * 60 + minutes);
}

export default function EventCountdownClock({ initial }: EventCountdownClockProps) {
  const [remaining, setRemaining] = useState(() => toMinutes(initial));

  useEffect(() => {
    const timer = setInterval(() => setRemaining((value) => Math.max(0, value - 1)), 60000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "días", value: Math.floor(remaining / 1440) },
    { label: "horas", value: Math.floor((remaining % 1440) / 60) },
    { label: "min", value: remaining % 60 },
  ];

  return (
    <div className="grid grid-cols-3 gap-2" role="timer" aria-live="off" aria-label={`Faltan ${units[0].value} días, ${units[1].value} horas y ${units[2].value} minutos`}>
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center rounded-field bg-primary/10 py-2">
          <span className="countdown font-mono text-2xl font-bold text-primary">
            <span style={{ "--value": Math.min(unit.value, 999) } as CSSProperties} aria-hidden="true">
              {unit.value}
            </span>
          </span>
          <span className="text-xs text-base-content/60">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
