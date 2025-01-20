// import Image from "next/image";

import InformationCrypto from "@/components/InformationCrypto";
import MainCrypto from "@/components/MainCrypto";
import StatsCrypto from "@/components/StatsCrypto";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import TickerCrypto from "@/components/TickerCrypto";

export default function Home() {
  return (
    <>
      <div className="hidden sm:flex fixed top-4 left-4 right-4 z-50 justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 relative overflow-hidden rounded-full  shadow-[0_0_10px_rgba(0,255,0,0.3)]  border border-[#00ff00]/30">
            {/* <img src="/noah-logo.png" alt="Noah Terminal AI" className="w-full h-full object-cover animate-subtle-glow"> */}
          </div>
          <div className="flex items-center">
            <span className="font-mono text-sm font-bold text-[#00ff00]">
              Pro Terminal_
            </span>
            <span className="ml-2 px-1.5 py-0.5 text-[9px] font-mono rounded border border-[#00ff00]/30 text-[#00ff00] bg-[#00ff00]/5">
              BETA
            </span>
          </div>
        </div>
        <ThemeToggleButton />
      </div>

      <div className="sm:hidden fixed top-0 left-0 right-0 bg-black/95 border-b border-[#00ff00]/20 px-4 py-2 z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 relative overflow-hidden rounded-full  shadow-[0_0_10px_rgba(0,255,0,0.3)]  border border-[#00ff00]/30"></div>
            <div className="flex items-center">
              <span className="font-mono text-xs font-bold text-[#00ff00]">
                Project Terminal_
              </span>
              <span className="ml-1.5 px-1 py-0.5 text-[8px] font-mono rounded border border-[#00ff00]/30 text-[#00ff00] bg-[#00ff00]/5">
                BETA
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 rounded border font-mono text-[10px] transition-colors whitespace-nowrap
        border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00]/5"
            >
              WHITEPAPER_
            </a>
            <ThemeToggleButton />
          </div>
        </div>
      </div>

      <main className="min-h-screen bg-black p-4 sm:p-8 relative flex flex-col">
        <TickerCrypto />

        <InformationCrypto />

        <MainCrypto />
        
        <StatsCrypto />
      </main>
    </>
  );
}
