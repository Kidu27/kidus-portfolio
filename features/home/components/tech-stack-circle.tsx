"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
import gsap from "gsap";

export default function TechCircle() {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".tech-icon", {
        rotate: 360,
        duration: 10,
        ease: "linear",
        repeat: -1,
        transformOrigin: "center center",
      });
    }, circleRef);

    return () => ctx.revert();
  }, []);

  const icons = [
    { icon: SiReact, color: "#61DBFB" },
    { icon: SiNodedotjs, color: "#68A063" },
    { icon: SiTailwindcss, color: "#38BDF8" },
    { icon: SiNextdotjs, color: "#000000" },
    { icon: SiMongodb, color: "#4DB33D" },
    { icon: SiTypescript, color: "#3178C6" },
  ];

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white">
      {/* Center profile image */}
      <div className="relative z-10 rounded-full overflow-hidden w-40 h-40 border-4 border-gray-300 shadow-lg">
        <Image src="/me.jpg" alt="Bekalu" fill className="object-cover" />
      </div>

      {/* Tech icon circle */}
      <div
        ref={circleRef}
        className="absolute w-[300px] h-[300px] flex items-center justify-center"
      >
        {icons.map((item, index) => {
          const Icon = item.icon;
          const angle = (index / icons.length) * 2 * Math.PI;
          const x = 120 * Math.cos(angle);
          const y = 120 * Math.sin(angle);

          return (
            <div
              key={index}
              className="absolute tech-icon"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <Icon size={40} color={item.color} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
