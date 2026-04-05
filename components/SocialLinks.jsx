"use client";
import { useEffect } from "react";

export default function SocialLinks() {
  useEffect(() => {
    const bootstrap = require("bootstrap");

    const tooltips = document.querySelectorAll(
      "#social-links [data-bs-toggle='tooltip']"
    );

    tooltips.forEach((el) => new bootstrap.Tooltip(el));
  }, []);

  return (
    <section id="social-links" className="social-links">
      <h2 className="poppins-bold">Find me on</h2>

      <div className="links">
        <a
          href="https://instagram.com/a.izzdnm/"
          target="_blank"
          rel="noopener noreferrer"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Instagram"
          data-bs-delay='{"show": 300, "hide": 100}'
        >
          <img src="/media/instagram.svg" width="32" alt="Instagram" />
        </a>

        <a
          href="https://github.com/izzarkan/"
          target="_blank"
          rel="noopener noreferrer"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="GitHub"
          data-bs-delay='{"show": 200, "hide": 100}'
        >
          <img src="/media/github.svg" width="32" alt="GitHub" />
        </a>

        <a
          href="https://x.com/eik0siefta/"
          target="_blank"
          rel="noopener noreferrer"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="X / Twitter"
          data-bs-delay='{"show": 200, "hide": 100}'
        >
          <img src="/media/x.svg" width="32" alt="X" />
        </a>

        <a
          href="https://unsplash.com/@eikosiefta"
          target="_blank"
          rel="noopener noreferrer"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Unsplash"
          data-bs-delay='{"show": 200, "hide": 100}'
        >
          <img src="/media/unsplash.svg" width="32" alt="Unsplash" />
        </a>

        <a
          href="https://steamcommunity.com/id/eikosiefta/"
          target="_blank"
          rel="noopener noreferrer"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Steam"
          data-bs-delay='{"show": 200, "hide": 100}'
        >
          <img src="/media/steam.svg" width="32" alt="Steam" />
        </a>

        <a
          href="https://photos.app.goo.gl/KBFxNpGWzTr62V7b7/"
          target="_blank"
          rel="noopener noreferrer"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Pictures I deem as my 'masterpieces'"
          data-bs-delay='{"show": 200, "hide": 100}'
        >
          <img
            src="/media/google-photos.svg"
            width="32"
            alt="Google Photos"
          />
        </a>
      </div>
    </section>
  );
}