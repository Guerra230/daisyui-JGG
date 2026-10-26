import Image from "next/image";

export interface ChatMessageProps {
  senderName: string;
  senderRole?: string;
  message: string;
  timestamp: string;
  avatarUrl: string;
  isSenderTeacher?: boolean;
  deliveryStatus?: string;
}

export default function ChatMessage({
  senderName,
  senderRole,
  message,
  timestamp,
  avatarUrl,
  isSenderTeacher = false,
  deliveryStatus,
}: ChatMessageProps) {
  return (
    <div className={`chat ${isSenderTeacher ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className={`w-10 rounded-full ${isSenderTeacher ? "ring-2 ring-primary ring-offset-2 ring-offset-base-100" : ""}`}>
          <Image src={avatarUrl} alt={`Fotografía de perfil de ${senderName}`} width={40} height={40} />
        </div>
      </div>
      <div className="chat-header flex items-center gap-1.5 text-base-content">
        <span className="font-medium">{senderName}</span>
        {senderRole && <span className="badge badge-ghost badge-xs">{senderRole}</span>}
        <time className="text-xs opacity-60">{timestamp}</time>
      </div>
      <div className={`chat-bubble max-w-[85%] text-sm sm:max-w-md ${isSenderTeacher ? "chat-bubble-primary" : "bg-base-200 text-base-content"}`}>
        {message}
      </div>
      {deliveryStatus && <div className="chat-footer text-xs opacity-60">{deliveryStatus}</div>}
    </div>
  );
}
