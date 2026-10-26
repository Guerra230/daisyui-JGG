import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { LuBell, LuGraduationCap, LuLogOut, LuSettings, LuUser } from "react-icons/lu";

export interface UserSessionData {
  name: string;
  avatarUrl: string;
  notificationsCount: number;
  currentTerm: string;
}

export interface NavbarMenuLink {
  label: string;
  href: string;
  icon?: ReactNode;
}

export interface AcademicAppNavbarProps {
  brandName: string;
  user: UserSessionData;
  menuLinks?: NavbarMenuLink[];
}

const defaultMenuLinks: NavbarMenuLink[] = [
  { label: "Mi perfil", href: "/perfil", icon: <LuUser className="h-4 w-4" aria-hidden="true" /> },
  { label: "Configuración", href: "/configuracion", icon: <LuSettings className="h-4 w-4" aria-hidden="true" /> },
  { label: "Cerrar sesión", href: "/login", icon: <LuLogOut className="h-4 w-4" aria-hidden="true" /> },
];

export default function AcademicAppNavbar({ brandName, user, menuLinks = defaultMenuLinks }: AcademicAppNavbarProps) {
  const notifications = user.notificationsCount > 99 ? "99+" : String(user.notificationsCount);

  return (
    <header className="navbar gap-2 border-b border-base-300 bg-base-100 px-3 shadow-sm sm:px-6">
      <div className="navbar-start min-w-0 gap-3">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label={`Ir al inicio de ${brandName}`}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-content">
            <LuGraduationCap className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-bold leading-tight text-base-content">{brandName}</span>
            <span className="hidden text-xs text-base-content/60 sm:block">Periodo {user.currentTerm}</span>
          </span>
        </Link>
      </div>
      <div className="navbar-end gap-1 sm:gap-3">
        <Link href="/notificaciones" className="btn btn-ghost btn-circle" aria-label={`Notificaciones: ${notifications} sin leer`}>
          <div className="indicator">
            <LuBell className="h-5 w-5" aria-hidden="true" />
            {user.notificationsCount > 0 && (
              <span className="badge indicator-item badge-xs badge-secondary">{notifications}</span>
            )}
          </div>
        </Link>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar avatar-online" aria-label="Abrir menú de usuario">
            <div className="w-9 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
              <Image src={user.avatarUrl} alt={`Fotografía de perfil de ${user.name}`} width={36} height={36} />
            </div>
          </div>
          <ul tabIndex={0} className="menu dropdown-content z-50 mt-3 w-56 rounded-box border border-base-300 bg-base-100 p-2 shadow-lg">
            <li className="menu-title">
              <span className="truncate text-base-content">{user.name}</span>
              <span className="text-xs font-normal">Periodo {user.currentTerm}</span>
            </li>
            {menuLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  {link.icon}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
