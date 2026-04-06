"use client";

import React, { useEffect, useRef, useState } from "react";

const THEMES = [
  ["#60a5fa", "#38bdf8", "#7dd3fc", "#dbeafe"],
  ["#5fa5f9", "#3bbdf7", "#7fd5fc", "#dceafd"],
  ["#5ea4f8", "#3ebdf6", "#81d6fb", "#dde9fd"],
  ["#5ea3f8", "#41bcf5", "#83d7fb", "#dde8fc"],
  ["#5ea2f7", "#44bcf4", "#85d8fa", "#dee7fc"],
  ["#5f9ff7", "#47bbf3", "#87d8fa", "#dee6fc"],
  ["#619cf6", "#4abaf1", "#89d8f9", "#dfe5fc"],
  ["#6399f5", "#4db8f0", "#8bd7f8", "#dfe4fb"],
  ["#6697f5", "#50b7ef", "#8dd6f8", "#e0e3fb"],
  ["#6994f4", "#53b5ee", "#8fd5f7", "#e0e2fb"],
  ["#6c91f4", "#56b3ed", "#91d4f6", "#e1e1fa"],
  ["#6f8ff3", "#59b1ec", "#93d3f5", "#e2e0fa"],
  ["#728cf2", "#5cafea", "#95d1f5", "#e2defa"],
  ["#758af2", "#5face9", "#97d0f4", "#e3ddfa"],
  ["#7887f1", "#62aae8", "#99cef3", "#e3dcf9"],
  ["#7b85f0", "#65a7e7", "#9bcdf2", "#e4dbf9"],
  ["#7e82ef", "#68a5e6", "#9dcaf1", "#e5d9f9"],
  ["#8180ee", "#6ba2e5", "#9fc8f0", "#e5d8f8"],
  ["#847eed", "#6ea0e4", "#a1c6ef", "#e6d7f8"],
  ["#877beb", "#719de3", "#a3c4ee", "#e7d5f8"],
  ["#8a79ea", "#749ae2", "#a5c1ed", "#e7d4f7"],
  ["#8d77e9", "#7798e1", "#a7bfec", "#e8d3f7"],
  ["#9074e8", "#7a95e0", "#a9bceb", "#e9d1f7"],
  ["#9372e6", "#7d92df", "#abbaea", "#e9d0f6"],
  ["#9573e5", "#7c97de", "#a8c0e8", "#e8d5f6"],
  ["#9076e5", "#789ede", "#a5c6e6", "#e6dbf7"],
  ["#8b79e6", "#74a5df", "#a2cce4", "#e4e1f8"],
  ["#867ce7", "#70acdf", "#9fd2e2", "#e2e7f8"],
  ["#817fe8", "#6cb3e0", "#9cd8e1", "#e0edf9"],
  ["#7c82e9", "#68bae0", "#99dedf", "#def3fa"],
  ["#7785ea", "#64c1e1", "#96e4dd", "#dcf9fa"],
  ["#7288eb", "#60c8e1", "#93eadb", "#dafcf8"],
  ["#6d8bec", "#5ccfe2", "#90efd9", "#d8fcf3"],
  ["#688eed", "#58d6e2", "#8df4d7", "#d6fcef"],
  ["#6391ee", "#54dde3", "#8af8d4", "#d4fce9"],
  ["#5e94ef", "#50e4e3", "#87fbd1", "#d3fce4"],
  ["#5d98ef", "#53e4dc", "#88f9ca", "#d5fce0"],
  ["#5e9cef", "#57e5d4", "#8af7c3", "#d8fcdd"],
  ["#60a0ee", "#5ae5cc", "#8cf5bc", "#dafcda"],
  ["#63a4ee", "#5ee6c4", "#8ef3b5", "#ddfcd7"],
  ["#67a8ed", "#61e6bc", "#91f1ae", "#e0fcd5"],
  ["#6baced", "#65e7b4", "#94efa7", "#e4fcd4"],
  ["#70b0ec", "#68e7ac", "#97eda0", "#e8fcd3"],
  ["#75b4eb", "#6ce8a4", "#9beb99", "#ecfcd2"],
  ["#7ab8ea", "#70e89c", "#9fe993", "#f0fcd2"],
  ["#80bce9", "#74e99d", "#a4e78d", "#f4fcd3"],
  ["#86c0e8", "#78e98d", "#a9e588", "#f7fcd4"],
  ["#8cc4e7", "#7dea86", "#afe383", "#fafcd6"],
  ["#93c8e6", "#82ea7f", "#b5e17f", "#fcfcd8"],
  ["#9acbe5", "#88eb79", "#bcdf7c", "#fdfcda"],
  ["#a1cee4", "#8eeb73", "#c3dd79", "#fdfbdc"],
  ["#a8d1e3", "#95ec6d", "#cadb77", "#fdf9de"],
  ["#afd4e2", "#9ced67", "#d1d976", "#fdf7e0"],
  ["#b6d7e1", "#a4ed61", "#d8d775", "#fdf5e2"],
  ["#bddae0", "#aced5c", "#dfd575", "#fdf2e4"],
  ["#c4dddf", "#b4ee57", "#e6d376", "#fdf0e6"],
  ["#cbe0de", "#bdee53", "#ecd177", "#fdece7"],
  ["#d2e2dd", "#c6ee50", "#f2cf79", "#fde8e7"],
  ["#d9e3dc", "#cfee4d", "#f7cc7c", "#fde4e7"],
  ["#dfe3db", "#d8ee4b", "#fbc980", "#fddfe7"],
  ["#e4e1da", "#e1ed4a", "#ffc584", "#fddae7"],
  ["#e8dfd9", "#e9eb4b", "#ffbf89", "#fdd6e8"],
  ["#ebdcd8", "#f1e84d", "#ffb98e", "#fdd1e8"],
  ["#edd8d7", "#f8e050", "#ffab98", "#fdcde9"],
  ["#efd4d7", "#fbd554", "#ffa49d", "#fdc9ea"],
  ["#f0cfd7", "#fcbc5d", "#ff9ca2", "#fdc6eb"],
  ["#f1cad8", "#fcaf62", "#ff94a7", "#fdc3ec"],
  ["#f2c5d9", "#fbaf62", "#ff8cad", "#fdc2ee"],
  ["#f2c1da", "#f9a368", "#ff85b2", "#fdc1f0"],
  ["#f2bddd", "#f6976e", "#ff7eb7", "#fdc2f2"],
  ["#f1bae0", "#f28c74", "#ff79bc", "#fdc4f4"],
  ["#efb7e3", "#ed827a", "#ff76c1", "#fdc7f6"],
  ["#ecb5e6", "#e87880", "#ff75c5", "#fdcbf7"],
  ["#e8b4e9", "#e26f87", "#ff76c9", "#fdd0f8"],
  ["#e3b4ec", "#db678d", "#ff79cd", "#fdd5f9"],
  ["#ddb5ef", "#d46094", "#ff7ed0", "#fddbf9"],
  ["#d7b7f1", "#cc5a9a", "#ff84d3", "#fde1fa"],
  ["#d0baf3", "#c555a1", "#ff8bd6", "#fde7fa"],
  ["#c9bdf5", "#bd51a7", "#ff93d8", "#fdeefa"],
  ["#c2c0f6", "#b54eae", "#ff9bda", "#fdf9fb"],
  ["#bbc4f7", "#ad4cb4", "#f8a4dc", "#f7fbfc"],
  ["#b4c8f8", "#a54bbb", "#efadde", "#f0fbfd"],
  ["#adcdf8", "#9d4bc1", "#e6b6e0", "#eafafe"],
  ["#a6d1f8", "#954cc7", "#ddbfe2", "#e4f8fe"],
  ["#9fd6f8", "#8d4dcd", "#d4c8e4", "#def5fe"],
  ["#98daf8", "#854fd2", "#ccd1e6", "#d9f1fe"],
  ["#91def8", "#7e52d7", "#c4d8e8", "#d5ecfe"],
  ["#8ae2f8", "#7756db", "#bddfeb", "#d2e8fe"],
  ["#83e5f7", "#705be0", "#b6e3ed", "#d0e4fd"],
  ["#7ce7f4", "#6961e3", "#afe5f0", "#d0e0fc"],
  ["#76e8ef", "#6268e5", "#a8e4f2", "#d1ddfc"],
  ["#6ae2df", "#5c70e6", "#a2e1f4", "#d3dafb"],
  ["#65ddd5", "#517fe7", "#9cddf5", "#d5d9fb"],
  ["#61d6ca", "#4d87e7", "#97d8f6", "#d8d9fb"],
  ["#5fcec0", "#4a8ee6", "#93d2f7", "#dad9fb"],
  ["#5fc7b8", "#4896e4", "#90ccf8", "#dddafb"],
  ["#60a5fa", "#38bdf8", "#7dd3fc", "#dbeafe"],
];

