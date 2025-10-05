"use client";

import { MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  phone?: string;
  message?: string;
  className?: string;
}

export function WhatsAppButton({
  phone = "+919850000000",
  message = "Hello! I'd love to plan a day at Amthane Valley.",
  className,
}: WhatsAppButtonProps) {
  const encoded = encodeURIComponent(message);
  const href = `https://wa.me/${phone.replace(/[^\d]/g, "")}?text=${encoded}`;

  return (
    <a
      href={href}
      className={cn(
        "fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-base font-semibold text-white shadow-xl transition hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2",
        className
      )}
      aria-label="Chat with us on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      Chat on WhatsApp
    </a>
  );
}
