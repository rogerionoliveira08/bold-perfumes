import { FaCheckCircle, FaCreditCard, FaTruck } from "react-icons/fa";

const beneficios = [
  {
    icon: <FaTruck />,
    desktop: "Frete para todo o Brasil",
    mobile: "Frete Brasil",
  },
  {
    icon: <FaCheckCircle />,
    desktop: "Perfumes 100% Originais",
    mobile: "100% Originais",
  },
  {
    icon: <FaCreditCard />,
    desktop: "Parcele em até 12x",
    mobile: "Até 12x",
  },
];

export default function TopBar() {
  return (
    <div className="bg-yellow-400 text-black">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 overflow-hidden px-2 py-2 text-[10px] font-bold sm:gap-6 sm:px-4 sm:text-sm lg:text-base">
        {beneficios.map((beneficio) => (
          <div
            key={beneficio.desktop}
            className="flex shrink-0 items-center gap-1.5 whitespace-nowrap"
          >
            <span className="text-[10px] sm:text-sm">{beneficio.icon}</span>

            <span className="sm:hidden">{beneficio.mobile}</span>
            <span className="hidden sm:inline">{beneficio.desktop}</span>
          </div>
        ))}
      </div>
    </div>
  );
}