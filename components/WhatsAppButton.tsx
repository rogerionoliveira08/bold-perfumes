export default function WhatsAppButton() {
  const phone = "5522998771598";
  const message = "Olá! Vim pelo site da Bold Parfam e gostaria de saber mais sobre os perfumes.";

  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      className="fixed bottom-5 right-5 z-50 bg-green-500 text-white px-5 py-4 rounded-full font-bold shadow-2xl hover:bg-green-400 transition"
    >
      WhatsApp
    </a>
  );
}