import bank from "@/../public/bankicon.svg";
import female from "@/../public/femicon.svg";
import station from "@/../public/stationicon.svg";
import pipeline from "@/../public/pipelineicon.svg";
import circle from "@/../public/circle_timeline.png";
import Image from "next/image";

export default function Traction() {
  return (
      <section className="py-20"
      style={{
        background: 'radial-gradient(48.26% 48.26% at 50% 42.36%, rgba(211, 248, 188, 0.39) 0%, #FFF 100%)'
      }}>
        <div className="coverer mx-auto px-6">
          <h2 className="text-[26px] md:text-[52px] font-semibold text-[#231F20] mb-6 md:mb-8 text-center">Traction to Date</h2>
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical dotted line - centered on desktop, left-aligned on mobile */}
            <div className="absolute left-4.5 md:left-1/2 top-2 md:top-16 bottom-0 md:-translate-x-1/2">
              <div className="h-[380px] md:h-[450px] border-l-2 border-dashed border-gray-500" />
            </div>
            
            <div className="space-y-12 md:space-y-16">
              {/* Item 1 - Left side on desktop, image left content right on mobile */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 flex justify-start md:justify-end mb-4 md:mb-0">
                  <div className="flex flex-row md:flex-row items-center space-x-4 ml-16 md:ml-0">
                    {/* Mobile: icon first, text second */}
                    <div className="md:hidden border border-[#189132] rounded-xl p-3 md:p-4 bg-white shadow-xl size-16 flex items-center justify-center">
                      <Image src={bank} alt="bankicon" width={50} height={50} className="object-cover"/>
                    </div>
                    <div className="md:order-1">
                      <p className="text-[18px] md:text-[22px] font-light text-[#231F20] text-left md:text-right w-[250px] md:w-[270px]">
                        120 units deployed in Kano with Sterling Bank&apos;s Alternative Bank.
                      </p>
                    </div>
                    {/* Desktop: text first, icon second */}
                    <div className="hidden md:flex md:order-2 border border-[#189132] rounded-xl p-4 bg-white shadow-xl w-24 h-24 items-center justify-center">
                      <Image src={bank} alt="bankicon" width={65} height={65} className="object-cover"/>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 z-10 absolute left-0 md:relative md:left-auto">
                  <Image src={circle} alt="circle" className="size-10"/>
                </div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>

              {/* Item 2 - Right side on desktop, right side on mobile */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8"></div>
                <div className="flex-shrink-0 z-10 absolute left-0 md:relative md:left-auto mb-4 md:mb-0">
                  <Image src={circle} alt="circle" className="size-10"/>
                </div>
                <div className="md:w-1/2 md:pl-8 flex justify-start md:justify-start">
                  <div className="flex flex-row items-center space-x-4 ml-16 md:ml-0 md:space-y-0 md:flex-row md:space-x-4">
                    <div className="border border-[#189132] rounded-xl p-3 md:p-4 bg-white shadow-xl size-16 md:size-24 flex items-center justify-center">
                      <Image src={female} alt="female"  className="object-cover w-[50px] md:w-[65px] h-[50px] md:h-[65px]"/>
                    </div>
                    <div>
                      <p className="text-[18px] md:text-[22px] font-light text-[#231F20] text-left md:text-left w-[250px] md:w-[270px]">
                        85 women drivers + 30 female mechanics empowered.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 3 - Left side on desktop, image left content right on mobile */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 flex justify-start md:justify-end mb-4 md:mb-0">
                  <div className="flex flex-row md:flex-row items-center space-x-4 ml-16 md:ml-0">
                    {/* Mobile: icon first, text second */}
                    <div className="md:hidden border border-[#189132] rounded-xl p-3 md:p-4 bg-white shadow-xl size-16 flex items-center justify-center">
                      <Image src={station} alt="station" width={40} height={40} className="object-cover"/>
                    </div>
                    <div className="md:order-1">
                      <p className="text-[18px] md:text-[22px] font-light text-[#231F20] text-left md:text-right w-[250px] md:w-[270px]">
                        2 battery swap stations live in Kano city.
                      </p>
                    </div>
                    {/* Desktop: text first, icon second */}
                    <div className="hidden md:flex md:order-2 border border-[#189132] rounded-xl p-4 bg-white shadow-xl w-24 h-24 items-center justify-center">
                      <Image src={station} alt="station" width={65} height={65} className="object-cover"/>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 z-10 absolute left-0 md:relative md:left-auto">
                  <Image src={circle} alt="circle" className="size-10"/>
                </div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>

              {/* Item 4 - Right side on desktop, right side on mobile */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8"></div>
                <div className="flex-shrink-0 z-10 absolute left-0 md:relative md:left-auto mb-4 md:mb-0">
                  <Image src={circle} alt="circle" className="size-10"/>
                </div>
                <div className="md:w-1/2 md:pl-8 flex justify-start md:justify-start">
                  <div className="flex flex-row items-center space-x-4 ml-16 md:ml-0 md:space-y-0 md:flex-row md:space-x-4">
                    <div className="border border-[#189132] rounded-xl p-3 md:p-4 bg-white shadow-xl size-16 md:size-24 flex items-center justify-center">
                      <Image src={pipeline} alt="pipeline" className="object-cover w-[50px] md:w-[65px] h-[50px] md:h-[65px]"/>
                    </div>
                    <div>
                      <p className="text-[18px] md:text-[22px] font-light text-[#231F20] text-left md:text-left w-[250px] md:w-[270px]">
                        Niger (5,000 units) & Plateau (3,000 units) states in pipeline
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}