"use client";

export default function SocialLinks() {
  const links = [
    { href: "https://instagram.com/a.izzdnm/", title: "Instagram", icon: "/media/instagram.svg" },
    { href: "https://tiktok.com/@a.izzdnm/", title: "TikTok", icon: "/media/tiktok.svg" },
    { href: "https://github.com/izzarkan/", title: "GitHub", icon: "/media/github.svg" },
    { href: "https://x.com/eik0siefta/", title: "X", icon: "/media/x.svg" },
    { href: "https://unsplash.com/@eikosiefta", title: "Unsplash", icon: "/media/unsplash.svg" },
    { href: "https://steamcommunity.com/id/eikosiefta/", title: "Steam", icon: "/media/steam.svg" },
    { href: "https://photos.app.goo.gl/KBFxNpGWzTr62V7b7/", title: "Pictures I deem as my 'masterpieces'", icon: "/media/google-photos.svg" }
  ]

  return (
    <section id="social-links" className="social-links">
      <h2 className="poppins-bold">Find me on</h2>

      <div className="links">

        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title={link.title}
            data-bs-delay='{"show": 200, "hide": 100}'
          >
            <img src={link.icon} width="32" alt={link.title} />
          </a>
        ))}

      </div>
    </section>
  );
}
