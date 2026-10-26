"use client";

import { useEffect, useId, useRef } from "react";
import { LuFileText, LuSend, LuTriangleAlert } from "react-icons/lu";

export interface SubmissionConfirmModalProps {
  isOpen: boolean;
  assignmentName: string;
  fileName?: string;
  warningMessage?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function SubmissionConfirmModal({
  isOpen,
  assignmentName,
  fileName,
  warningMessage = "Una vez enviada, la entrega no podrá modificarse ni reemplazarse.",
  confirmLabel = "Enviar definitivamente",
  cancelLabel = "Cancelar",
  onConfirm,
  onCancel,
}: SubmissionConfirmModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="modal modal-bottom sm:modal-middle"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onCancel={(event) => {
        event.preventDefault();
        onCancel();
      }}
    >
      <div className="modal-box">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-warning/15 text-icesi-orange" aria-hidden="true">
            <LuTriangleAlert className="h-6 w-6" />
          </span>
          <div className="min-w-0">
            <h3 id={titleId} className="text-lg font-bold">
              ¿Confirmar entrega de {assignmentName}?
            </h3>
            <p id={descriptionId} className="mt-1 text-sm text-base-content/70">
              {warningMessage}
            </p>
            {fileName && (
              <p className="mt-3 flex items-center gap-2 rounded-field bg-base-200 px-3 py-2 text-sm">
                <LuFileText className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="truncate font-medium">{fileName}</span>
              </p>
            )}
          </div>
        </div>
        <div className="modal-action">
          <button type="button" className="btn btn-sm btn-ghost" onClick={onCancel}>
            {cancelLabel}
          </button>
          <button type="button" className="btn btn-sm btn-primary" onClick={onConfirm} autoFocus>
            <LuSend className="h-4 w-4" aria-hidden="true" />
            {confirmLabel}
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="button" onClick={onCancel} aria-label="Cerrar diálogo">
          cerrar
        </button>
      </form>
    </dialog>
  );
}
