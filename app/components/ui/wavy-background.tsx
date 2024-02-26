"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  width,
  height,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  width? : any
  height? : any
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: any,
    canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  // const init = () => {
  //   if (typeof window !== 'undefined') {
  //     // Code that accesses the document object should be placed here
  //     canvas = canvasRef.current;
  //     ctx = canvas.getContext("2d");
  //     w = ctx.canvas.width = window.innerWidth;
  //     h = ctx.canvas.height = window.innerHeight;
  //     ctx.filter = `blur(${blur}px)`;
  //     nt = 0;
  //     window.onresize = function () {
  //       w = ctx.canvas.width = window.innerWidth;
  //       h = ctx.canvas.height = window.innerHeight;
  //       ctx.filter = `blur(${blur}px)`;
  //     };
  //     render();
  //   }
  // };

  const init = () => {
    if (typeof document !== 'undefined') {
      // Code that accesses the document object should be placed here
      canvas = canvasRef.current;
      ctx = canvas.getContext("2d");
  
      // Set canvas width and height based on CSS
      const canvasWidth = canvas.offsetWidth;
      const canvasHeight = canvas.offsetHeight;
  
      // Set canvas width and height
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
  
      // Set other properties
      ctx.filter = `blur(${blur}px)`;
      nt = 0;
  
      // Render initial state
      render();
  
      // Add resize event listener to adjust canvas size on window resize
      window.addEventListener("resize", handleResize);
    }
  };
  
  const handleResize = () => {
    if (typeof document !== 'undefined') {
      // Update canvas width and height based on CSS
      const canvasWidth = canvas.offsetWidth;
      const canvasHeight = canvas.offsetHeight;
  
      // Update canvas width and height
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    }
  };
  
  

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];
  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number = 0;
  const render = () => {
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [init,animationId]);

  return (
    <div
      className={cn(
        "h-[67vh] flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
