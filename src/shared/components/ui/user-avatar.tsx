import Image from "next/image";
import { LuMapPin } from "react-icons/lu";

type AvatarSize = "sm" | "md" | "lg";

export interface UserAvatarProps {
  name: string;
  role: string;
  program?: string;
  avatarUrl?: string | null;
  isOnline?: boolean;
  locationText?: string;
  size?: AvatarSize;
}

const sizeConfig: Record<AvatarSize, { box: string; px: number; text: string; initials: string }> = {
  sm: { box: "w-10", px: 40, text: "text-sm", initials: "text-sm" },
  md: { box: "w-14", px: 56, text: "text-base", initials: "text-lg" },
  lg: { box: "w-20", px: 80, text: "text-lg", initials: "text-2xl" },
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export default function UserAvatar({
  name,
  role,
  program,
  avatarUrl,
  isOnline,
  locationText,
  size = "md",
}: UserAvatarProps) {
  const config = sizeConfig[size];
  const presence = isOnline === undefined ? "" : isOnline ? "avatar-online" : "avatar-offline";

  return (
    <div className="flex min-w-0 items-center gap-3">
      <div className={`avatar ${presence} ${avatarUrl ? "" : "avatar-placeholder"}`}>
        <div className={`${config.box} rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100 ${avatarUrl ? "" : "bg-primary text-primary-content"}`}>
          {avatarUrl ? (
            <Image src={avatarUrl} alt={`Fotografía de perfil de ${name}`} width={config.px} height={config.px} />
          ) : (
            <span className={`${config.initials} font-semibold`} aria-label={`Iniciales de ${name}`}>
              {getInitials(name)}
            </span>
          )}
        </div>
      </div>
      <div className="min-w-0">
        <p className={`${config.text} truncate font-semibold text-base-content`}>{name}</p>
        <div className="mt-0.5 flex flex-wrap items-center gap-1.5">
          <span className="badge badge-primary badge-xs">{role}</span>
          {program && <span className="truncate text-xs text-base-content/70">{program}</span>}
        </div>
        {locationText && (
          <p className="mt-1 flex items-center gap-1 text-xs text-base-content/60">
            <LuMapPin className="h-3 w-3" aria-hidden="true" />
            {locationText}
          </p>
        )}
      </div>
    </div>
  );
}
