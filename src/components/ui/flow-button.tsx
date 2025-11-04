// This is file of your component

// You can use any dependencies from npm; we import them automatically in package.json
'use client';
import { ArrowRight } from 'lucide-react';

export function FlowButton({ text = "Modern Button", onClick, children }: { 
  text?: string; 
  onClick?: React.MouseEventHandler<HTMLButtonElement>; 
  children?: React.ReactNode; 
}) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onClick?.(e);
  };

  return (
    <button 
      onClick={handleClick}
      className="relative flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-pink-400/40 bg-transparent px-8 py-3 text-sm font-semibold text-pink-600 cursor-pointer transition-all duration-300 hover:border-pink-500 hover:text-white hover:bg-pink-600 active:scale-95 isolate"
      style={{ minWidth: 'fit-content' }}
    >
      {/* Content that stays visible */}
      <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
        {children || text}
      </span>
      
      {/* Right arrow */}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
}