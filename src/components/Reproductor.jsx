import React from 'react';
import { Play, SkipBack, SkipForward, Repeat, Shuffle } from 'lucide-react';

export function Player() {
  return (
    <div className="h-full bg-black border-t border-zinc-800 px-4 flex items-center justify-between">
      <div className="flex items-center gap-4 w-[30%]">
        <div className="w-14 h-14 bg-zinc-800 rounded flex items-center justify-center text-xs text-zinc-500">
           Cover
        </div>
        <div className="flex flex-col">
          <span className="text-white text-sm font-medium">Song Title</span>
          <span className="text-zinc-400 text-xs">Artist</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 w-[40%]">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-400 hover:text-white cursor-pointer" />
          <SkipBack size={24} className="text-zinc-400 hover:text-white fill-current cursor-pointer" />
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform">
            <Play size={20} className="text-black fill-current ml-0.5" />
          </button>
          <SkipForward size={24} className="text-zinc-400 hover:text-white fill-current cursor-pointer" />
          <Repeat size={20} className="text-zinc-400 hover:text-white cursor-pointer" />
        </div>
        <div className="w-full h-1 bg-zinc-600 rounded-full cursor-pointer group">
            <div className="bg-white h-full w-1/3 rounded-full group-hover:bg-green-500"></div>
        </div>
      </div>
      <div className="w-[30%] flex justify-end">
        <span className="text-zinc-500 text-xs">Volumen</span>
      </div>
    </div>
  );
}