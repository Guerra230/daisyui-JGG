import { LuSend } from "react-icons/lu";

export interface TutoringTopicOption {
  id: string;
  label: string;
}

export interface TutoringRequestFormProps {
  availableTopics: TutoringTopicOption[];
  actionHandler?: (formData: FormData) => Promise<void>;
  title?: string;
}

export default function TutoringRequestForm({
  availableTopics,
  actionHandler,
  title = "Solicitar tutoría",
}: TutoringRequestFormProps) {
  return (
    <form action={actionHandler} className="card w-full border border-base-300 bg-base-100 shadow-sm">
      <div className="card-body gap-3">
        <h3 className="card-title text-lg">{title}</h3>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Tema de la asesoría</legend>
          <select name="topic" required defaultValue="" className="select w-full">
            <option value="" disabled>
              Selecciona un tema
            </option>
            {availableTopics.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.label}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Describe tu inquietud</legend>
          <textarea
            name="description"
            required
            minLength={10}
            rows={4}
            placeholder="Ej: no entiendo cómo tipar las props de un componente cliente"
            className="textarea w-full"
          />
          <p className="label">Mínimo 10 caracteres</p>
        </fieldset>
        <div className="card-actions justify-end">
          <button type="submit" className="btn btn-primary btn-sm">
            <LuSend className="h-4 w-4" aria-hidden="true" />
            Enviar solicitud
          </button>
        </div>
      </div>
    </form>
  );
}
