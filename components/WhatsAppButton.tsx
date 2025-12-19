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
        "group fixed left-[-4px] top-1/2 -translate-y-1/2 z-50 flex items-center overflow-hidden bg-[#25D366] h-12 w-12 rounded-r-sm text-white shadow-xl transition-all duration-300 ease-out hover:w-44 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2",
        className
      )}
      aria-label="Chat with us on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center gap-2 px-3">
        <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span className="whitespace-nowrap text-sm font-medium opacity-0 translate-x-[-8px] transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
          Chat on WhatsApp
        </span>
      </div>
    </a>
  );
}