interface LavaBlobsProps {
  enableMouseTracking?: boolean;
}

const LavaBlobs: React.FC<LavaBlobsProps> = ({ enableMouseTracking = true }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setThemeIndex((prev) => (prev + 1) % THEMES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentTheme = THEMES[themeIndex];

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Update gradient colors
    const gradient = svg.querySelector("#lavaGradient");
    if (gradient) {
      const stops = gradient.querySelectorAll("stop");
      if (stops[0]) stops[0].setAttribute("stopColor", currentTheme[0]);
      if (stops[1]) stops[1].setAttribute("stopColor", currentTheme[1]);
      if (stops[2]) stops[2].setAttribute("stopColor", currentTheme[2]);
      if (stops[3]) stops[3].setAttribute("stopColor", currentTheme[3]);
    }

    const lavaLayer = svg.querySelector("#lavaMouseLayer");
    if (!lavaLayer) return;

    if (!enableMouseTracking) {
      return;
    }

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    const maxOffset = 50;
    const ease = 0.08;
    let animationFrame: number;

    function onMouseMove(e: MouseEvent) {
      const rect = svg!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      targetX = (x - 0.5) * maxOffset * 2;
      targetY = (y - 0.5) * maxOffset * 2;
    }

    function animate() {
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      (lavaLayer as SVGGElement).setAttribute(
        "transform",
        `translate(${currentX.toFixed(2)} ${currentY.toFixed(2)})`
      );

      animationFrame = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [themeIndex, enableMouseTracking]);

  return (
    <div className="w-full h-full absolute inset-0">
      <svg
        ref={svgRef}
        viewBox="0 0 1400 500"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        style={{ display: "block" }}
        >
          <defs>
            <linearGradient id="lavaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={currentTheme[0]} />
              <stop offset="25%" stopColor={currentTheme[1]} />
              <stop offset="75%" stopColor={currentTheme[2]} />
              <stop offset="100%" stopColor={currentTheme[3]} />
            </linearGradient>

            <filter id="lavaBlur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
            </filter>
          </defs>

          <g id="lavaMouseLayer">
            <g filter="url(#lavaBlur)" fill="url(#lavaGradient)" transform="scale(1.2)">
              {/* Blob paths */}
              <path d="M1150 470
                       C1120 440, 1140 410, 1190 400
                       C1240 390, 1260 430, 1220 460
                       C1190 480, 1170 480, 1150 470 Z" transform="scale(0.8)">
                <animateTransform attributeName="transform" type="translate" values="0 0; -15 10; -30 20; -15 25; 5 28; 20 30; 10 20; 0 5; 0 0" dur="20s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"/>
                <animateTransform attributeName="transform" type="rotate" values="0 1200 470; 1 1200 470; 2 1200 470; 4 1200 470; 2 1200 470; -2 1200 470; -4 1200 470; -1 1200 470; 0 1200 470" dur="22s" additive="sum" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"/>
              </path>
              <path d="M1300 390
                       C1270 360, 1290 320, 1340 310
                       C1390 300, 1410 340, 1370 380
                       C1340 410, 1320 410, 1300 390 Z" transform="scale(1.2)">
                <animateTransform attributeName="transform" type="translate" values="0 0; -12.5 7.5; -25 15; -12.5 18.75; 3.75 21; 15 25; 7.5 15; 0 3.75; 0 0" dur="19s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"/>
                <animateTransform attributeName="transform" type="rotate" values="0 1350 390; 0.75 1350 390; 1.5 1350 390; 3 1350 390; 1.5 1350 390; -1.5 1350 390; -3 1350 390; -0.75 1350 390; 0 1350 390" dur="21s" additive="sum" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"/>
              </path>
              <path d="M1080 440
                       C1050 410, 1070 370, 1120 360
                       C1170 350, 1190 390, 1150 420
                       C1120 450, 1100 450, 1080 440 Z" transform="scale(0.9)">
                <animateTransform attributeName="transform" type="translate" values="0 0; 9 6; 18 12; 13.5 15; -3.6 16.2; -12 18; -6 12; 0 1.8; 0 0" dur="18s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"/>
                <animateTransform attributeName="transform" type="rotate" values="0 1130 440; 0.5 1130 440; 1 1130 440; 2 1130 440; 1 1130 440; -1 1130 440; -2 1130 440; -0.5 1130 440; 0 1130 440" dur="20s" additive="sum" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"/>
              </path>
              <path d="M1240 470
                       C1210 440, 1230 410, 1280 400
                       C1330 390, 1350 430, 1310 460
                       C1280 480, 1260 480, 1240 470 Z" transform="scale(1.1)">
                <animateTransform attributeName="transform" type="translate" values="0 0; -20 10; 10 20; 0 0" dur="16s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" values="0 1290 470; 3 1290 470; -3 1290 470; 0 1290 470" dur="18s" additive="sum" repeatCount="indefinite"/>
              </path>
              <path d="M980 410
                       C950 380, 970 340, 1020 330
                       C1070 320, 1090 360, 1050 400
                       C1020 430, 1000 430, 980 410 Z" transform="scale(0.75)">
                <animateTransform attributeName="transform" type="translate" values="0 0; 15 10; -10 15; 0 0" dur="12s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" values="0 1030 410; 2 1030 410; -2 1030 410; 0 1030 410" dur="14s" additive="sum" repeatCount="indefinite"/>
              </path>
              <path d="M1100 420
                       C1060 390, 1080 340, 1140 330
                       C1200 320, 1220 370, 1180 410
                       C1140 450, 1120 440, 1100 420 Z" transform="scale(1.15)">
                <animateTransform attributeName="transform" type="translate" values="0 0; -40 30; 30 40; 0 0" dur="17s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" values="0 1140 400; -6 1140 400; 6 1140 400; 0 1140 400" dur="19s" additive="sum" repeatCount="indefinite"/>
              </path>
              <path d="M1250 350
                       C1220 320, 1240 270, 1290 260
                       C1340 250, 1370 290, 1360 340
                       C1350 380, 1300 400, 1270 390
                       C1250 380, 1240 360, 1250 350 Z" transform="scale(0.85)">
                <animateTransform attributeName="transform" type="translate" values="0 0; -30 20; 20 30; 0 0" dur="16s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" values="0 1300 350; 4 1300 350; -4 1300 350; 0 1300 350" dur="18s" additive="sum" repeatCount="indefinite"/>
              </path>
              <path d="M1000 370
                       C970 340, 990 300, 1040 290
                       C1090 280, 1120 320, 1110 360
                       C1100 400, 1050 420, 1020 410
                       C1000 400, 990 380, 1000 370 Z" transform="scale(1.05)">
                <animateTransform attributeName="transform" type="translate" values="0 0; 25 20; -15 30; 0 0" dur="15s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" values="0 1060 370; 3 1060 370; -3 1060 370; 0 1060 370" dur="17s" additive="sum" repeatCount="indefinite"/>
              </path>
              <path d="M1200 250
                       C1170 220, 1190 180, 1240 170
                       C1290 160, 1320 200, 1310 240
                       C1300 280, 1260 300, 1230 290
                       C1210 280, 1190 255, 1200 250 Z" transform="scale(0.95)">
                <animateTransform attributeName="transform" type="translate" values="0 0; -20 -40; 15 -60; 0 0" dur="18s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" values="0 1260 250; -5 1260 250; 5 1260 250; 0 1260 250" dur="20s" additive="sum" repeatCount="indefinite"/>
              </path>
              <path d="M950 320
                       C920 290, 940 250, 990 240
                       C1040 230, 1070 270, 1060 310
                       C1050 350, 1000 370, 970 360
                       C950 350, 940 330, 950 320 Z" transform="scale(1.1)">
                <animateTransform attributeName="transform" type="translate" values="0 0; 18 15; -12 22; 0 0" dur="14s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" values="0 1010 320; 2 1010 320; -2 1010 320; 0 1010 320" dur="16s" additive="sum" repeatCount="indefinite"/>
              </path>
              <path d="M40 200
                       C10 150, 30 80, 90 60
                       C150 40, 180 120, 120 200
                       C80 250, 60 230, 40 200 Z" transform="scale(1.2)">
                <animateTransform attributeName="transform" type="translate" values="0 0; 60 -80; -40 -120; 0 0" dur="21s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" values="0 60 120; 7 60 120; -7 60 120; 0 60 120" dur="23s" additive="sum" repeatCount="indefinite"/>
              </path>
              <path d="M80 420
                       C40 390, 60 340, 120 330
                       C180 320, 200 370, 160 410
                       C120 450, 100 440, 80 420 Z" transform="scale(0.9)">
                <animateTransform attributeName="transform" type="translate" values="0 0; 40 30; -30 40; 0 0" dur="20s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" values="0 120 400; 5 120 400; -5 120 400; 0 120 400" dur="22s" additive="sum" repeatCount="indefinite"/>
              </path>
              <path d="M1360 180
                       C1330 140, 1350 80, 1400 70
                       C1450 60, 1460 120, 1420 180
                       C1390 220, 1370 210, 1360 180 Z" transform="scale(0.8)">
                <animateTransform attributeName="transform" type="translate" values="0 0; -60 -70; 40 -110; 0 0" dur="19s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" values="0 1400 120; -8 1400 120; 8 1400 120; 0 1400 120" dur="21s" additive="sum" repeatCount="indefinite"/>
              </path>
              <path d="M1320 420
                       C1280 390, 1300 340, 1360 330
                       C1420 320, 1440 370, 1400 410
                       C1360 450, 1340 440, 1320 420 Z" transform="scale(1.05)">
                <animateTransform attributeName="transform" type="translate" values="0 0; -40 30; 30 40; 0 0" dur="18s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" values="0 1360 400; -6 1360 400; 6 1360 400; 0 1360 400" dur="20s" additive="sum" repeatCount="indefinite"/>
              </path>
              <path d="M180 250
                  C100 170, 120 80, 260 60
                  C400 40, 520 180, 480 270
                  C440 350, 260 350, 200 300
                  C160 270, 140 290, 180 250 Z" transform="scale(0.85)">
                <animateTransform attributeName="transform" type="translate" values="0 0; 120 -120; -100 -180; 0 0" dur="22s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" values="0 300 200; 8 300 200; -6 300 200; 0 300 200" dur="24s" additive="sum" repeatCount="indefinite"/>
              </path>
              <path d="M650 240
                  C610 200, 620 150, 670 130
                  C720 110, 770 150, 760 200
                  C750 240, 710 280, 680 300
                  C660 310, 640 280, 650 240 Z" transform="scale(1.15)">
                <animateTransform attributeName="transform" type="translate" values="0 0; -120 -85; 100 -135; 0 0" dur="18s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" values="0 700 200; -5 700 200; 4 700 200; 0 700 200" dur="20s" additive="sum" repeatCount="indefinite"/>
              </path>
              <path d="M1050 230
                  C1040 220, 1045 200, 1070 190
                  C1090 180, 1120 200, 1115 220
                  C1110 240, 1080 250, 1060 240
                  C1055 235, 1050 240, 1050 230 Z" transform="scale(0.7)">
                <animateTransform attributeName="transform" type="translate" values="0 0; 80 -60; -60 -90; 0 0" dur="15s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" values="0 1080 200; 6 1080 200; -6 1080 200; 0 1080 200" dur="19s" additive="sum" repeatCount="indefinite"/>
              </path>
              <path d="M1100 300
                  C1000 250, 1020 120, 1240 100
                  C1360 80, 1380 220, 1300 320
                  C1220 420, 1120 370, 1100 300 Z" transform="scale(1.25)">
                <animateTransform attributeName="transform" type="translate" values="0 0; -30 25; -60 50; -45 62.5; 25 65; 50 80; 25 50; 0 12.5; 0 0" dur="28s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"/>
                <animateTransform attributeName="transform" type="rotate" values="0 1240 300; -1.75 1240 300; -3.5 1240 300; -7 1240 300; -3.5 1240 300; 3.5 1240 300; 7 1240 300; 1.75 1240 300; 0 1240 300" dur="30s" additive="sum" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"/>
              </path>
              <path d="M800 110
                  C830 82, 880 90, 905 118
                  C925 138, 915 170, 885 182
                  C830 201, 775 196, 745 168
                  C722 147, 728 125, 800 110 Z">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0; 120 15; -100 -10; 0 0"
                  dur="20s"
                  repeatCount="indefinite"/>
              </path>
              <path d="M400 180
                  C370 140, 390 100, 440 90
                  C490 80, 520 120, 510 170
                  C500 210, 460 250, 430 260
                  C410 270, 390 235, 400 180 Z" transform="scale(1.1)">
                <animateTransform attributeName="transform" type="translate" values="0 0; 80 -60; -60 -100; 0 0" dur="15s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" values="0 440 180; 8 440 180; -6 440 180; 0 440 180" dur="17s" additive="sum" repeatCount="indefinite"/>
              </path>
              <path d="M300 400
                  C260 370, 270 320, 320 310
                  C370 300, 420 340, 410 390
                  C400 430, 350 450, 320 440
                  C300 430, 290 410, 300 400 Z" transform="scale(0.95)">
                <animateTransform attributeName="transform" type="translate" values="0 0; 60 30; -50 40; 0 0" dur="19s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" values="0 350 400; 5 350 400; -5 350 400; 0 350 400" dur="21s" additive="sum" repeatCount="indefinite"/>
              </path>
              <path d="M900 400
                  C860 370, 870 320, 920 310
                  C970 300, 1020 340, 1010 390
                  C1000 430, 950 450, 920 440
                  C900 430, 890 410, 900 400 Z" transform="scale(1.08)">
                <animateTransform attributeName="transform" type="translate" values="0 0; -60 30; 50 40; 0 0" dur="18s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" values="0 950 400; -5 950 400; 5 950 400; 0 950 400" dur="20s" additive="sum" repeatCount="indefinite"/>
              </path>
              <path d="M600 350
                  C570 320, 590 270, 640 260
                  C690 250, 740 290, 730 340
                  C720 380, 670 400, 640 390
                  C620 380, 610 360, 600 350 Z" transform="scale(0.9)">
                <animateTransform attributeName="transform" type="translate" values="0 0; 40 20; -30 30; 0 0" dur="17s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" values="0 670 350; 4 670 350; -4 670 350; 0 670 350" dur="19s" additive="sum" repeatCount="indefinite"/>
              </path>
              <path d="M180 250
                       C150 210, 155 150, 205 120
                       C255 90, 300 125, 292 175
                       C285 225, 250 270, 220 290
                       C205 300, 190 285, 180 250 Z">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0; 18 -95; -8 -150; 0 0"
                  dur="14s"
                  repeatCount="indefinite"/>
              </path>
              <path d="M620 255
                       C585 215, 590 165, 640 140
                       C700 110, 745 155, 735 205
                       C725 248, 690 280, 655 300
                       C640 308, 628 288, 620 255 Z">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0; -12 -80; 14 -145; 0 0"
                  dur="16s"
                  repeatCount="indefinite"/>
              </path>
              <path d="M1030 255
                       C995 225, 1005 170, 1050 145
                       C1100 116, 1148 145, 1145 195
                       C1142 240, 1115 278, 1080 300
                       C1065 309, 1042 290, 1030 255 Z">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0; 10 -90; -15 -130; 0 0"
                  dur="15s"
                  repeatCount="indefinite"/>
              </path>
              <path d="M760 110
                       C800 82, 855 88, 885 118
                       C905 138, 900 170, 872 182
                       C830 201, 775 196, 745 168
                       C722 147, 728 125, 760 110 Z">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0; 35 12; -20 -8; 0 0"
                  dur="18s"
                  repeatCount="indefinite"/>
              </path>
              <path d="M500 280
                       C480 270, 490 250, 510 245
                       C530 240, 540 260, 520 275
                       C510 280, 500 280, 500 280 Z" transform="scale(0.5)">
                <animateTransform attributeName="transform" type="translate" values="0 0; 20 -15; -15 20; 0 0" dur="14s" repeatCount="indefinite"/>
              </path>
              <path d="M300 280
                       C280 270, 290 250, 310 245
                       C330 240, 340 260, 320 275
                       C310 280, 300 280, 300 280 Z" transform="scale(0.55)">
                <animateTransform attributeName="transform" type="translate" values="0 0; -18 12; 12 -18; 0 0" dur="16s" repeatCount="indefinite"/>
              </path>
              <path d="M1000 100
                       C980 90, 990 70, 1010 65
                       C1030 60, 1040 80, 1020 95
                       C1010 100, 1000 100, 1000 100 Z" transform="scale(0.6)">
                <animateTransform attributeName="transform" type="translate" values="0 0; 25 -20; -20 25; 0 0" dur="15s" repeatCount="indefinite"/>
              </path>
              <path d="M700 450
                       C680 440, 690 420, 710 415
                       C730 410, 740 430, 720 445
                       C710 450, 700 450, 700 450 Z" transform="scale(0.65)">
                <animateTransform attributeName="transform" type="translate" values="0 0; -22 18; 18 -22; 0 0" dur="13s" repeatCount="indefinite"/>
              </path>
              <path d="M1200 150
                       C1180 140, 1190 120, 1210 115
                       C1230 110, 1240 130, 1220 145
                       C1210 150, 1200 150, 1200 150 Z" transform="scale(0.52)">
                <animateTransform attributeName="transform" type="translate" values="0 0; 15 -10; -10 15; 0 0" dur="17s" repeatCount="indefinite"/>
              </path>
            </g>
          </g>
        </svg>
    </div>
  );
};

export default LavaBlobs;
