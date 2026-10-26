import { LuBookOpen, LuChartColumn, LuCheckCheck, LuClock, LuGraduationCap, LuTarget, LuTrophy } from "react-icons/lu";
import ChatMessage from "@/features/advising/components/chat-message";
import EventCountdownCard from "@/features/events/components/event-countdown-card";
import FacultyProfileCard from "@/features/faculty/components/faculty-profile-card";
import SprintAccordionPanel from "@/features/projects/components/sprint-accordion-panel";
import StudentTableRow from "@/features/students/components/student-table-row";
import { requestTutoring } from "@/features/tutoring/actions/request-tutoring";
import TutoringRequestForm from "@/features/tutoring/components/tutoring-request-form";
import CourseCard from "@/features/courses/components/course-card";
import ShowcaseSection from "@/features/showcase/components/showcase-section";
import InteractiveDemo from "@/features/showcase/components/interactive-demo";
import AcademicAppNavbar from "@/shared/components/ui/academic-app-navbar";
import ActionButton from "@/shared/components/ui/action-button";
import AlertBanner from "@/shared/components/ui/alert-banner";
import AnalyticsBentoGrid from "@/shared/components/ui/analytics-bento-grid";
import MetricBentoStat from "@/shared/components/ui/metric-bento-stat";
import RatingDisplay from "@/shared/components/ui/rating-display";
import ShortcutPill from "@/shared/components/ui/shortcut-pill";
import StatusBadge from "@/shared/components/ui/status-badge";
import StepProgressTracker from "@/shared/components/ui/step-progress-tracker";
import TagFilterGroup from "@/shared/components/ui/tag-filter-group";
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
          <p className="mt-1 text-base-content/70">20 componentes con props tipadas · Tailwind CSS v4 · daisyUI 5</p>
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

        <div className="grid gap-6 lg:grid-cols-2">
          <ShowcaseSection number="05" title="Atajos de teclado">
            <div className="-mx-3">
              <ShortcutPill label="Buscar asignatura" keys={["Ctrl", "K"]} />
              <ShortcutPill label="Nueva entrega" keys={["Ctrl", "Shift", "N"]} />
              <ShortcutPill label="Abrir calendario" keys={["G", "C"]} />
            </div>
          </ShowcaseSection>

          <ShowcaseSection number="06" title="Calificación por estrellas">
            <div className="space-y-3">
              <RatingDisplay score={4.8} totalReviews={1284} />
              <RatingDisplay score={3.5} totalReviews={42} size="xs" />
              <RatingDisplay score={2} showScoreText={false} size="md" />
            </div>
          </ShowcaseSection>
        </div>

        <ShowcaseSection number="09" title="Panel de analítica multi-métrica">
          <AnalyticsBentoGrid
            stats={[
              { label: "Asistencia", value: "94%", description: "+3% vs semestre anterior", icon: <LuCheckCheck className="h-6 w-6" /> },
              { label: "Entregas a tiempo", value: 18, total: 20, description: "90% de cumplimiento", icon: <LuTarget className="h-6 w-6" />, colorVariant: "secondary" },
              { label: "Promedio del curso", value: "4.1", description: "Puesto 5 de 32", icon: <LuChartColumn className="h-6 w-6" /> },
              { label: "Retos superados", value: 7, total: 10, description: "3 pendientes", icon: <LuTrophy className="h-6 w-6" />, colorVariant: "secondary" },
            ]}
          />
        </ShowcaseSection>

        <div className="grid gap-6 lg:grid-cols-2">
          <ShowcaseSection number="11" title="Conversación de asesoría">
            <div className="space-y-1">
              <ChatMessage
                senderName="Juan"
                senderRole="Estudiante"
                message="Profe, ¿el modal debe usar la etiqueta dialog nativa?"
                timestamp="10:42"
                avatarUrl="https://randomuser.me/api/portraits/men/32.jpg"
              />
              <ChatMessage
                senderName="Laura Méndez"
                senderRole="Docente"
                message="Sí, combínala con la clase modal de daisyUI y llama a showModal()."
                timestamp="10:45"
                avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
                isSenderTeacher
                deliveryStatus="Visto"
              />
            </div>
          </ShowcaseSection>

          <ShowcaseSection number="14" title="Selector de etiquetas">
            <TagFilterGroup
              title="Tecnologías"
              tags={[
                { id: "nextjs", name: "Next.js", isSelected: true },
                { id: "tailwind", name: "Tailwind", isSelected: true },
                { id: "daisyui", name: "daisyUI", isSelected: false },
                { id: "typescript", name: "TypeScript", isSelected: false },
                { id: "nestjs", name: "NestJS", isSelected: false },
                { id: "docker", name: "Docker", isSelected: false },
              ]}
            />
          </ShowcaseSection>
        </div>

        <ShowcaseSection number="12" title="Fila de directorio estudiantil">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Estudiante</th>
                  <th className="hidden md:table-cell">Programa</th>
                  <th>Estado</th>
                  <th className="text-right">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <StudentTableRow studentId="1" studentCode="A00395012" fullName="Juan" program="Ingeniería de Sistemas" avatarUrl="https://randomuser.me/api/portraits/men/32.jpg" status="active" gradesHref="/estudiantes/1/notas" />
                <StudentTableRow studentId="2" studentCode="A00381147" fullName="Valentina Torres" program="Diseño de Medios Interactivos" avatarUrl="https://randomuser.me/api/portraits/women/65.jpg" status="graduated" gradesHref="/estudiantes/2/notas" />
                <StudentTableRow studentId="3" studentCode="A00374520" fullName="Mateo Ríos" program="Ingeniería Telemática" avatarUrl="https://randomuser.me/api/portraits/men/75.jpg" status="inactive" gradesHref="/estudiantes/3/notas" />
              </tbody>
            </table>
          </div>
        </ShowcaseSection>

        <div className="grid gap-6 lg:grid-cols-2">
          <ShowcaseSection number="15" title="Evento con cuenta regresiva">
            <EventCountdownCard
              eventTitle="Hackathon Icesi 2026: IA para el campus"
              categoryTag="Hackathon"
              spotsLeft={6}
              location="Auditorio Manuel Roberto Rojas"
              dateText="14 de noviembre · 8:00 a. m."
              countdown={{ days: 19, hours: 10, minutes: 35 }}
              registerHref="/eventos/hackathon-2026"
            />
          </ShowcaseSection>

          <div id="tutoria">
            <ShowcaseSection number="17" title="Formulario de tutoría">
              <TutoringRequestForm
                actionHandler={requestTutoring}
                availableTopics={[
                  { id: "react", label: "Componentes en React" },
                  { id: "nextjs", label: "Rutas y App Router" },
                  { id: "estilos", label: "Tailwind y daisyUI" },
                  { id: "estado", label: "Estado global con Zustand" },
                ]}
              />
            </ShowcaseSection>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <ShowcaseSection number="19" title="Perfil docente con pestañas">
            <FacultyProfileCard
              fullName="Laura Méndez"
              academicRole="Profesora asociada"
              department="Departamento de Computación y Sistemas Inteligentes"
              avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
              contactHref="mailto:laura.mendez@icesi.edu.co"
              tabs={[
                {
                  id: "asignaturas",
                  label: "Asignaturas",
                  content: (
                    <ul className="list-inside list-disc space-y-1">
                      <li>Interacción Humano-Computador</li>
                      <li>Desarrollo de Entornos Digitales Web</li>
                    </ul>
                  ),
                },
                {
                  id: "horarios",
                  label: "Horarios",
                  content: (
                    <ul className="space-y-1">
                      <li>Martes · 2:00 p. m. – 4:00 p. m. · Edificio L 305</li>
                      <li>Jueves · 10:00 a. m. – 11:00 a. m. · Virtual</li>
                    </ul>
                  ),
                },
                {
                  id: "publicaciones",
                  label: "Publicaciones",
                  content: <p>Diseño de interfaces accesibles para entornos educativos (2025).</p>,
                },
              ]}
            />
          </ShowcaseSection>

          <ShowcaseSection number="20" title="Entregables de sprint">
            <SprintAccordionPanel
              sprints={[
                {
                  sprintNumber: 1,
                  title: "Backend con NestJS",
                  status: "completed",
                  tasks: [
                    { description: "Entidades con TypeORM", isDone: true },
                    { description: "Autenticación JWT", isDone: true },
                    { description: "Pruebas en Postman", isDone: true },
                  ],
                },
                {
                  sprintNumber: 2,
                  title: "Frontend con Next.js",
                  status: "in_progress",
                  isDefaultOpen: true,
                  tasks: [
                    { description: "Estructura por features", isDone: true },
                    { description: "Componentes con daisyUI", isDone: true },
                    { description: "Login y registro conectados", isDone: false },
                  ],
                },
                {
                  sprintNumber: 3,
                  title: "Estado global y despliegue",
                  status: "pending",
                  tasks: [
                    { description: "Store con Zustand", isDone: false },
                    { description: "Despliegue en Railway", isDone: false },
                  ],
                },
              ]}
            />
          </ShowcaseSection>
        </div>

        <p className="pb-4 text-center text-xs text-base-content/50">
          16 · Barra de navegación (arriba) · 18 · Modal de confirmación (en la demo interactiva)
        </p>
      </main>
    </>
  );
}
