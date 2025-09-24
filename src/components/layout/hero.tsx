import cargo from "@/../public/cargo.png";
import Image from 'next/image';
import Link from "next/link";

export default function Hero() {
  return (
    <section 
      style={{
        background: 'url(./BG2.png) no-repeat center center',
        backgroundSize: 'contain',
      }}
    >
        <div className="container mx-auto px-6 md:px-10 text-center pt-45">
          <h1 className="text-[32px] md:text-[64px] font-medium text-[#231F20] leading-12 md:leading-14">
            Powering <span className="text-[#189132]">Africa&apos;s Future</span>
          </h1>
          <h1 className="text-[32px] md:text-[64px] font-medium text-[#231F20] mb-5">
            One Ride at a Time
          </h1>
          <p className="text-[19px] md:text-[30px] font-light text-[#231F20] mb-8 max-w-3xl mx-auto md:leading-8">
            Affordable electric tricycles with swap-and-go energy. Save money, earn more, and drive clean.
          </p>
          <Link href="/join-the-waitlist" className="bg-[#189132] hover:bg-green-700 cursor-pointer py-[7px] px-7 text-white rounded-full tracking-wide text-lg md:text-[28px]">
            Join the Waitlist
          </Link>
          <div className="mt-12">
            <Image
              src={cargo}
              alt="Zolt Electric Tricycle" 
              className="mx-auto"
              width={1000}
            />
          </div>
        </div>
      </section>
  )
}