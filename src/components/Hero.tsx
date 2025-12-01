import React from 'react';

export default function Hero() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Shop Like You Have Never Before
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Explore a world of high-quality products designed to fit your lifestyle. 
              Whether you're upgrading your essentials or discovering something new, we 
              bring you trusted brands, seamless shopping, and fast, reliable delivery 
              all in one place.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dfit=crop"
                alt="Shopping Experience"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="mt-12 text-center">
          <p className="text-xl md:text-2xl font-medium text-gray-700 italic">
            Feel The Ultimate Shopping Experience At Your Finger Tips
          </p>
        </div>
      </div>
    </section>
  );
}
