import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "5522998771598";
  const message =
    "Olá! Vim pelo site da Bold Parfum e gostaria de saber mais sobre os perfumes.";

  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a]"
    >
      <FaWhatsapp size={34} />
    </a>
  );
}