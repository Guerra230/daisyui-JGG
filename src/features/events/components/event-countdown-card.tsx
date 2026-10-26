import Link from "next/link";
import { LuCalendar, LuFlame, LuMapPin, LuUsers } from "react-icons/lu";
import EventCountdownClock, { type CountdownValue } from "./event-countdown-clock";

export interface EventCountdownCardProps {
  eventTitle: string;
  categoryTag: string;
  spotsLeft: number;
  location: string;
  dateText: string;
  countdown: CountdownValue;
  registerHref?: string;
  onRegisterClick?: () => void;
  lowSpotsThreshold?: number;
}

export default function EventCountdownCard({
  eventTitle,
  categoryTag,
  spotsLeft,
  location,
  dateText,
  countdown,
  registerHref,
  onRegisterClick,
  lowSpotsThreshold = 10,
}: EventCountdownCardProps) {
  const isUrgent = spotsLeft <= lowSpotsThreshold;
  const isFull = spotsLeft <= 0;

  return (
    <article className="card w-full border border-base-300 bg-base-100 shadow-sm">
      <div className="card-body gap-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="badge badge-primary">{categoryTag}</span>
          <span className={`badge badge-soft gap-1 ${isUrgent ? "badge-warning font-semibold text-icesi-orange" : "badge-neutral"}`}>
            {isUrgent && <LuFlame className="h-3.5 w-3.5" aria-hidden="true" />}
            {isFull ? "Sin cupos" : `${spotsLeft} cupos restantes`}
          </span>
        </div>
        <h3 className="card-title text-lg leading-tight">{eventTitle}</h3>
        <ul className="space-y-1.5 text-sm text-base-content/80">
          <li className="flex items-center gap-2">
            <LuCalendar className="h-4 w-4 text-primary" aria-hidden="true" />
            {dateText}
          </li>
          <li className="flex items-center gap-2">
            <LuMapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            {location}
          </li>
        </ul>
        <EventCountdownClock initial={countdown} />
        {registerHref && !isFull ? (
          <Link href={registerHref} className="btn btn-primary w-full">
            <LuUsers className="h-4 w-4" aria-hidden="true" />
            Registrar equipo
          </Link>
        ) : (
          <button type="button" onClick={onRegisterClick} disabled={isFull} className="btn btn-primary w-full">
            <LuUsers className="h-4 w-4" aria-hidden="true" />
            Registrar equipo
          </button>
        )}
      </div>
    </article>
  );
}
