import Link from "next/link";
import { LuBookOpen, LuMapPin, LuUser } from "react-icons/lu";

export interface CourseCardProps {
  courseCode: string;
  title: string;
  instructor: string;
  room: string;
  credits: number;
  progressPercentage: number;
  courseUrl: string;
  syllabusUrl?: string;
}

export default function CourseCard({
  courseCode,
  title,
  instructor,
  room,
  credits,
  progressPercentage,
  courseUrl,
  syllabusUrl,
}: CourseCardProps) {
  const progress = Math.min(100, Math.max(0, Math.round(progressPercentage)));

  return (
    <article className="card w-full overflow-hidden border border-base-300 bg-base-100 shadow-sm">
      <div className="bg-linear-to-r from-icesi-blue to-icesi-purple px-6 py-5 text-primary-content">
        <div className="flex items-start justify-between gap-3">
          <span className="font-mono text-sm opacity-90">{courseCode}</span>
          <span className="badge badge-outline badge-sm border-white/70 text-white">{credits} créditos</span>
        </div>
        <h3 className="mt-2 text-lg font-bold leading-tight">{title}</h3>
      </div>
      <div className="card-body gap-4">
        <ul className="space-y-1.5 text-sm text-base-content/80">
          <li className="flex items-center gap-2">
            <LuUser className="h-4 w-4 text-primary" aria-hidden="true" />
            {instructor}
          </li>
          <li className="flex items-center gap-2">
            <LuMapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            {room}
          </li>
        </ul>
        <div>
          <div className="mb-1 flex justify-between text-xs font-medium">
            <span className="text-base-content/70">Progreso del semestre</span>
            <span className="text-primary">{progress}%</span>
          </div>
          <progress
            className="progress progress-primary w-full"
            value={progress}
            max={100}
            aria-label={`Progreso del semestre en ${title}`}
          />
        </div>
        <div className="card-actions justify-end">
          {syllabusUrl && (
            <Link href={syllabusUrl} className="btn btn-ghost btn-sm">
              <LuBookOpen className="h-4 w-4" aria-hidden="true" />
              Sílabo
            </Link>
          )}
          <Link href={courseUrl} className="btn btn-primary btn-sm">
            Entrar al aula
          </Link>
        </div>
      </div>
    </article>
  );
}
