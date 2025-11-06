// app/components/GsapInitializer.jsx
"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export const GsapInitializer = () => {
  useEffect(() => {
    // Daftarkan plugin-plugin GSAP
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Buat instance ScrollSmoother
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // Atur tingkat kehalusan
      effects: true, // Aktifkan efek parallax (data-speed/data-lag)
    });

    // Fungsi cleanup saat komponen dilepas
    return () => {
      if (smoother) {
        smoother.kill();
      }
    };
  }, []);

  return null; // Komponen ini tidak me-render elemen apapun
};
