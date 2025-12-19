"use client";

import { MessageCircle } from "lucide-react";

import { cn } from "../lib/utils";

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
        "group fixed left-[-4px] top-1/2 -translate-y-1/2 z-50 flex items-center gap-2  bg-[#25D366] px-3 py-3 rounded-r-sm text-white shadow-xl transition-all duration-300 hover:scale-105 hover:px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2",
        className
      )}
      aria-label="Chat with us on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="hidden text-sm font-medium group-hover:inline">
        Chat on WhatsApp
      </span>
    </a>
  );
}
