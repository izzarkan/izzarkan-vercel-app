"use client";
import { useState } from "react";
import Image from "next/image";

import img918 from "@/public/media/designs/918.png";
import imgSkyline from "@/public/media/designs/Skyline.png";
import imgVerstappen from "@/public/media/designs/Verstappen.png";
import imgEqwda from "@/public/media/designs/eqwda.png";
import imgIdkMan from "@/public/media/designs/idk man.png";
import imgPoster1 from "@/public/media/designs/poster1.png";

const designs = [
  { src: img918, alt: "918" },
  { src: imgSkyline, alt: "Skyline" },
  { src: imgVerstappen, alt: "Verstappen" },
  { src: imgEqwda, alt: "Design" },
  { src: imgIdkMan, alt: "Design" },
  { src: imgPoster1, alt: "Poster" },
];

export default function DesignGalleryClient() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openFullscreen = (index) => {
    setCurrentIndex(index);
    document.body.classList.add("fullscreen-open");
  };

  const closeFullscreen = () => {
    setCurrentIndex(null);
    document.body.classList.remove("fullscreen-open");
  };

  const showNext = () =>
    setCurrentIndex((prev) => (prev + 1) % designs.length);

  const showPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + designs.length) % designs.length);

  return (
    <>
      <div className="gallery-grid">
        {designs.map((design, index) => (
          <div
            key={index}
            className="design-grid-item"
            onClick={() => openFullscreen(index)}
          >
            <Image
              src={design.src}
              alt={design.alt}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <div id="fullscreen-viewer" className="show" onClick={closeFullscreen}>
          <span id="close-btn">&times;</span>

          <Image
            src={designs[currentIndex].src}
            alt={designs[currentIndex].alt}
            style={{
              maxWidth: "92vw",
              maxHeight: "92vh",
              width: "auto",
              height: "auto",
            }}
            priority
          />

          <button
            className="gallery-nav prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            ‹
          </button>

          <button
            className="gallery-nav next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
