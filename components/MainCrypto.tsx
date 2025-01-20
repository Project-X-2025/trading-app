const MainCrypto = () => {
    return(
        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 lg:gap-8 flex-1">
        <div className="flex-1 min-w-0">
          <div className="relative bg-[#1a1a1a] rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-[0_0_30px_rgba(0,0,0,0.8)] border-4 sm:border-8 border-[#2a2a2a]">
            <div className="relative rounded-lg p-6 overflow-hidden min-h-[600px] mb-[15px] sm:mb-0 border-1 transition-colors duration-300 bg-black border-[#00ff00] shadow-[0_0_15px_rgba(0,255,0,0.15)]">
              <div className="hidden sm:block absolute top-4 right-4 z-20">
                <button className="font-mono text-[10px] px-2 py-1 border rounded transition-colors border-[#fff] text-[#fff] hover:bg-[#fff]/5 dark:border-[#00ff00] dark:text-[#00ff00] dark:hover:bg-[#00ff00]/10">
                  FLICKER: ON
                </button>
              </div>
              <div className="scanlines absolute inset-0 pointer-events-none"></div>
              <div className="screen-flicker absolute inset-0 pointer-events-none dark:bg-[#00ff00]/20 bg-[#fff]/40"></div>
              <div className="vignette absolute inset-0 pointer-events-none"></div>
              <div className="crt-flicker absolute inset-0 pointer-events-none"></div>
              <div className="relative z-10 font-mono text-[#00ff00] max-h-[calc(100vh-200px)] overflow-y-auto">
                <div className="terminal-content font-mono text-xs sm:text-sm">
                  <div className="mb-2 border-b border-[#00ff00] pb-1">
                    <div className="text-[8px] sm:text-[10px] opacity-70">
                      Pro AI UNIFIED OPERATING SYSTEM
                    </div>
                    <div className="text-[8px] sm:text-[10px] opacity-70">
                      COPYRIGHT 2024-2077 Pro TERMINAL.
                    </div>
                  </div>
                  <div className="space-y-0.5 mb-4">
                    <div className="text-[8px] sm:text-[10px] opacity-70">
                      &gt; BOOT SEQUENCE INITIALIZED
                    </div>
                    <div className="text-[8px] sm:text-[10px] opacity-70">
                      &gt; SYSTEM CHECK... OK
                    </div>
                    <div className="text-[8px] sm:text-[10px] opacity-70">
                      &gt; ESTABLISHING CONNECTION... OK
                    </div>
                  </div>
                  <div className="text-center mb-8 mt-10">
                    <h1 className="text-xl sm:text-3xl font-bold tracking-wide terminal-glow-green">
                      Welcome to Pro Terminal_
                      <span className="animate-blink">█</span>
                    </h1>
                  </div>
                  <div className="border-l-2 border-r-2 border-[#00ff00] py-2 px-4 mb-8">
                    <div className="text-[10px] sm:text-xs opacity-80">
                      &gt; ADVANCED AI TRADING SYSTEM ACTIVELY SCANNING 30+
                      MARKET DATAPOINTS
                      <br />
                      &gt; EXECUTING HIGH-FIDELITY SIGNALS FOR OPTIMAL PROFIT
                      <br />
                      &gt; RISK MANAGEMENT MODULE KEEPING YOU SAFE FROM LOSS
                      <br />
                      &gt; HOLD 2,000,000 NATIVE TOKENS TO ACCESS THE TERMINAL
                    </div>
                  </div>
                  <div className="relative">
                    <div className="text-[10px] sm:text-xs opacity-70 mb-6 space-y-1">
                      <div>&gt;&gt; LAST UPDATE: 1:28:02 AM</div>
                      <div>&gt;&gt; NEXT UPDATE IN: 1s</div>
                    </div>
                    <div className="filter blur-sm opacity-50">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-xs sm:text-sm mb-2 border-b border-[#00ff00]">
                            ACTIVE POSITIONS
                          </h2>
                          <div className="space-y-3">
                            <div className="pl-2 sm:pl-3 border-l text-[10px] sm:text-xs border-[#00ff00]">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                                <div>SYMBOL: BTCUSDT</div>
                                <div>SIDE: Buy</div>
                                <div>SIZE: 0.50</div>
                                <div>ENTRY: 42,000.00</div>
                                <div>PNL: 1,250.00 USDT</div>
                                <div>LEV: 10x</div>
                                <div>TP: 46,200.00</div>
                                <div>SL: 37,800.00</div>
                                <div>RISK: 2.5%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h2 className="text-xs sm:text-sm mb-2 border-b border-[#00ff00]">
                            PENDING ORDERS
                          </h2>
                          <div className="space-y-3">
                            <div className="pl-2 sm:pl-3 border-l text-[10px] sm:text-xs border-[#00ff00]">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                                <div>SYMBOL: ETHUSDT</div>
                                <div>SIDE: Buy</div>
                                <div>PRICE: 2,250.00</div>
                                <div>QTY: 2.50</div>
                                <div>TYPE: Limit</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 mt-12 flex items-center justify-center">
                      <div className="text-center space-y-2 p-4 rounded-lg border-2 bg-transparent border-[#00ff00]">
                        <div className="text-base sm:text-lg font-bold terminal-glow-green">
                          ACCESS RESTRICTED
                        </div>
                        <div className="text-[10px] sm:text-xs">
                          HOLD 2000000 ProAI TOKENS TO ACCESS LIVE SIGNALS
                        </div>
                        <div className="space-y-2 mt-2">
                          <button className="text-[9px] sm:text-[10px] px-3 py-1 border rounded transition-colors border-[#00ff00] hover:bg-[#00ff00]/10">
                            CONNECT WALLET_
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-1 left-0 right-0 text-center select-none">
              <div
                className="font-['Courier_New'] text-[10px] sm:text-xs tracking-[0.2em] font-bold"
                style={{
                  color: "transparent",
                  background:
                    "linear-gradient(rgb(255, 215, 0) 0%, rgb(184, 134, 11) 50%, rgb(255, 215, 0) 100%) text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "rgba(0, 0, 0, 0.8) 0px 1px 2px",
                  WebkitFontSmoothing: "none",
                }}
              >
                Pro TERMINAL™
                <span className="text-[8px] sm:text-[10px] ml-1">v1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MainCrypto;