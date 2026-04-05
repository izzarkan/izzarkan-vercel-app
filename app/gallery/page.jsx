"use client";
import { useEffect, useState } from "react";
import '@/styles/gallery-style.css';

export default function GalleryPage() {
const [images, setImages] = useState([]);
const [currentIndex, setCurrentIndex] = useState(null);

const ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_KEY;

useEffect(() => {
fetch(
    "https://api.unsplash.com/users/eikosiefta/photos?per_page=12",
    {
    headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
    },
    }
)
    .then((res) => res.json())
    .then((data) => setImages(data));
}, []);

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
setCurrentIndex((prev) =>
    (prev - 1 + images.length) % images.length
);
};

return (
<section className="gallery-bg">
    <div className="gallery-container">
    <div className="gallery-title">
        <h1 className="poppins-bold mb-2">Gallery</h1>
        <h3 className="mb-4">
        My personal gallery, fetched from{" "}
        <a
            href="https://unsplash.com/@eikosiefta"
            target="_blank"
        >
            Unsplash Profile
        </a>
        </h3>
    </div>

    {/* 🖼️ Gallery */}
    <div className="gallery-grid">
        {images.map((img, index) => (
        <img
            key={img.id}
            src={img.urls.small}
            className="clickable-image"
            onClick={() => openFullscreen(index)}
        />
        ))}
    </div>
    </div>

    {/* 🧊 Fullscreen Viewer */}
    {currentIndex !== null && (
    <div id="fullscreen-viewer" className="show" onClick={closeFullscreen}>
        <span id="close-btn">&times;</span>

        <img
        src={images[currentIndex].urls.regular}
        alt="Full"
        />

        <button
        className="nav prev"
        onClick={(e) => {
            e.stopPropagation();
            showPrev();
        }}
        >
        ‹
        </button>

        <button
        className="nav next"
        onClick={(e) => {
            e.stopPropagation();
            showNext();
        }}
        >
        ›
        </button>
    </div>
    )}
</section>
);
}