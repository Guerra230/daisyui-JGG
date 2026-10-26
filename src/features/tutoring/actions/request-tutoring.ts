"use server";

import { redirect } from "next/navigation";

export async function requestTutoring(formData: FormData): Promise<void> {
  const topic = String(formData.get("topic") ?? "");
  const description = String(formData.get("description") ?? "").trim();

  if (!topic || description.length < 10) {
    redirect("/?tutoria=incompleta#tutoria");
  }

  redirect(`/?tutoria=${encodeURIComponent(topic)}#tutoria`);
}
