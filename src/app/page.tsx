import React from "react";

export default function Home() {
  return (
    <div className="container flex mx-auto items-center justify-center h-screen">
      <svg className="absolute">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="relative w-44 h-12 group" style={{ filter: "url(#goo)" }}>
        <div className="bg-white text-black h-12 w-32 items-center flex absolute z-20 justify-center left-0 top-0 rounded-full"></div>
        <div className="bg-white h-12 w-12 rounded-full absolute transition-all -right-1 group-hover:-right-4 z-20 top-0"></div>
        <div className="text-black h-12 w-32 items-center flex absolute z-50 justify-center left-0 top-0 rounded-full">
          CIHUY
        </div>
      </div>
    </div>
  );
}
