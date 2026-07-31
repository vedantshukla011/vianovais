import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919654109754";
const WHATSAPP_MESSAGE = "Hi, we are interested in your products. Please share the best quote";

export const WhatsAppFloatingButton = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
    </a>
  );
};
