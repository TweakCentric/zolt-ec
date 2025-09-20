import React from 'react'

export default function Impact() {
  return (
    <section className="py-20"
      style={{
        background: 'radial-gradient(48.26% 48.26% at 50% 42.36%, rgba(211, 248, 188, 0.39) 0%, #FFF 100%)'
      }}
    >
        <div className="container mx-auto px-6">
          <h2 className="text-[26px] md:text-[52px] font-semibold text-center leading-tight mb-8 md:mb-16">Our Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
            <div className="flex gap-4 items-center mx-4 space-x-4 border border-[#231F20] rounded-3xl p-6 h-32 md:h-42">
              <h3 className="text-[28px] md:text-[60px] font-semibold">40%</h3>
              <p className="text-[19px] md:text-[27px] font-light w-[240px] md:w-[300px]">Earn up to 40% more net income.</p>
            </div>
            
            <div className="flex gap-4 items-center mx-4 space-x-4 border border-[#231F20] rounded-3xl p-6 h-32 md:h-42">
              <h3 className="text-[28px] md:text-[60px] font-semibold">1st</h3>
              <p className="text-[19px] md:text-[27px] font-light w-[240px] md:w-[300px]">First female keke drivers and mechanics in Nigeria.</p>
            </div>
            
            <div className="flex gap-4 items-center mx-4 space-x-4 border border-[#231F20] rounded-3xl p-6 h-32 md:h-42">
              <h3 className="text-[28px] md:text-[60px] font-semibold">100+</h3>
              <p className="text-[19px] md:text-[27px] font-light w-[240px] md:w-[300px]">Hundreds of local jobs through assembly and service.</p>
            </div>
            
            <div className="flex gap-4 items-center mx-4 space-x-4 border border-[#231F20] rounded-3xl p-6 h-32 md:h-42">
              <h3 className="text-[26px] md:text-[60px] font-semibold">50-70%</h3>
              <p className="text-[19px] md:text-[27px] font-light w-[240px] md:w-[300px]">50-70% emissions reduction vs petrol tricycles.</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 border border-[#231F20] rounded-3xl p-6 h-32 md:h-42 text-center max-w-3xl mx-4 md:mx-auto">
            <p className="text-[19px] md:text-[27px] font-light">
              Delivering on SDGs <strong>7</strong> (clean energy), <strong>8</strong> (decent work), 
              <strong>11</strong> (sustainable cities), <strong>13</strong> (climate action).
            </p>
          </div>
        </div>
    </section>
  )
}
