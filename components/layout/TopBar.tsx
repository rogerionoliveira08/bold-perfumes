import { FaTruck, FaCreditCard, FaCheckCircle } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-yellow-400 text-black">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-center items-center gap-6 text-sm md:text-base font-semibold">

        <div className="flex items-center gap-2">
          <FaTruck />
          <span>Frete para todo o Brasil</span>
        </div>

        <div className="flex items-center gap-2">
          <FaCheckCircle />
          <span>Perfumes 100% Originais</span>
        </div>

        <div className="flex items-center gap-2">
          <FaCreditCard />
          <span>Parcele em até 12x </span>
        </div>

      </div>
    </div>
  );
}