import { Minus, Square, X } from 'lucide-react';

const Window = ({ title, children, className = '', icon, variant = 'gui' }) => {
  const isTerminal = variant === 'terminal';

  // Styles
  const bgColor = isTerminal ? 'bg-black' : 'bg-gray-100';
  const textColor = isTerminal ? 'text-green-400' : 'text-gray-900';
  const headerColor = isTerminal ? 'bg-gray-800' : 'bg-[#000080]'; // Classic Blue for GUI
  
  return (
    <div className={`border-2 border-black box-shadow-hard ${className} mb-8 flex flex-col`}>
      {/* Title Bar */}
      <div className={`${headerColor} text-white px-2 py-1 flex items-center justify-between select-none border-b-2 border-black`}>
        <div className="flex items-center gap-2">
          {icon && <span className="w-4 h-4">{icon}</span>}
          <span className="font-bold tracking-widest uppercase text-sm md:text-base truncate max-w-[200px] md:max-w-none">
            {title}
          </span>
        </div>
        <div className="flex gap-1">
          <button className="w-5 h-5 bg-gray-300 border border-black flex items-center justify-center hover:bg-gray-400 active:bg-gray-500 shadow-[1px_1px_0px_black]">
            <Minus size={12} color="black" />
          </button>
          <button className="w-5 h-5 bg-gray-300 border border-black flex items-center justify-center hover:bg-gray-400 active:bg-gray-500 shadow-[1px_1px_0px_black]">
            <Square size={10} color="black" />
          </button>
          <button className="w-5 h-5 bg-gray-300 border border-black flex items-center justify-center hover:bg-red-400 active:bg-red-500 shadow-[1px_1px_0px_black]">
            <X size={12} color="black" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className={`${bgColor} ${textColor} p-4 md:p-6 flex-grow font-mono overflow-hidden relative`}>
        {children}
      </div>
    </div>
  );
};

export default Window;
