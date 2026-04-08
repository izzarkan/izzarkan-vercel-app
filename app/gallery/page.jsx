import "@/styles/gallery-style.css";
import GalleryClient from "@/components/GalleryClient";

export default async function GalleryPage() {
  const ACCESS_KEY = process.env.UNSPLASH_KEY;
  let images = [];

  try {
    const res = await fetch(
      "https://api.unsplash.com/users/eikosiefta/photos?per_page=12",
      {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
        next: { revalidate: 3600 },
      }
    );
    const data = await res.json();
    if (Array.isArray(data)) {
      images = data;
    } else {
      console.error("Unsplash API Error:", data);
    }
  } catch (error) {
    console.error("Fetch Error:", error);
  }

  return (
    <section className="gallery-bg">
      <div className="gallery-container">
        <div className="gallery-title">
          <h1 className="poppins-bold mb-2">Gallery</h1>
          <h3 className="mb-4">
            My personal gallery, fetched from{" "}
            <a href="https://unsplash.com/@eikosiefta" target="_blank" rel="noreferrer">
              Unsplash Profile
            </a>
          </h3>
        </div>

        <GalleryClient images={images} />
      </div>
    </section>
  );
}

