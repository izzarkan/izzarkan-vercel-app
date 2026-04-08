"use client";
import { useState } from "react";

const email = "arkanizz29@gmail.com";

const getAge = () => {
  const birthDate = new Date(2008, 5, 27);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const hasHadBirthday =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasHadBirthday) age--;

  return age;
};

const translations = {
  en: {
    heading: "Hello!",
    intro: (
      <p>
        Hello, my name is Arkan Izz Zaydan Maulana,{" "}
        <a
          href="https://genius.com/25781043"
          target="_blank"
          className="reference"
          data-bs-toggle="tooltip"
          data-bs-delay='{"show": 300, "hide": 100}'
          data-bs-html="true"
          data-bs-placement="top"
          data-bs-title={
            "Reality Club - Anything You Want<br>In which is my favorite song"
          }
        >
          you can call me anything you want, it&apos;s fine by me
        </a>
        . You can either call me Arkan, Izz, or anything. I&apos;m a high school
        student who is interested in web development, programming, technology,
        photography, videography, and a bunch more. I created this website from
        the ground up with Bootstrap and local HTML, JS, CSS, and SCSS. But as
        of April 5 2026, this site has been moved to NextJS on Vercel. I created
        this website to put all of my links in one place, and also to practice
        my web development skills. I also want to use this website as a personal portfolio. I hope you can enjoy my website! And if you have any suggestions or feedback, feel free to reach out via{" "}
        <a href={`mailto:${email}`} className="hyprlink">email</a>{" "}
        or through my social media links above.
      </p>
    ),
    profileHeading: "Profile",
    profileBody: (age) => (
      <p>
        Name: Arkan Izz Zaydan Maulana <br />
        Date of Birth: June 27, 2008 <br />
        Age: {age} years old <br />
        Current Education: High School Student at SMAN 1 Tasikmalaya <br />
        Language: Indonesian & English <br />
        Location: Sindangkasih, West Java, Indonesia <br />
        Pronouns: He/Him <br />
        Gender: Male
      </p>
    ),
    eduHeading: "Education History",
    edu1: "Al-Mukrom Elementary School",
    edu1Date: "2015 - 2021",
    edu2: "Al-Muttaqin Junior High School",
    edu2Date: "2021 - 2024",
    edu3: "SMAN 1 Tasikmalaya High School",
    edu3Date: "2024 - Present",
    hobbiesHeading: "Hobbies",
    hobbies: [
      "Web development (or software programming in general)",
      "Watching documentaries",
      "Photography",
      "Videography"
    ],
    skillsHeading: "Skills",
    skills: [
      "Static Web Development (HTML, CSS, JavaScript)",
      "Basic Knowledge in Dynamic Web Development (Node.js)",
      "Live Streaming (OBS)",
      "Basic Knowledge in Graphic Design (Canva, Affinity)",
      "Photography",
      "Basic Videography",
      "Basic Knowledge in Video Editing (DaVinci Resolve, CapCut)",
      "Camera Handling"
    ],
    experiencesHeading: "Experiences",
    experiences: [
      {
        title: "Part of the Project Design Document team for my class P5 Project",
        date: "September 2 2024 - September 6 2024"
      },
      {
        title: "Part of the Committee as a part of the IT Team for my school's 69th Anniversary Event",
        date: "September 15 2025 - September 20 2025"
      },
      {
        title: "Part of the Delegation Committee of the Decoration & Documentation Team for my school's Annual Islamic Event",
        date: "February 23 2026 - March 13 2026"
      },
      {
        title: "Part of the Committee as a part of the Stream Operator Team for my school's EXION Event",
        date: "March 30 2026"
      }
    ],
    orgHeading: "Organizations & Extracurricular Activities",
    org1: "MICRO - Maestro IT Real Organization (2024 - Present)",
    org1Desc: "As: Programming Division Coordinator (2025 - present)",
    org2: "SCC - SATAS Cinema Club (2024 - Present)",
    org2Desc: "As: Editing Division Coordinator (2025 - Present)",
    communitiesHeading: "Communities",
    communities: [
      "Our Creativity"
    ]
  },
  id: {
    heading: "Halo!",
    intro: (
      <p>
        Halo, nama saya Arkan Izz Zaydan Maulana,{" "}
        <a
          href="https://genius.com/25781043"
          target="_blank"
          className="reference"
          data-bs-toggle="tooltip"
          data-bs-delay='{"show": 300, "hide": 100}'
          data-bs-html="true"
          data-bs-placement="top"
          data-bs-title={
            "Reality Club - Anything You Want<br>Lagu my favorite gwe"
          }
        >
          kalian bisa memanggilku apa saja, aku tidak keberatan
        </a>
        . Kalian bisa memanggilku Arkan, Izz, atau apa aja boleh. Aku adalah seorang
        siswa SMA yang memiliki minat dalam pengembangan web, pemrograman, teknologi,
        fotografi, videografi, dan banyak lagi. Aku membuat situs web ini dari awal
        pakai Bootstrap, HTML, JS, CSS lokal, dan SCSS. Namun sejak 5
        April 2026, situs ini sudah dialihkan untuk menggunakan NextJS (vercel). Aku membuat situs
        web ini untuk mengumpulkan semua tautanku di satu tempat, dan juga untuk melatih
        kemampuan pengembangan webku. Aku juga ingin menggunakan situs web ini sebagai
        portofolio pribadiku. Semoga kalian bisa menikmati webku, ya! Kalau ada saran atau masukan, jangan ragu untuk
        menghubungiku melalui{" "}
        <a href={`mailto:${email}`} className="hyprlink">email</a>{" "}
        atau melalui link media sosialku di atas.
      </p>
    ),
    profileHeading: "Profil",
    profileBody: (age) => (
      <p>
        Nama: Arkan Izz Zaydan Maulana <br />
        Tanggal Lahir: 27 Juni 2008 <br />
        Usia: {age} tahun <br />
        Pendidikan Saat Ini: Siswa SMA di SMAN 1 Tasikmalaya <br />
        Bahasa: Indonesia & Inggris <br />
        Lokasi: Sindangkasih, Jawa Barat, Indonesia <br />
        Jenis Kelamin: Laki-laki
      </p>
    ),
    eduHeading: "Riwayat Pendidikan",
    edu1: "SDIT Al-Mukrom",
    edu1Date: "2015 - 2021",
    edu2: "SMP Al-Muttaqin",
    edu2Date: "2021 - 2024",
    edu3: "SMAN 1 Tasikmalaya",
    edu3Date: "2024 - Sekarang",
    hobbiesHeading: "Hobi",
    hobbies: [
      "Pengembangan Web (atau pemrograman perangkat lunak secara umum)",
      "Menonton film dokumenter",
      "Fotografi",
      "Videografi"
    ],
    skillsHeading: "Keahlian",
    skills: [
      "Pengembangan Web Statis (HTML, CSS, JavaScript)",
      "Pengetahuan Dasar Pengembangan Web Dinamis (Node.js)",
      "Pengoperasian Live Streaming (OBS)",
      "Pengetahuan Dasar Desain Grafis (Canva, Affinity)",
      "Fotografi",
      "Videografi Dasar",
      "Pengetahuan Dasar Edit Video (DaVinci Resolve, CapCut)",
      "Pengoperasian Kamera"
    ],
    experiencesHeading: "Pengalaman",
    experiences: [
      {
        title: "Bagian dari tim Dokumen Desain Proyek untuk Proyek P5 kelasku",
        date: "2 September 2024 - 6 September 2024"
      },
      {
        title: "Panitia bagian dari Tim IT untuk Acara Ulang Tahun ke-69 sekolahku",
        date: "15 September 2025 - 20 September 2025"
      },
      {
        title: "Panitia Delegasi Tim Dekorasi dan Dokumentasi untuk Acara Keagamaan Tahunan sekolahku",
        date: "23 Februari 2026 - 13 Maret 2026"
      },
      {
        title: "Panitia bagian dari Tim Operator Streaming untuk Acara EXION sekolahku",
        date: "30 Maret 2026"
      }
    ],
    orgHeading: "Organisasi & Ekstrakurikuler",
    org1: "MICRO - Maestro IT Real Organization (2024 - Sekarang)",
    org1Desc: "Sebagai: Koordinator Divisi Pemrograman (2025 - Sekarang)",
    org2: "SCC - SATAS Cinema Club (2024 - Sekarang)",
    org2Desc: "Sebagai: Koordinator Divisi Editing (2025 - Sekarang)",
    communitiesHeading: "Komunitas",
    communities: [
      "Our Creativity"
    ]
  }
};

