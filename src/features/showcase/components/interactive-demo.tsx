"use client";

import { useCallback, useState } from "react";
import { LuFileText, LuSend } from "react-icons/lu";
import ActionButton from "@/shared/components/ui/action-button";
import AlertBanner from "@/shared/components/ui/alert-banner";
import SubmissionConfirmModal from "@/shared/components/ui/submission-confirm-modal";
import ToastNotification from "@/shared/components/ui/toast-notification";

export default function InteractiveDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [toastKey, setToastKey] = useState<number | null>(null);
  const [isReminderVisible, setIsReminderVisible] = useState(true);

  const handleConfirm = () => {
    setIsModalOpen(false);
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setToastKey(Date.now());
    }, 1500);
  };

  const handleToastClose = useCallback(() => setToastKey(null), []);

  return (
    <div className="space-y-4">
      {isReminderVisible && (
        <AlertBanner
          type="warning"
          title="Entrega pendiente"
          description="El taller de componentes vence esta semana. Revisa tu archivo antes de enviarlo."
          actionLabel="Entendido"
          onActionClick={() => setIsReminderVisible(false)}
        />
      )}
      <div className="flex flex-wrap gap-3">
        <ActionButton
          label="Enviar entrega"
          icon={<LuSend className="h-4 w-4" />}
          badgeText="PDF"
          isLoading={isSending}
          onClick={() => setIsModalOpen(true)}
        />
        <ActionButton label="Descargar guía" icon={<LuFileText className="h-4 w-4" />} variant="outline" size="sm" />
      </div>
      <SubmissionConfirmModal
        isOpen={isModalOpen}
        assignmentName="Taller de componentes"
        fileName="componentes-daisyui-juan.pdf"
        onConfirm={handleConfirm}
        onCancel={() => setIsModalOpen(false)}
      />
      {toastKey && (
        <ToastNotification
          key={toastKey}
          title="Entrega enviada"
          message="Tu archivo se registró correctamente."
          detail="commit a1b2c3d"
          autoCloseMs={5000}
          onClose={handleToastClose}
        />
      )}
    </div>
  );
}
