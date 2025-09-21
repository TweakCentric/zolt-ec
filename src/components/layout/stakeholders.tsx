import Image from 'next/image';
import { Button } from '../ui/button';
import driver from '@/../public/truck-driver_icon.png';
import partnership from "@/../public/partnership_icon.png";
import investment from '@/../public/investment_icon.png';
import { Card } from '../ui/card';

export default function Stakeholders() {
  return (
    <section className="py-20 bg-[#F8F8F8]">
        <div className="container mx-auto px-10">
          <h2 className="text-[26px] md:text-[52px] font-semibold text-center leading-tight">For Drivers, Dealers & </h2>
          <h2 className="text-[26px] md:text-[52px] font-semibold text-center leading-tight mb-8">Partners</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto">
            <Card className="bg-transparent p-8 rounded-2xl border border-[#231F20] flex flex-col h-full">
              <Image src={driver} alt='driver' className="w-16 md:w-20"/>
              <h3 className="text-[25px] md:text-[32px] text-[#231F20] font-semibold mb-2 md:mb-4">For Drivers</h3>
              <p className="text-[19px] md:text-[27px] text-[#231F20] mb-4 md:mb-8 font-light">Earn more, spend less with Zolt EV + BaaS.</p>
              <div className="mt-auto">
                <Button className="bg-[#189132] hover:bg-green-700 text-white w-full rounded-full cursor-pointer text-[19px] md:text-[27px] font-light py-6">
                  Sign up as Driver
                </Button>
              </div>
            </Card>
            
            <Card className="bg-transparent p-8 rounded-2xl border border-[#231F20] flex flex-col h-full">
              <Image src={partnership} alt='investment' className="w-16 md:w-20"/>
              <h3 className="text-[19px] md:text-[32px] text-[#231F20] font-bold mb-2 md:mb-4">For Dealers & Partners</h3>
              <p className="text-[20px] md:text-[27px] text-[#231F20] mb-4 md:mb-8 font-light">Expand with EV-ready distribution.</p>
              <div className="mt-auto">
                <Button className="bg-[#189132] hover:bg-green-700 text-white w-full rounded-full cursor-pointer text-[20px] md:text-[27px] font-light py-6">
                  Register as Partner
                </Button>
              </div>
            </Card>
            
            <Card className="bg-transparent p-8 rounded-2xl border border-[#231F20] flex flex-col h-full">
              <Image src={investment} alt='investment' className="w-16 md:w-20"/>
              <h3 className="text-[26px] md:text-[32px] text-[#231F20] font-bold mb-2 md:mb-4">For Governments & Investors</h3>
              <p className="text-[20px] md:text-[27px] text-[#231F20] mb-4 md:mb-8 font-light">Align with Nigeria&apos;s energy transition and job creation goals.</p>
              <div className="mt-auto">
                <Button className="bg-[#189132] hover:bg-green-700 text-white w-full rounded-full cursor-pointer text-[20px] md:text-[27px] font-light py-6">
                  Partner with Us
                </Button>
              </div>
            </Card>
          </div>
        </div>
    </section>
  )
}