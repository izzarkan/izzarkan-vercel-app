/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>
          Site made with{" "}
          <span>
            <img
              src="/media/heart-fill.svg"
              height={32}
              width={32}
              alt="heart"
              srcSet=""
            />
          </span>{" "}
          by me, myself.
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/izzarkan/izzarkan-vercel-app"
            target="_blank"
          >
            Source code
          </a>
          <a href="mailto:Arkanizzzaydanmaulana@gmail.com">Contact Me</a>
        </div>
      </div>
    </footer>
  );
}
