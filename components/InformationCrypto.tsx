const InformationCrypto = () => {
  return (
    <div className="fixed z-40 flex items-center left-4 top-1/2 -translate-y-1/2 flex-col gap-8 py-4">
      <div className="flex flex-col items-center gap-2 sm:gap-6">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors flex items-center justify-center text-[#00ff00] hover:text-[#00ff00]/80"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="w-4 h-4 sm:w-6 sm:h-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
          </svg>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors flex items-center justify-center text-[#00ff00] hover:text-[#00ff00]/80"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 496 512"
            className="w-4 h-4 sm:w-6 sm:h-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
          </svg>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center"
        ></a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex transition-colors items-center justify-center font-mono text-[8px] sm:text-xs px-2 py-1 rounded border text-[#00ff00] hover:text-[#00ff00]/80 border-[#00ff00]/50"
        >
          WHITEPAPER_
        </a>
      </div>
      <div className="w-px h-6 sm:h-8 bg-[#00ff00]/20"></div>
      <div
        className="font-mono text-[8px] sm:text-[10px] writing-mode-vertical transform rotate-180 
  text-[#00ff00]/80"
      >
        <button className="transition-colors cursor-pointer text-[#00ff00] hover:text-[#00ff00]/60">
          6YEhGNEJitUMARvyxxxxx
        </button>
      </div>
    </div>
  );
};

export default InformationCrypto;
