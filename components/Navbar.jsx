"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          Izz
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/#about-me">
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/#projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/gallery-design">
                Gallery Design
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="mailto:arkanizz29@gmail.com">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
