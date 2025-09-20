import Image from "next/image";
import bike from "@/../public/zolt_bike.png";

export default function WhyNow() {
  return (
    <section id="why-now" className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-[27px] md:text-[52px] font-semibold text-[#231F20] mb-4 md:mb-8">
            Why Now?
          </h2>
          <p className="text-[#231F20] font-light text-[19px] md:text-[26px] max-w-5xl mx-auto md:leading-relaxed">
            Petrol costs are crushing incomes; drivers spend{" "}
            <span className="font-bold">₦10k–₦15k</span> daily on fuel.
            Petrol tricycles are expensive to buy and maintain, making
            ownership difficult. Nigeria&apos;s fuel subsidy removal has
            created a tipping point.{" "}
            <span className="text-[#189132] font-semibold">
              The future of transport is electric, cleaner, cheaper, and
              smarter.
            </span>
          </p>
        </div>

        {/* Green card */}
        <div className="relative md:mt-32">
          <div className="relative rounded-3xl bg-[#189132]">
            {/* content row */}
            <div className="relative z-10 grid md:grid-cols-2 items-center py-10 md:py-20 px-6 md:px-16">
              <div className="text-white">
                <h3 className="text-[26px] md:text-[52px] font-bold mb-6">Why Now?</h3>
                <p className="hidden md:block md:text-[25px] font-extralight leading-tight tracking-wide">
                  Zolt EV brings electric tricycles, battery swapping,
                </p>
                <p className="hidden md:block md:text-[25px] font-extralight leading-tight tracking-wide">
                   and fintech-powered ownership plans that make
                </p>
                <p className="hidden md:block md:text-[25px] font-extralight leading-tight tracking-wide">
                   driving clean affordable and profitable.
                </p>
                <p className="block md:hidden text-[15px] font-extralight leading-6 tracking-wide mb-48">Zolt EV brings electric tricycles, battery swapping, and fintech-powered ownership plans that make driving clean affordable and profitable.</p>
              </div>

              {/* empty cell to reserve space on the right for the bike */}
              <div aria-hidden="true" />
            </div>
          </div>

          <div
            className="absolute right-40 z-20 pointer-events-none"
            style={{
              transform: "translate(20%, -82%)",
            }}
          >
            <div className="w-[320px] md:w-[520px] lg:w-[600px]">
              <Image
                src={bike}
                alt="Zolt Electric Motorcycle"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
