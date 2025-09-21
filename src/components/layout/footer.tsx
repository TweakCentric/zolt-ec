import { Button } from '../ui/button'
import { Input } from '../ui/input';
import instagram from "@/../public/ig_icon.png";
import linkedin from "@/../public/linkedin.png";
import facebook from "@/../public/facebook.png";
import whatsapp from "@/../public/whatsapp.png";
import Image from 'next/image';

export default function Footer() {
  return (
          <footer className="bg-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <h3 className="text-[28px] md:text-[52px] font-semibold">Don&apos;t Miss a Thing</h3>
              <p className="mb-8 text-[19px] md:text-[27px] max-w-[500px] font-light md:py-8">
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
            <div className='mr-40'>
              <h4 className="text-[20px] md:text-[27px] font-semibold mb-4">Quick Links</h4>
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
