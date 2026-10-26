# Componentes reutilizables con daisyUI

Tarea individual de **Desarrollo de Entornos Digitales Web** (Semana 12): biblioteca de 10 componentes reutilizables con **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4** y **daisyUI 5**, usando el tema institucional `icesi`.

## Ejecutar

```bash
npm install
npm run dev
```

Abrir http://localhost:3000 para ver la página de demostración con todos los componentes.

## Componentes implementados

| # | Nivel | Componente | Ruta | Tipo |
|---|-------|------------|------|------|
| 01 | Átomo | `ActionButton` | `src/shared/components/ui/action-button.tsx` | Server compatible |
| 02 | Átomo | `StatusBadge` | `src/shared/components/ui/status-badge.tsx` | Server Component |
| 03 | Átomo | `AlertBanner` | `src/shared/components/ui/alert-banner.tsx` | Server compatible |
| 04 | Átomo | `UserAvatar` | `src/shared/components/ui/user-avatar.tsx` | Server Component |
| 07 | Átomo | `MetricBentoStat` | `src/shared/components/ui/metric-bento-stat.tsx` | Server Component |
| 08 | Molécula | `CourseCard` | `src/features/courses/components/course-card.tsx` | Server Component |
| 10 | Molécula | `ToastNotification` | `src/shared/components/ui/toast-notification.tsx` | Client Component |
| 13 | Molécula | `StepProgressTracker` | `src/shared/components/ui/step-progress-tracker.tsx` | Server Component |
| 16 | Organismo | `AcademicAppNavbar` | `src/shared/components/ui/academic-app-navbar.tsx` | Server Component |
| 18 | Organismo | `SubmissionConfirmModal` | `src/shared/components/ui/submission-confirm-modal.tsx` | Client Component |

Componentes de apoyo para la demostración:

- `src/features/showcase/components/showcase-section.tsx`
- `src/features/showcase/components/interactive-demo.tsx` (flujo botón → modal → carga → toast)

## Decisiones técnicas

- **Tema `icesi`** definido en `src/app/globals.css` con `@plugin "daisyui/theme"`: Azul `#5454e9` (primary/info), Morado `#865cf0` (secondary), Verde `#4cb979` (success), Naranja `#e9683b` (warning) y Amarillo `#e4eb60` (accent). Los colores también existen como tokens de Tailwind (`text-icesi-green`, `from-icesi-blue`), sin hexadecimales arbitrarios ni estilos inline.
- **`'use client'` solo donde hace falta**: `ToastNotification` (estado y temporizador) y `SubmissionConfirmModal` (`<dialog>` nativo con `showModal()` y cierre con `Escape`). El menú del navbar usa `dropdown` de daisyUI con foco CSS, sin JavaScript.
- **Props tipadas** con `interface` y valores por defecto; `ActionButton` extiende `ButtonHTMLAttributes<HTMLButtonElement>`.
- **Accesibilidad**: `role="alert"`/`status`, `aria-live`, `aria-current="step"`, `aria-label` en botones de solo icono, `alt` descriptivo y fallback de iniciales en avatares.
- **Mobile-first**: probado sin desbordamiento horizontal en 360 px; el modal se muestra como hoja inferior en móvil y centrado en escritorio, y el rastreador de hitos pasa a vertical en móvil cuando tiene más de 4 pasos.
- **Navegación** interna con `next/link`; imágenes con `next/image` (dominio `randomuser.me` configurado en `next.config.ts`).
