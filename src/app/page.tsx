import { LuBookOpen, LuClock, LuGraduationCap } from "react-icons/lu";
import CourseCard from "@/features/courses/components/course-card";
import ShowcaseSection from "@/features/showcase/components/showcase-section";
import InteractiveDemo from "@/features/showcase/components/interactive-demo";
import AcademicAppNavbar from "@/shared/components/ui/academic-app-navbar";
import ActionButton from "@/shared/components/ui/action-button";
import AlertBanner from "@/shared/components/ui/alert-banner";
import MetricBentoStat from "@/shared/components/ui/metric-bento-stat";
import StatusBadge from "@/shared/components/ui/status-badge";
import StepProgressTracker from "@/shared/components/ui/step-progress-tracker";
import ToastNotification from "@/shared/components/ui/toast-notification";
import UserAvatar from "@/shared/components/ui/user-avatar";

export default function Home() {
  return (
    <>
      <AcademicAppNavbar
        brandName="Portal Académico Icesi"
        user={{ name: "Juan", avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg", notificationsCount: 4, currentTerm: "2026-2" }}
      />
      <main className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:py-10">
        <header>
          <h1 className="text-2xl font-bold text-primary sm:text-3xl">Componentes reutilizables con daisyUI</h1>
          <p className="mt-1 text-base-content/70">10 componentes con props tipadas · Tailwind CSS v4 · daisyUI 5</p>
        </header>

        <ShowcaseSection number="Demo" title="Flujo interactivo (01, 03, 10, 18)">
          <InteractiveDemo />
        </ShowcaseSection>

        <div className="grid gap-6 lg:grid-cols-2">
          <ShowcaseSection number="01" title="Botón de acción">
            <div className="flex flex-wrap items-center gap-3">
              <ActionButton label="Primario" badgeText="PDF" />
              <ActionButton label="Secundario" variant="secondary" />
              <ActionButton label="Contorno" variant="outline" size="sm" />
              <ActionButton label="Fantasma" variant="ghost" size="sm" />
              <ActionButton label="Cargando" isLoading />
            </div>
          </ShowcaseSection>

          <ShowcaseSection number="02" title="Insignia de estado">
            <div className="flex flex-wrap gap-3">
              <StatusBadge status="active" label="Activo" />
              <StatusBadge status="review" label="En revisión" />
              <StatusBadge status="pending" label="Pendiente" />
              <StatusBadge status="danger" label="Vencido" />
              <StatusBadge status="neutral" label="Archivado" hasPulse={false} />
            </div>
          </ShowcaseSection>
        </div>

        <ShowcaseSection number="03" title="Banner de alerta">
          <div className="space-y-3">
            <AlertBanner
              title="Nuevo calendario académico"
              description="Ya está disponible el calendario del periodo 2026-2 con las fechas de parciales."
              actionLabel="Ver calendario"
              actionHref="/calendario"
            />
            <AlertBanner type="success" title="Matrícula confirmada" description="Tus asignaturas quedaron inscritas correctamente." />
            <AlertBanner type="error" title="Pago rechazado" description="No pudimos procesar tu pago. Intenta con otro medio." actionLabel="Reintentar" actionHref="/pagos" />
          </div>
        </ShowcaseSection>

        <div className="grid gap-6 lg:grid-cols-2">
          <ShowcaseSection number="04" title="Avatar de usuario">
            <div className="space-y-5">
              <UserAvatar
                name="Juan"
                role="Estudiante"
                program="Ingeniería de Sistemas"
                avatarUrl="https://randomuser.me/api/portraits/men/32.jpg"
                isOnline
                locationText="Edificio L · Sala 203"
                size="lg"
              />
              <UserAvatar
                name="Laura Méndez"
                role="Docente"
                program="Diseño de Medios"
                avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
                isOnline={false}
              />
              <UserAvatar
                name="Sofía Ramírez"
                role="Monitor"
                avatarUrl="https://randomuser.me/api/portraits/women/68.jpg"
                size="sm"
                isOnline
              />
            </div>
          </ShowcaseSection>

          <ShowcaseSection number="07" title="Métrica bento">
            <div className="grid gap-4 sm:grid-cols-2">
              <MetricBentoStat
                title="Promedio acumulado"
                value="4.3"
                maxValue="5.0"
                trendText="+0.2 vs semestre anterior"
                trendType="positive"
                icon={<LuGraduationCap className="h-6 w-6" />}
              />
              <MetricBentoStat
                title="Créditos aprobados"
                value={112}
                maxValue={160}
                trendText="Sin cambios"
                icon={<LuBookOpen className="h-6 w-6" />}
              />
              <MetricBentoStat
                title="Horas de estudio"
                value={18}
                trendText="-3 h esta semana"
                trendType="negative"
                icon={<LuClock className="h-6 w-6" />}
                className="sm:col-span-2"
              />
            </div>
          </ShowcaseSection>
        </div>

        <ShowcaseSection number="08" title="Tarjeta de asignatura">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <CourseCard
              courseCode="09784"
              title="Desarrollo de Entornos Digitales Web"
              instructor="Kevin Rodríguez"
              room="Edificio L · 203"
              credits={3}
              progressPercentage={72}
              courseUrl="/cursos/09784"
              syllabusUrl="/cursos/09784/silabo"
            />
            <CourseCard
              courseCode="09611"
              title="Interacción Humano-Computador"
              instructor="Laura Méndez"
              room="Edificio D · 104"
              credits={3}
              progressPercentage={64}
              courseUrl="/cursos/09611"
            />
            <CourseCard
              courseCode="06120"
              title="Administración Financiera"
              instructor="Andrés Castillo"
              room="Edificio C · 305"
              credits={4}
              progressPercentage={130}
              courseUrl="/cursos/06120"
              syllabusUrl="/cursos/06120/silabo"
            />
          </div>
        </ShowcaseSection>

        <div className="grid gap-6 lg:grid-cols-2">
          <ShowcaseSection number="10" title="Notificación toast (estática)">
            <ToastNotification
              floating={false}
              title="Commit sincronizado"
              message="Los cambios se subieron al repositorio del curso."
              detail="feat(ui): status-badge"
            />
          </ShowcaseSection>

          <ShowcaseSection number="13" title="Rastreador de hitos">
            <div className="space-y-6">
              <StepProgressTracker
                title="Proyecto final"
                steps={[
                  { label: "Propuesta", isCompleted: true },
                  { label: "Sprint 1", isCompleted: true },
                  { label: "Sprint 2", isCompleted: false, isCurrent: true },
                  { label: "Entrega", isCompleted: false },
                ]}
              />
              <StepProgressTracker
                title="Taller de componentes"
                steps={[
                  { label: "Átomos", isCompleted: true },
                  { label: "Moléculas", isCompleted: true },
                  { label: "Organismos", isCompleted: false, isCurrent: true },
                  { label: "README", isCompleted: false },
                  { label: "Sustentación", isCompleted: false },
                ]}
              />
            </div>
          </ShowcaseSection>
        </div>

        <p className="pb-4 text-center text-xs text-base-content/50">
          16 · Barra de navegación (arriba) · 18 · Modal de confirmación (en la demo interactiva)
        </p>
      </main>
    </>
  );
}
