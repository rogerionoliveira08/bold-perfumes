
import Image from "next/image";

export default function WeeklyOffer() {
  return (
    <section className="border-b border-zinc-200 bg-white py-8 sm:py-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="relative w-full overflow-hidden bg-black">
          <Image
            src="/black-friday/banner-black-friday.png"
            alt="Black Friday Bold Parfum"
            width={1600}
            height={700}
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
