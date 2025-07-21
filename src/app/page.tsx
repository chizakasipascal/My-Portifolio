'use client'
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");
  const myDate = new Date();

  const experiences = [
    {
      company: "MBC",
      role: "Fullstack Software Engineer",
      period: "July 2025 – Present",
      location: "Remote",
      description:
        "Developing a digital radio and podcast platform called MBC (Media Broadcasting Channel). This platform allows for live audio broadcasting and pre-recorded shows accessible anytime.",
      stack: [
        "Flutter",
        "Dart",
        "NestJS",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Firebase",
      ],
    },
    {
      company: "GoBus",
      role: "Fullstack web Developer",
      period: "November 2023 - Current",
      location: "Remote",
      description:
        "Development of web services (Sass) and virtual payment services of the platform Stack: Nextjs,Typescript,Tailwind css & Firebase. • web site official",
      stack: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    },
    {
      company: "Campusco",
      role: "Fullstack Developer",
      period: "Nov 2023 – July 2025",
      location: "Remote",
      description:
        "Campusco® is a distance learning platform that provides universities with a customizable and comprehensive online teaching environment.",
      stack: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Firebase",
      ],
    },
    {
      company: "GoBus",
      role: "Senior Fullstack Flutter Developer",
      period: "June 2023 – Present",
      location: "Remote",
      description:
        "Development of a GPS-based school bus tracking system aimed at enhancing student safety in DRC.",
      stack: ["Flutter", "Dart", "DartFrog", "Firebase"],
    },
    {
      company: "Connectis",
      role: "Senior Flutter Software Engineer",
      period: "March 2020 – June 2023",
      location: "Goma",
      description:
        "Developed the Connectis Client app, which enables users to activate internet access codes through Cambium devices deployed in public spaces.",
      stack: ["Flutter", "Dart", "Kotlin", "Swift", "Node.js", "PostgreSQL"],
    },
    {
      company: "Synapse-Hub",
      role: "Junior Software Engineer",
      period: "July 2018 – January 2019",
      location: "Goma",
      description:
        "Developed STROM POS, a mobile application for gas station agents to manage stock and customers.",
      stack: ["Kotlin", "Java"],
    },
  ];

  const projects = [
    {
      name: "MBC - Media Broadcasting Channel",
      description:
        "A digital radio and podcast platform for live and on-demand audio content.",
      stack: [
        "Flutter",
        "Dart",
        "NestJS",
        "Firebase",
        "PostgreSQL",
        "Next.js",
      ],
      links: [
        {
          name: "Coming Soon",
          url: "#",
        },
      ],
    },

    {
      name: "GoBus web",
      description:
        "Development of web services (Sass) and virtual payment services of the platform",
      stack: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      links: [
        {
          name: "Gobus official web site",
          url: "https://gobus-website.web.app/",
        }
      ],
    },

    {
      name: "Campusco",
      description:
        "An online learning platform for universities with customizable features.",
      stack: ["React.js", "TypeScript", "Tailwind CSS", "Firebase"],
      links: [
        {
          name: "Visit Website",
          url: "https://campusco.net/ ",
        },
      ],
    },
    {
      name: "GoBus App",
      description:
        "GPS tracking application for school buses to improve student safety.",
      stack: ["Flutter", "Dart", "Firebase"],
      links: [
        {
          name: "Google Play",
          url: "https://play.google.com/store/apps/details?id=cd.gobus.app",
        },
        {
          name: "App Store",
          url: " https://apps.apple.com/cd/app/gobus/id6449877399 ",
        },
      ],
    },
    {
      name: "Connectis Client",
      description:
        "Mobile app for managing internet access codes and connecting to Cambium devices.",
      stack: ["Flutter", "Dart", "Kotlin", "Swift", "PostgreSQL"],
      links: [
        {
          name: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.connectis.connectis_user",
        },
      ],
    },
    {
      name: "STROM POS",
      description:
        "Mobile app for gas station agents to manage stock and customers.",
      stack: ["Kotlin", "Java"],
      links: [
        {
          name: "Google Play",
          url: " https://play.google.com/store/apps/details?id=com.alohadynamics.storm_station_mobile",
        },
      ],
    },
  ];

  const skills = {
    languages: ["TypeScript", "Kotlin", "Dart", "C#"],
    frameworks: [
      "Flutter",
      "React",
      "React Native",
      "Next.js",
      "NestJS",
      "Express.js",
      "Tailwind CSS"
    ],
    databases: ["PostgreSQL", "MySQL", "Firebase", "Superbase", "Appwrite", "MongoDB"],
    others: ["Git", "Docker", "Swagger", "Api", "Agile / SCRUM"],
  };

  const education = {
    degree: "BAC 5 in Software Engineering and Computer Science",
    school: "ISIG Goma",
    period: "2016 – 2020",
    specialization: "Computer Engineering",
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gray-900 text-white p-6 shadow-md fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Pascal C. <span className='font-light'>Software Engineer</span></h1>
          <nav className="space-x-6 hidden md:flex">
            <a
              href="#about"
              onClick={() => setActiveTab("about")}
              className={`hover:underline ${activeTab === "about" ? "font-bold" : ""
                }`}
            >
              About me
            </a>
            <a
              href="#experience"
              onClick={() => setActiveTab("experience")}
              className={`hover:underline ${activeTab === "experience" ? "font-bold" : ""
                }`}
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={() => setActiveTab("projects")}
              className={`hover:underline ${activeTab === "projects" ? "font-bold" : ""
                }`}
            >
              Projets
            </a>
            <a
              href="#skills"
              onClick={() => setActiveTab("skills")}
              className={`hover:underline ${activeTab === "skills" ? "font-bold" : ""
                }`}
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={() => setActiveTab("contact")}
              className={`hover:underline ${activeTab === "contact" ? "font-bold" : ""
                }`}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section
        id="about"
        className="pt-24 pb-16 bg-gray-100 px-6 text-center"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">About me</h2>
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-4">About me</h2>
            <div className="flex flex-col items-start text-justify px-4 max-w-4xl mx-auto space-y-4">
              <p className="text-lg leading-relaxed text-justify">
                I’m a passionate and dedicated software engineer with several years of experience in building modern, high-performance web and mobile applications.
              </p>

              <span className="font-extrabold">Strong technical expertise:</span>

              <ul className="flex flex-col text-justify items-start justify-end pt-2 space-y-2 list-disc list-inside">
                <li>
                  <span className="font-extrabold">Native and cross-platform mobile development</span> (Flutter, React Native, Kotlin)
                </li>
                <li><span className="font-extrabold">Dynamic and responsive web development</span> with Next.js, React, and Tailwind CSS</li>
                <li><span className="font-extrabold">Scalable backend architecture using NestJS and Node.js</span></li>
                <li className="text-justify">
                  <span className="font-extrabold">Data analysis and dashboard design</span> with JavaScript (Danfo.js, Data-Forge, Fetching from APIs, File Handling, Database Interaction, Data Cleaning), and Data Visualization (Chart.js, Plotly.js, ECharts, D3.js)
                </li>
                <li className="text-justify">
                  <span className="font-extrabold"> AI integration</span> for intelligent decision-making and personalized user experiences (e.g., recommendation systems, classification models)
                </li>
                <li>
                  <span className="font-extrabold">Database design, management, and deployment</span> in collaborative environments using PostgreSQL, Firebase, and TypeORM
                </li>
              </ul>

              <span>📋 Proficient in project planning, technical documentation, and agile teamwork</span>
              <span>💡 Whether it's Android, iOS, or web platforms, I bring innovative and reliable solutions tailored to real-world needs.</span>
              <span>🤝 I take pride in delivering quality results through collaboration and user-focused design.</span>
              <span className="text-justify">
                If you’re looking for a versatile, passionate, and results-driven developer or data-driven problem solver to join your team or elevate your project — let’s connect!
              </span>
              <span className="font-extrabold">I’m ready to bring your vision to life.</span>
            </div>

          </div>
        </div>
      </section >

      {/* Experience Section */}
      < section id="experience" className="py-16 px-6" >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional experience
          </h2>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold">{exp.role} | {exp.company}</h3>
              <p className="text-gray-600">{exp.period}</p>
              <p className="mt-2">{exp.description}</p>
              <ul className="flex flex-wrap mt-2 gap-2">
                {exp.stack.map((tech, i) => (
                  <li
                    key={i}
                    className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-100 px-6" >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Completed Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="mb-4">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-sm"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Skills Section */}
      < section id="skills" className="py-16 px-6" >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Langages</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.languages.map((lang, index) => (
                  <li
                    key={index}
                    className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Frameworks</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.frameworks.map((framework, index) => (
                  <li
                    key={index}
                    className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                  >
                    {framework}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Data base</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.databases.map((db, index) => (
                  <li
                    key={index}
                    className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                  >
                    {db}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Others</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.others.map((tool, index) => (
                  <li
                    key={index}
                    className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ section>

      {/* Education Section */}
      {/* <section id="education" className="py-16 bg-gray-100 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div>
            <h3 className="text-xl font-semibold">{education.degree}</h3>
            <p>{education.school}</p>
            <p className="text-gray-600">{education.period}</p>
            <p>Specialization : {education.specialization}</p>
          </div>
        </div>
      </section> */}

      { }
      <section id="education" className="py-16 bg-gray-100 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Languages</h2>
          <div>
            <h3 className="text-xl font-semibold">French</h3>
            <p>Native</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Swahili</h3>
            <p>Native</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">English</h3>
            <p>Conversation</p>
          </div>
        </div>
      </section>




      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Contact me</h2>
          <p className="mb-4">
            📩 Email:{" "}
            <a
              href="mailto:pascalkasichiza@gmail.com"
              className="text-blue-500"
            >
              pascalkasichiza@gmail.com
            </a>
          </p>
          <p>
            🔗 LinkedIn:{" "}
            <a
              href=" https://www.linkedin.com/in/pascal-chiza-kasi-5288031b5/ "
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              My LinkedIn profile
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>© {myDate.getFullYear()} Pascal C. All rights reserved.</p>
      </footer>
    </div >
  );

}
