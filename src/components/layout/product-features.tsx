import Image from 'next/image';
import cargo from "@/../public/cargo.png";
import bike from "@/../public/zolt_bike.png";
import payload from "@/../public/payload_icon.png";
import range from "@/../public/range_icon.png";
import speed from "@/../public/speed_icon.png";

export default function ProductFeatures() {
  return (
    <section className="py-16 bg-[#F8F8F8]">
      <div className="container mx-auto px-6">
        <h2 className="text-[27px] md:text-[52px] font-semibold text-[#231F20] mb-8 md:mb-12 text-center">
          Product Features
        </h2>

        <div className="max-w-7xl mx-auto">
          {/* First Row - Vehicle with specs on left */}
          <div className="flex flex-col-reverse lg:flex-row items-center mb-16 lg:mb-24 md:gap-8">           
            <div className="bg-white rounded-2xl border border-[#189132] p-8 shadow-lg max-w-xl">
                {/* Range */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#189132]">
                    <div className="size-17 md:size-20 bg-[#189132] rounded-full flex items-center justify-center mr-4">
                        <div className="border-3 border-white rounded-full flex items-center justify-center">
                            <Image src={range} alt='range' className='size-14 md:size-17 p-1'/>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-0 items-center h-20">
                    <div className="font-medium text-[19px] md:text-[28px] w-[80px] md:w-[200px]">Range</div>
                    <div className="text-[19px] md:text-[28px] font-light w-[100px] md:w-[200px]">120 km per charge</div>
                    </div>
                </div>

                {/* Payload */}
                <div className="flex items-center mb-4 pb-4 border-b border-[#189132]">
                    <div className="size-17 md:size-20 bg-[#189132] rounded-full flex items-center justify-center mr-4">
                        <div className="border-3 border-white rounded-full flex items-center justify-center">
                            <Image src={payload} alt='range' className='size-14 md:size-17 p-1'/>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-0 items-center h-20">
                        <div className="font-medium text-[19px] md:text-[28px] w-[80px] md:w-[200px]">Payload</div>
                        <div className="text-[19px] md:text-[28px] font-light w-[100px] md:w-[200px]">400 kg</div>
                    </div>
                </div>

                {/* Top Speed */}
                <div className="flex items-center">
                    <div className="size-17 md:size-20 bg-[#189132] rounded-full flex items-center justify-center mr-4">
                        <div className="border-3 border-white rounded-full flex items-center justify-center">
                            <Image src={speed} alt='range' className='size-14 md:size-17 p-1'/>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-0 items-center h-20">
                        <div className="font-medium text-[19px] md:text-[28px] w-[80px] md:w-[200px]">Top Speed</div>
                        <div className="text-[19px] md:text-[28px] font-light w-[100px] md:w-[200px]">60 km/h</div>
                    </div>
                </div>
            </div>
            

            {/* Vehicle Image */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-full">
                <Image
                  src={cargo} 
                  alt="Zolt Electric Vehicle - Passenger Transport"
                  width={800}
                  className=''
                />
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 flex justify-center">
              <div className="relative w-full">
                <Image 
                  src={bike} 
                  alt="Zolt Electric Motorcycle"
                  width={600}
                />
              </div>
            </div>

            {/* Specs Card */}
            <div className="bg-white rounded-2xl border border-[#189132] p-8 shadow-lg max-w-xl">
            {/* Range */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#189132]">
                <div className="size-17 md:size-20 bg-[#189132] rounded-full flex items-center justify-center mr-4">
                    <div className="border-3 border-white rounded-full flex items-center justify-center">
                        <Image src={range} alt='range' className='size-14 md:size-17 p-1'/>
                    </div>
                </div>
                <div className="flex items-center h-20">
                    <div className="font-medium text-[19px] md:text-[28px] w-[80px] md:w-[200px]">Range</div>
                    <div className="text-[19px] md:text-[28px] font-light w-[100px] md:w-[200px]">100-120 km per charge</div>
                </div>
            </div>

            {/* Payload */}
            <div className="flex items-center mb-6 pb-4 border-b border-[#189132]">
                <div className="size-17 md:size-20 bg-[#189132] rounded-full flex items-center justify-center mr-4">
                    <div className="border-3 border-white rounded-full flex items-center justify-center">
                        <Image src={payload} alt='range' className='size-14 md:size-17 p-1'/>
                    </div>
                </div>
                <div className="flex items-center h-20">
                <div className="font-medium text-[19px] md:text-[28px] w-[80px] md:w-[200px]">Payload</div>
                <div className="text-[19px] md:text-[28px] font-light w-[100px] md:w-[200px]">80 km/h</div>
                </div>
            </div>

            {/* Description */}
            <div className="text-center leading-tight font-light text-[19px] md:text-[28px]">
                <p>
                Ideal for courier services,
                </p>
                <p>
                farmers, and personal
                </p>
                <p>
                transport.
                </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}