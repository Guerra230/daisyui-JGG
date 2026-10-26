import Image from "next/image";
import Link from "next/link";
import { LuEye } from "react-icons/lu";
import StatusBadge, { type BadgeStatus } from "@/shared/components/ui/status-badge";

type StudentStatus = "active" | "inactive" | "graduated";

export interface StudentTableRowProps {
  studentId: string;
  studentCode: string;
  fullName: string;
  program: string;
  avatarUrl: string;
  status: StudentStatus;
  gradesHref?: string;
  onViewGradesClick?: () => void;
}

const statusConfig: Record<StudentStatus, { badge: BadgeStatus; label: string }> = {
  active: { badge: "active", label: "Activo" },
  inactive: { badge: "neutral", label: "Inactivo" },
  graduated: { badge: "review", label: "Graduado" },
};

export default function StudentTableRow({
  studentId,
  studentCode,
  fullName,
  program,
  avatarUrl,
  status,
  gradesHref,
  onViewGradesClick,
}: StudentTableRowProps) {
  const config = statusConfig[status];
  const buttonClasses = "btn btn-ghost btn-xs text-primary";

  return (
    <tr className="hover:bg-base-200/60" data-student-id={studentId}>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-11 w-11">
              <Image src={avatarUrl} alt={`Fotografía de ${fullName}`} width={44} height={44} />
            </div>
          </div>
          <div className="min-w-0">
            <p className="truncate font-semibold">{fullName}</p>
            <p className="font-mono text-xs text-base-content/60">{studentCode}</p>
          </div>
        </div>
      </td>
      <td className="hidden text-sm text-base-content/80 md:table-cell">{program}</td>
      <td>
        <StatusBadge status={config.badge} label={config.label} hasPulse={status === "active"} />
      </td>
      <td className="text-right">
        {gradesHref ? (
          <Link href={gradesHref} className={buttonClasses}>
            <LuEye className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Ver notas</span>
          </Link>
        ) : (
          <button type="button" onClick={onViewGradesClick} className={buttonClasses} aria-label={`Ver notas de ${fullName}`}>
            <LuEye className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Ver notas</span>
          </button>
        )}
      </td>
    </tr>
  );
}