export default function About() {
  const [showMore, setShowMore] = useState(false);
  const [lang, setLang] = useState("en");

  const t = translations[lang];

  return (
    <section id="about-me" className="main-sections">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 className="poppins-bold" style={{ margin: 0 }}>{t.heading}</h2>
        <button
          onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
          className="btn btn-outline-secondary btn-sm"
          style={{ borderRadius: '20px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          {lang === 'en' ? 'ID' : 'EN'}
        </button>
      </div>

      {t.intro}

      <div className={`hidden-text ${showMore ? "show" : ""}`}>
        <span>
          <h5 className="poppins-bold">{t.profileHeading}</h5>
          {t.profileBody(getAge())}
        </span>

        <span>
          <h5 className="poppins-bold">{t.eduHeading}</h5>
          <ul>
            <li>{t.edu1}</li>
            <p className="em-text">{t.edu1Date}</p>
            <li>{t.edu2}</li>
            <p className="em-text">{t.edu2Date}</p>
            <li>{t.edu3}</li>
            <p className="em-text">{t.edu3Date}</p>
          </ul>
        </span>

        <span>
          <h5 className="poppins-bold">{t.hobbiesHeading}</h5>
          <ul>
            {t.hobbies.map((hobby, idx) => (
              <li key={idx}>{hobby}</li>
            ))}
          </ul>
        </span>

        <span>
          <h5 className="poppins-bold">{t.skillsHeading}</h5>
          <ul>
            {t.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </span>

        <span>
          <h5 className="poppins-bold">{t.experiencesHeading}</h5>
          <ul>
            {t.experiences.map((exp, idx) => (
              <li key={idx}>
                {exp.title}
                <p className="em-text">{exp.date}</p>
              </li>
            ))}
          </ul>
        </span>

        <span>
          <h5 className="poppins-bold">
            {t.orgHeading}
          </h5>
          <ol>
            <li>
              {t.org1}
              <p>{t.org1Desc}</p>
            </li>
            <li>
              {t.org2}
              <p>{t.org2Desc}</p>
            </li>
          </ol>
        </span>

        <span>
          <h5 className="poppins-bold">{t.communitiesHeading}</h5>
          <ul>
            {t.communities.map((comm, idx) => (
              <li key={idx}>{comm}</li>
            ))}
          </ul>
        </span>
      </div>

      <span onClick={() => setShowMore(!showMore)} className="arrow-down-container">
        <img src="/media/down-arrow.svg" style={{ transform: showMore ? "rotate(180deg)" : "rotate(0deg)" }} width={32} height={32} alt="Arrow Down" className="arrow-down" />
      </span>
    </section>
  );
}