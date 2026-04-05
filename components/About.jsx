"use client";
import { useState, useEffect } from "react";

export default function About() {
const [showMore, setShowMore] = useState(false);

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

useEffect(() => {
const bootstrap = require("bootstrap");

const tooltips = document.querySelectorAll(
    "#about-me [data-bs-toggle='tooltip']"
);

tooltips.forEach((el) => new bootstrap.Tooltip(el));
}, []);

return (
<section id="about-me" className="main-sections">
    <h2 className="poppins-bold">Hello!</h2>

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
        you can call me anything you want, it's fine by me
    </a>
    . You can either call me Arkan, Izz, or anything. I'm a high school student who is interested in web development, programming, technology, photography, videography, and a bunch more. I'm a high school student who is interested in web development, programming, technology, photography, videography, and a bunch more. I created this website from the ground up with Bootstrap and local HTML, JS, CSS, and SCSS. But as of April 5 2026, this site has been moved to NextJS on Vercel. I created this website to put all of my links in one place, and also to practice my web development skills. I also want to use this website as a portfolio for my future job applications and stuff. I hope you enjoy browsing my website, and if you have any suggestions or feedback, please feel free to contact me through the contact form below or through my social media links above.
    </p>

    <div className={`hidden-text ${showMore ? "show" : ""}`}>
        <span>
        <h5 className="poppins-bold">Profile</h5>
        <p>
            Name: Arkan Izz Zaydan Maulana <br />
            Date of Birth: June 27 2008 <br />
            Age: {getAge()} years old <br />
            Current Education: High School Student at SMAN 1 Tasikmalaya <br />
            Language: Indonesian & English <br />
            Location: Tasikmalaya, West Java, Indonesia <br />
            Pronouns: He/Him <br />
            Gender: Male
        </p>
        </span>

        <span>
        <h5 className="poppins-bold">Hobbies</h5>
        <ul>
            <li>Web development (or software programming in general)</li>
            <li>Playing video games</li>
            <li>Watching documentaries</li>
            <li>Photography</li>
            <li>Videography</li>
        </ul>
        </span>

        <span>
        <h5 className="poppins-bold">Experiences</h5>
        <ul>
            <li>
                Part of the Project Design Document team for my class P5 Project
                <p className="em-text">
                    September 2 2024 - September 6 2024
                </p>
            </li>
            <li>
                Part of the Committee as a part of the IT Team for my school's
                69th Anniversary Event
                <p className="em-text">
                    September 15 2025 - September 20 2025
                </p>
            </li>
            <li>
                Part of the Delegation Committee of the Documentation & Media
                Team for my school's Annual Islamic Event
                <p className="em-text">
                    February 23 2026 - March 13 2026
                </p>
            </li>
            <li>
                Part of the Committee as a part of the Stream Operator Team for
                my school's EXION Event
                <p className="em-text">March 30 2026</p>
            </li>
        </ul>
        </span>


        <span>
        <h5 className="poppins-bold">
            Organizations & Extracurricular Activities
        </h5>
        <ol>
            <li>
            MICRO - Maestro IT Real Organization (2024 - Present)
            <p>As: Programming Division Coordinator (2025 - present)</p>
            </li>
            <li>
            SCC - SATAS Cinema Club (2024 - Present)
            <p>As: Editing Division Coordinator (2025 - Present)</p>
            </li>
        </ol>
        </span>

        <span>
        <h5 className="poppins-bold">Communities</h5>
        <ul>
            <li>Our Creativity</li>
        </ul>
        </span>
    </div>

    <button
    className="btn btn-primary"
    onClick={() => setShowMore(!showMore)}
    >
    {showMore ? "Show Less" : "Read More"}
    </button>
</section>
);
}