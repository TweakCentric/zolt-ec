import CallToAction from "@/components/layout/cta";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Hero from "@/components/layout/hero";
import HowZoltWorks from "@/components/layout/how-zolt-works";
import Impact from "@/components/layout/impact";
import MadeInNigeria from "@/components/layout/made-in-nigeria";
import ProductFeatures from "@/components/layout/product-features";
import Stakeholders from "@/components/layout/stakeholders";
import Suitability from "@/components/layout/suitability";
import Traction from "@/components/layout/traction";
import WhyNow from "@/components/layout/why-now";
import ZoltApp from "@/components/layout/zolt-app";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyNow />
      <Traction />
      <HowZoltWorks />
      <ZoltApp />
      <MadeInNigeria />
      <Stakeholders />
      <Suitability />
      <ProductFeatures />
      <Impact />
      <CallToAction />
      <Footer />
    </div>
  );
}
