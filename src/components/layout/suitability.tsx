import Image from 'next/image'
import stationsite from "@/../public/stationsites.png";
import blackbullet from "@/../public/zolt_black_bullet.png";

export default function Suitability() {
  return (
    <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-[26px] md:text-[52px] font-semibold text-center leading-tight">Suitability Studies –</h2>
          <h2 className="text-[26px] md:text-[52px] font-semibold text-center leading-tight mb-8 md:mb-16">Where We Deploy</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-8 text-[#231F20]">
              <div className="flex items-center space-x-4 border border-[#231F20] rounded-3xl p-6 h-36 md:h-42">
                <Image src={blackbullet} alt='blackbullet' className='size-10 md:size-13'/>
                <div>
                  <p className="font-light text-[20px] md:text-[27px]"><span className="font-semibold">Swap station sites</span> identified based on traffic flows, markets, universities, and peri-urban demand.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 border border-[#231F20] rounded-3xl p-6 h-36 md:h-42">
                <Image src={blackbullet} alt='blackbullet' className='size-10 md:size-13'/>
                <div>
                  <p className="font-light text-[20px] md:text-[27px]"><span className="font-semibold">Kano pilot</span> swap hubs near main market, Kano University, and farming suburbs.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 border border-[#231F20] rounded-3xl p-6 h-36 md:h-42">
                <Image src={blackbullet} alt='blackbullet' className='size-10 md:size-13'/>
                <div>
                  <p className="font-light text-[20px] md:text-[27px]"><span className="font-semibold">Expansion roadmap</span> Abuja, Plateau, Lagos, and other high-density regions.</p>
                </div>
              </div>
            </div>
            <div>
              <Image 
                src={stationsite} 
                alt="Zolt Battery Swap Station" 
                className="w-full"
              />
            </div>
          </div>
        </div>
    </section>
  )
}
