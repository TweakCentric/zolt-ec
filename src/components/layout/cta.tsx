import Image from 'next/image';
import { Button } from '../ui/button';
import cargo from "@/../public/cargo.png";

export default function CallToAction() {
  return (
    <section className="py-8 rounded-3xl mx-6 md:mx-14 mb-16 p-1 bg-[url('/BG4.png')] bg-no-repeat bg-center bg-cover">
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between'>
        <div className="text-left md:mb-30">
          <h2 className="text-[27px] md:text-[52px] font-semibold">Be part of <span className='text-[#189132]'>Africa&apos;s</span></h2>
          <h2 className="text-[27px] md:text-[52px] font-semibold mb-4">mobility revolution.</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#189132] hover:bg-green-700 text-white rounded-full cursor-pointer text-[20px] md:text-[27px] font-light py-6">
              Sign up as Driver
            </Button>
            <Button className="text-[#189132] bg-transparent border border-[#189132] rounded-full cursor-pointer text-[20px] md:text-[27px] font-light py-6">
              Register as Partner
            </Button>
          </div>
        </div>
        <div className='mt-10'>
          <Image
            src={cargo}
            alt="Zolt Electric Tricycle" 
            width={1000}
          />
        </div>
      </div>
    </section>
  )
}
