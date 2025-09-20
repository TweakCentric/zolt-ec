import Image from 'next/image'
import smallbattery from "@/../public/smallbattery.png";
import largebattery from "@/../public/largebattery.png";
import cargo from "@/../public/cargo.png";
import bike from "@/../public/zolt_bike.png"

export default function HowZoltWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-[#F8F8F8]">
      <div className="container mx-auto px-6">
        <h2 className="text-[26px] md:text-[52px] font-semibold text-[#231F20] text-center leading-tight">How Zolt Works –</h2>
        <h2 className="text-[26px] md:text-[52px] font-semibold text-[#231F20] mb-6 md:mb-8 text-center leading-tight">Three Layers of Our Model</h2>
        
        <div className="w-full">
            <div className="flex flex-col md:flex-row items-center w-full mb-5 md:mb-0">
              <div className="w-full md:w-1/2 flex justify-center md:justify-end pr-0 md:pr-8">
                <div className="max-w-[500px]">
                  <h3 className="text-[22px] md:text-[38px] font-medium text-[#189132] mb-3 text-left">Battery-as-a-Service (BaaS)</h3>
                  <p className="text-[#231F20] text-[19px] md:text-[25px] font-light text-left mb-4 md:mb-0">
                    Swap batteries in under 2 minutes at Zolt stations, cheaper than fuel, no downtime.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-start pl-0 md:pl-8">
                <div className="flex items-center gap-0 space-y-2">
                  <Image 
                    src={smallbattery} 
                    alt="Small Battery" 
                    className="w-30 md:w-50 h-auto"
                  />
                  <Image 
                    src={largebattery} 
                    alt="Large Battery" 
                    className="w-30 md:w-50 h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row items-center w-full mb-5 md:mb-0">
              <div className="w-full md:w-1/2 flex justify-center md:justify-end pr-0 md:pr-8">
                <Image 
                  src={cargo}
                  alt="Zolt Electric Vehicle" 
                  className="w-160 md:w-200 h-auto"
                />
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-start pl-0 md:pl-8">
                <div className="max-w-[500px]">
                  <h3 className="text-[22px] md:text-[38px] font-medium text-[#189132] mb-3 text-left">EV-as-a-Service (EVaaS)</h3>
                  <p className="text-[#231F20] text-[19px] md:text-[25px] font-light text-left mb-4 md:mb-0">
                    Lease-to-own and rental access to Zolt EVs, with daily micro-payments through our fintech partners.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center w-full mb-5 md:mb-0">
              <div className="w-full md:w-1/2 flex justify-center md:justify-end pr-0 md:pr-8">
                <div className="max-w-[550px]">
                  <h3 className="text-[22px] md:text-[38px] font-medium text-[#189132] mb-3 text-left">Mobility-as-a-Service (MaaS)</h3>
                  <p className="text-[#231F20] text-[19px] md:text-[25px] font-light text-left mb-4 md:mb-0">
                    Zolt EV fleets powering ride-hailing, logistics, and government transport partnerships.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-start pl-0 md:pl-8">
                <Image 
                  src={bike}
                  alt="Zolt Fleet" 
                  className="w-90 md:w-140 h-auto"
                />
              </div>
            </div>
         

          <div className="text-center mt-8">
            <p className="text-lg md:text-xl text-gray-800 font-semibold max-w-2xl mx-auto">
              Together, these 3 layers create a complete clean mobility ecosystem for Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}