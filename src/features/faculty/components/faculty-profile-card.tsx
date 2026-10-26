import Image from "next/image";
import Link from "next/link";
import { LuMail } from "react-icons/lu";
import FacultyProfileTabs, { type FacultyTabContent } from "./faculty-profile-tabs";

export interface FacultyProfileCardProps {
  fullName: string;
  academicRole: string;
  department: string;
  avatarUrl: string;
  tabs: FacultyTabContent[];
  contactHref?: string;
  onContactClick?: () => void;
}

export default function FacultyProfileCard({
  fullName,
  academicRole,
  department,
  avatarUrl,
  tabs,
  contactHref,
  onContactClick,
}: FacultyProfileCardProps) {
  const buttonClasses = "btn btn-xs btn-outline btn-primary";

  return (
    <article className="card w-full rounded-2xl border border-base-300 bg-base-100 shadow-sm">
      <div className="card-body gap-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
              <Image src={avatarUrl} alt={`Fotografía de perfil de ${fullName}`} width={64} height={64} />
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-bold leading-tight">{fullName}</h3>
            <p className="text-sm font-medium text-primary">{academicRole}</p>
            <p className="text-xs text-base-content/60">{department}</p>
          </div>
          {contactHref ? (
            <Link href={contactHref} className={buttonClasses}>
              <LuMail className="h-3.5 w-3.5" aria-hidden="true" />
              Contactar
            </Link>
          ) : (
            onContactClick && (
              <button type="button" onClick={onContactClick} className={buttonClasses}>
                <LuMail className="h-3.5 w-3.5" aria-hidden="true" />
                Contactar
              </button>
            )
          )}
        </div>
        <FacultyProfileTabs tabs={tabs} />
      </div>
    </article>
  );
}
