import "@/styles/gallery-style.css";
import DesignGalleryClient from "@/components/DesignGalleryClient";

export default function GalleryDesign() {
    return (
        <section className="gallery-bg">
            <div className="gallery-container">
                <div className="gallery-title">
                    <h1 className="poppins-bold mb-2">Design Gallery</h1>
                    <h3 className="mb-4">A collection of my graphic design work</h3>
                </div>

                <DesignGalleryClient />
            </div>
        </section>
    );
}