import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ScreenshotSlider from './components/ScreenshotSlider';
import Description from './components/Description';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-200 font-sans selection:bg-neon-400 selection:text-black">
      
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 pt-24 pb-12 flex flex-col gap-12">
        {/* Hero Section */}
        <section>
          <HeroSection />
        </section>

        {/* Content Grid: Slider & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Slider & Description */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <ScreenshotSlider />
            </section>
            
            <section>
              <Description />
            </section>
          </div>

          {/* Right Column: Sticky Sidebar / Additional Info (Optional placeholder for ads or related) 
              For this landing page, we can put the Download section here on desktop or keep it full width below.
              Let's keep the layout simple as per prompt requirements and put Download below.
          */}
           <div className="lg:col-span-1 space-y-6">
              {/* Info Card Sidebar */}
              <div className="bg-dark-900 border border-white/5 rounded-xl p-6 sticky top-24">
                <h3 className="text-white font-bold mb-4 text-lg">Game Info</h3>
                <ul className="space-y-4 text-sm text-slate-400">
                    <li className="flex justify-between border-b border-white/5 pb-2">
                        <span>Package</span>
                        <span className="text-white">com.ea.game.pvz2_row</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-2">
                        <span>License</span>
                        <span className="text-white">Free</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-2">
                        <span>Requires</span>
                        <span className="text-white">Android 5.0</span>
                    </li>
                    <li className="flex justify-between pb-2">
                        <span>Category</span>
                        <span className="text-neon-400">Strategy</span>
                    </li>
                </ul>
                <div className="mt-6 p-4 bg-neon-400/5 rounded-lg border border-neon-400/20">
                    <p className="text-xs text-neon-400 text-center">
                        This MOD is safe to install. No root required.
                    </p>
                </div>
              </div>
           </div>

        </div>

        {/* Download Section */}
        <section className="mt-8 border-t border-white/5 pt-12">
          <DownloadSection />
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;