import { Button } from '../ui/button'
import { Input } from '../ui/input';
import instagram from "@/../public/ig_icon.png";
import linkedin from "@/../public/linkedin.png";
import facebook from "@/../public/facebook.png";
import whatsapp from "@/../public/whatsapp.png";
import Image from 'next/image';

export default function Footer() {
  return (
          <footer className="py-12 md:py-8 rounded-3xl mx-6 md:mx-14 mb-16 p-1 md:p-8 bg-[url('/BG5.png')] bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-0">
            <div className='md:w-2/3 md:mr-70'>
              <h3 className="text-[28px] md:text-[52px] font-semibold text-white">Don&apos;t Miss a Thing</h3>
              <p className="mb-8 text-[19px] md:text-[27px] max-w-[500px] font-light md:py-8 text-white">
                Be the first to get notified when we get new updates and launch
              </p>
              <div className="flex gap-2 md:gap-4">
                <Input 
                  type="email" 
                  placeholder="Enter email" 
                  className="bg-transparent border-white text-white placeholder-white rounded-3xl py-6"
                />
                <Button className="bg-[#189132] hover:bg-green-700 text-white rounded-full cursor-pointer text-[17px] md:text-[27px] font-light py-6">
                  Join the waitlist
                </Button>
              </div>
            </div>
            <div className='md:w-1/3'>
              <h4 className="text-[20px] md:text-[27px] font-semibold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2">
                <p><a href="#why-now" className="hover:text-[#189132] text-white text-[15px] md:text-[19px]">Why Now?</a></p>
                <p><a href="#how-it-works" className="hover:text-[#189132] text-white text-[15px] md:text-[19px]">How it Works?</a></p>
              </div>
              <div className="flex space-x-4 mt-8">
                <Image src={instagram} alt="instagram" className='cursor-pointer hover:scale-y-105'/>
                <Image src={linkedin} alt="linkedin" className='cursor-pointer hover:scale-y-105'/>
                <Image src={facebook} alt="facebook" className='cursor-pointer hover:scale-y-105'/>
                <Image src={whatsapp} alt="whatsapp" className='cursor-pointer hover:scale-y-105'/>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 text-left">
            <p className="text-white text-[15px] md:text-[19px] font-light">© 2025 Zolt Africa. All rights Reserved.</p>
          </div>
        </div>
      </footer>
  )
}
