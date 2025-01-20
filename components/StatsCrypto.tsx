const StatsCrypto = () => {
    return (
        <div className="fixed top-1/2 -translate-y-1/2 right-0 z-[45] transition-all duration-300 ease-in-out translate-x-[calc(100%-24px)] hover:translate-x-0">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full">
          <div className="flex items-center gap-1 bg-black/95 px-1 py-2 transform rotate-180 writing-mode-vertical cursor-pointer group">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="
          text-[#00ff00]/40 w-3 h-3
          transition-all duration-300
          rotate-180
          group-hover:translate-x-0.5
        "
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
            </svg>
            <span className="text-[#00ff00] text-[10px] font-mono">
              STATS
            </span>
          </div>
        </div>
        <div className=" w-[250px]  bg-black/95 border-l border-[#00ff00] p-4 font-mono text-[10px] ${isMobile ? 'touch-pan-y' : ''} ">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-[#00ff00]/60">Win Rate</div>
              <div className="text-[#00ff00]">74.6%</div>
            </div>
            <div>
              <div className="text-[#00ff00]/60">Total Trades</div>
              <div className="text-[#00ff00]">355</div>
            </div>
            <div>
              <div className="text-[#00ff00]/60">Avg Win</div>
              <div className="text-[#00ff00]">$917.38</div>
            </div>
            <div>
              <div className="text-[#00ff00]/60">Avg Loss</div>
              <div className="text-[#00ff00]">$732.83</div>
            </div>
            <div className="col-span-2">
              <div className="text-[#00ff00]/60">Total PnL</div>
              <div className="text-[#00ff00]">$177150.95</div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default StatsCrypto;