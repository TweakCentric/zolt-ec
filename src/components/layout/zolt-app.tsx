import Image from 'next/image'
import zoltApp from "@/../public/zolt_app.png";
import bullet from "@/../public/zolt_bullet.png";

export default function ZoltApp() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-[26px] md:text-[52px] font-semibold text-[#231F20] text-center leading-tight">The Zolt App –</h2>
        <h2 className="text-[26px] md:text-[52px] font-semibold text-[#231F20] mb-6 md:mb-12 text-center leading-tight">Smart Mobility Platform</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
          <div className="flex items-center justify-center">
            <Image 
              src={zoltApp}
              alt="Zolt Mobile App" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-6 bg-[#189132] text-white p-10 font-light rounded-2xl flex flex-col justify-center">
            <div className="flex items-center space-x-4">
              <Image src={bullet} alt='bullet' className='w-9 md:w-15'/>
              <p className="text-white text-[19px] md:text-[25px]">Pay as you go with micro-financing and mobile wallet.</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Image src={bullet} alt='bullet' className='w-9 md:w-15'/>
              <p className="text-white text-[19px] md:text-[25px]">Track your battery health in real time.</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Image src={bullet} alt='bullet' className='w-9 md:w-15'/>
              <p className="text-white text-[19px] md:text-[25px]">Locate the nearest swap station.</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Image src={bullet} alt='bullet' className='w-9 md:w-15'/>
              <p className="text-white text-[19px] md:text-[25px]">Access insurance and asset financing in one place.</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Image src={bullet} alt='bullet' className='w-9 md:w-15'/>
              <p className="text-white text-[19px] md:text-[25px]"><span className='font-semibold'>Future:</span> book rides and deliveries directly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
