import {
  ArrowUpRight,
  Flame,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import React from "react";
import type { SocialCardProps } from "./types/index";
import { projects } from "./data/projects";
import { experiences } from "./data/experiences";
import { skills } from "./data/skills.tsx";
import { thoughts } from "./data/thoughts";
import Reveal from "./Reveal";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

/* ------------------ Small Components ------------------ */

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="text-center">
    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
      {value}
    </h3>
    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-zinc-400 max-w-22 md:max-w-32 lg:text-start mt-1">
      {label}
    </p>
  </div>
);

const Card: React.FC<{ title: string; description: string; color: string }> = ({
  title,
  description,
  color,
}) => (
  <div
    className={`rounded-2xl p-4 sm:p-6 min-h-30 md:min-h-40 flex flex-col justify-between ${color}`}
  >
    <h4 className="text-xl font-bold text-black">{title}</h4>
    <p className="text-sm opacity-80 text-black">{description}</p>
  </div>
);

/* ------------------ Right Content ------------------ */

const ProjectsSection: React.FC = () => (
  <Reveal>
    <section className="mt-12 md:mt-16 lg:mt-24">
      <h2 className="text-4xl md:text-5xl lg:text-[5.5rem] text-center lg:text-start leading-none font-extrabold uppercase mb-6 sm:mb-8 md:mb-12">
        Recent
        <br />
        <span className="text-zinc-800">Projects</span>
      </h2>
      <div className="grid grid-cols-1 gap-8 md:gap-12 lg:gap-20 md:max-w-11/12 lg:max-w-full mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="space-y-3 sm:space-y-4 transition-transform hover:scale-[1.02]"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="object-cover rounded-2xl w-full "
            />

            {/* Content */}
            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl mt-2 font-Nunito font-bold">
                  {project.title}
                </h3>

                <p className="text-zinc-400 max-w-lg tracking-tight text-sm sm:text-base md:text-lg mt-2">
                  {project.description}
                </p>
              </div>

              {/* Links */}
              {(project.link || project.git) && (
                <div className="flex gap-6 justify-center items-end text-purple-400 text-sm font-medium">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      <ArrowUpRight className="w-full" />
                      Live
                    </a>
                  )}

                  {project.git && (
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      <ArrowUpRight className="w-full" />
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  </Reveal>
);

const ExperienceSection: React.FC = () => {
  return (
    <Reveal>
      <section className="mt-20 md:mt-28 lg:mt-40">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-[5.5rem] text-center lg:text-start leading-none font-extrabold uppercase">
          {/* <span className="text-zinc-800">12 Years of</span> <br /> */}
          Experience
        </h2>

        {/* Timeline */}
        <div className="mt-10 md:mt-14 lg:mt-20 space-y-8 md:space-y-10 lg:space-y-14">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-8"
            >
              {/* Left Content */}
              <div className="max-w-2xl flex-1">
                <h3 className="text-lg sm:text-xl font-semibold">
                  {exp.company}
                </h3>

                <p className="text-zinc-400 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
                  {exp.description}
                </p>

                <p className="text-zinc-500 text-xs mt-3">{exp.duration}</p>
              </div>

              {/* Arrow */}
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-500 hover:text-purple-700 hover:scale-150 transition-colors"
                >
                  <ArrowUpRight size={20} />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <Reveal>
      <section className="mt-20 md:mt-28 lg:mt-40">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-[5.5rem] text-center lg:text-start leading-none font-extrabold uppercase">
          Core <br />
          <span className="text-zinc-700">Skills</span>
        </h2>

        {/* Grid */}
        <div className="mt-10 md:mt-14 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-24 gap-y-8 md:gap-y-10 lg:gap-y-14">
          {skills.map((skill) => (
            <div key={skill.id} className="flex items-start gap-3 sm:gap-4">
              {/* Icon */}
              <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-white text-black shrink-0">
                {skill.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold">
                  {skill.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                  {skill.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
};

const ThoughtsSection: React.FC = () => {
  return (
    <Reveal>
      <section className="mt-20 md:mt-28 lg:mt-40">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-[5.5rem] text-center lg:text-start leading-none font-extrabold uppercase">
          Design <br />
          <span className="text-zinc-800">Thoughts</span>
        </h2>

        {/* Timeline */}
        <div className="mt-10 md:mt-14 lg:mt-20 space-y-8 md:space-y-10 lg:space-y-14">
          {thoughts.map((exp) => (
            <div
              key={exp.id}
              className="group flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-8"
            >
              {/* Left Content */}
              <div className="max-w-2xl flex-1">
                <h3 className="text-lg sm:text-xl font-semibold">
                  {exp.company}
                </h3>

                <p className="text-zinc-400 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
                  {exp.description}
                </p>

                <p className="text-zinc-500 text-xs mt-3">{exp.date}</p>
              </div>

              {/* Arrow */}
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-500 hover:text-purple-700 hover:scale-150 transition-colors"
                >
                  <ArrowUpRight size={20} />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
};

const CollabSection: React.FC = () => {
  return (
    <Reveal>
      <section className="mt-20 md:mt-28 lg:mt-40 text-white">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-[4.5rem] text-center lg:text-start leading-none font-extrabold uppercase tracking-tight">
          Let's work <br />
          <span className="text-zinc-500">together</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 lg:max-w-xl text-zinc-400 text-sm text-center lg:text-start sm:text-base md:text-lg">
          Open to full-time roles, internships, freelance projects, and
          impactful collaborations in software development.
        </p>

        {/* Social / Contact Links */}
        <div className="mt-8 sm:mt-10 md:mt-16 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
          <SocialCard
            href="https://wa.me/919515984423"
            label="WhatsApp"
            color="group-hover:text-green-500"
            icon={<FaWhatsapp />}
          />
          <SocialCard
            href="mailto:218r1a6752@gmail.com"
            label="Email"
            color="group-hover:text-red-500"
            icon={<FaEnvelope />}
          />
          <SocialCard
            href="https://linkedin.com/in/vashista-rama-krishna"
            label="LinkedIn"
            color="group-hover:text-blue-700"
            icon={<FaLinkedin />}
          />
          <SocialCard
            href="https://github.com/VashistaRK"
            label="GitHub"
            color="group-hover:text-gray-100"
            icon={<FaGithub />}
          />
        </div>
      </section>
    </Reveal>
  );
};

/* -------------------- */
/* Reusable Social Card */
/* -------------------- */

const SocialCard: React.FC<SocialCardProps> = ({
  href,
  label,
  icon,
  color,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-2 sm:gap-3 md:gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900`}
    >
      <span
        className={`text-lg sm:text-xl md:text-2xl text-zinc-400 transition-colors ${color}`}
      >
        {icon}
      </span>
      <span className={`text-xs sm:text-sm font-medium text-zinc-300 ${color}`}>
        {label}
      </span>
    </a>
  );
};

const RightContent: React.FC = () => (
  <main className="min-h-screen mx-5 sm:mx-0 text-white lg:text-start flex flex-col items-center lg:flex-none lg:items-start font-Poppins">
    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center lg:text-start leading-none font-extrabold uppercase">
      SOFTWARE <br />
      <span className="text-zinc-600">ENGINEER</span>
    </h1>

    <p className="max-w-xl text-center lg:text-start text-zinc-400 text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6">
      Passionate about creating intuitive and engaging user experiences along
      with building scalable, reliable, and well-architected software systems.
    </p>

    <div className="flex justify-center flex-wrap gap-2 sm:gap-4 md:gap-8 lg:gap-10 mt-6 sm:mt-8 md:mt-10">
      <Stat value="Grad" label="COMPUTER SCIENCE STUDENT" />
      <Stat value="10+" label="REAL-WORLD PROJECTS" />
      <Stat value="TOP 8" label="HACKATHON FINALIST" />
      <Stat value="💪" label="DSA & SYSTEM DESIGN" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-14">
      <Card
        title="Backend & API Engineering"
        description="Designing secure, scalable REST APIs and business logic"
        color="bg-[#CE71E5]"
      />
      <Card
        title="Full-Stack Development"
        description="React, TypeScript, Node.js, Java, MySQL"
        color="bg-[#C4FF57]"
      />
    </div>

    <Reveal>
      <ProjectsSection />
    </Reveal>
    <Reveal>
      <ExperienceSection />
    </Reveal>
    <Reveal>
      <SkillsSection />
    </Reveal>
    <Reveal>
      <ThoughtsSection />
    </Reveal>
    <Reveal>
      <CollabSection />
    </Reveal>
  </main>
);

/* ------------------ Profile Card ------------------ */

const ProfileCard: React.FC = () => (
  <aside className="flex flex-col items-center lg:sticky overflow-hidden text-center top-4 sm:top-6 md:top-8 w-full lg:w-80 bg-white rounded-[28px] p-4 sm:p-6 shadow-2xl h-fit">
    {/* Top dashed curve */}
    <svg
      className="hidden lg:flex absolute -top-6 -left-6"
      width="180"
      height="120"
      fill="none"
    >
      <path
        d="M10 110 C 60 120, 140 10, 190 50"
        stroke="#D100D1"
        strokeWidth="3"
        strokeDasharray="6 6"
      />
    </svg>

    {/* Image */}
    <div className="w-6/12 lg:w-full h-48 sm:h-56 md:h-64 rounded-[22px] bg-purple-100 overflow-hidden">
      <img
        src="ProfIM.JPG"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Name */}
    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight font-Poppins mt-4 sm:mt-6">
      Vashista Rama Krishna
    </h2>

    {/* Flame + dashed curve */}
    <div className="relative flex justify-center lg:my-5">
      <div className="w-8 h-8 rounded-full bg-purple-500 hidden lg:flex items-center justify-center text-white z-10">
        <Flame size={18} />
      </div>

      <svg
        className="hidden lg:flex absolute top-4"
        width="280"
        height="80"
        fill="none"
      >
        <path
          d="M0 20 C 70 -20, 210 -20, 280 20"
          stroke="#D100D1"
          strokeWidth="3"
          strokeDasharray="6 6"
        />
      </svg>
    </div>

    {/* Description */}
    <p className="text-zinc-700 px-2 py-2 lg:py-0 sm:px-4 text-sm max-w-sm leading-tight">
      Software Engineer specializing in the architecture of scalable,
      security-first solutions.
    </p>

    {/* Socials */}
    <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 text-purple-500">
      <a
        href="https://linkedin.com/in/vashista-rama-krishna"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6" />
      </a>
      <a href="mailto:218r1a6752@gmail.com" target="_blank" rel="noreferrer">
        <Mail className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6" />
      </a>
      <a
        href="https://instagram.com/vashista_raman"
        target="_blank"
        rel="noreferrer"
      >
        <Instagram className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6" />
      </a>
      <a href="https://github.com/VashistaRK" target="_blank" rel="noreferrer">
        <Github className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </div>
  </aside>
);

/* ------------------ App ------------------ */

const Base: React.FC = () => (
  <div className=" min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 xl:px-48 py-4 sm:py-6 md:py-8">
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 md:gap-12 lg:gap-24">
      <ProfileCard />
      <RightContent />
    </div>
  </div>
);

export default Base;
