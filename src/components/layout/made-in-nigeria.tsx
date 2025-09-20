import waterplant from "@/../public/water_plant_icon.png";
import books from "@/../public/books_icon.png";
import jobicon from "@/../public/job_icon.png";
import Image from "next/image";
import { Card } from "../ui/card";

export default function MadeInNigeria() {
  return (
    <section className="py-20 bg-black text-white mx-14 rounded-3xl mb-28">
        <div className="container mx-auto px-6">
          <h2 className="text-[26px] md:text-[52px] font-semibold text-center leading-tight">Made in Nigeria –</h2>
          <p className="text-[26px] md:text-[52px] font-semibold mb-6 md:mb-12 text-center leading-tight">Assembly & Local Jobs</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <Card className="border border-white bg-transparent p-10">
              <Image src={waterplant} alt="waterplant" className="w-16 md:w-20"/>
              <p className="text-white text-[20px] md:text-[25px] font-light">Our Semi Knocked-Down <span className="font-semibold">(SKD)</span> assembly plant in Kano will produce 5,000+ units annually.
              </p>
            </Card>
            
            <Card className="border border-white bg-transparent p-10">
              <Image src={books} alt="books" className="w-16 md:w-20"/>
              <p className="text-white text-[20px] md:text-[25px] font-light">Local assembly cuts costs by <span className="font-semibold">20-30%</span> and reduces dependence on imports.
              </p>
            </Card>
            
            <Card className="border border-white bg-transparent p-10">
              <Image src={jobicon} alt="jobicon" className="w-16 md:w-20"/>
              <p className="text-white text-[20px] md:text-[25px] font-light">Creates <strong className="font-semibold">200+</strong> skilled jobs
                for Nigerians in manufacturing, servicing, and operations.
              </p>
            </Card>
          </div>
        </div>
    </section>
  )
}
