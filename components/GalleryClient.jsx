"use client";
import { useState } from "react";

export default function GalleryClient({ images }) {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openFullscreen = (index) => {
    setCurrentIndex(index);
    document.body.classList.add("fullscreen-open");
  };

  const closeFullscreen = () => {
    setCurrentIndex(null);
    document.body.classList.remove("fullscreen-open");
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* 🖼️ Gallery */}
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img
            key={img.id}
            src={img.urls.small}
            alt={img.alt_description || "Gallery image"}
            className="clickable-image"
            onClick={() => openFullscreen(index)}
          />
        ))}
      </div>

      {/* 🧊 Fullscreen Viewer */}
      {currentIndex !== null && (
        <div id="fullscreen-viewer" className="show" onClick={closeFullscreen}>
          <span id="close-btn">&times;</span>

          <img src={images[currentIndex].urls.regular} alt="Full" />

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
