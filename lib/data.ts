import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import summonerSpyImage from "@/public/summonerspy.png";
import billTrackerImg from "@/public/billtracker.png";
import chatAppImg from "@/public/chatapp.png";
import adminDashboardImg from "@/public/admindashboard.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated highschool",
    location: "Rijeka, Croaita",
    description:
      "I graduated a 4 year highschool in Rijeka. I attended the Computer Technician course.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Rijeka, Croatia",
    description: "I worked as a Frontend Developer for a year at Juice d.o.o.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Graduated Bachelor's Degree",
    location: "Rijeka, Croatia",
    description:
      "I graduated with a Bachelor's degree in Informatics on Faculty of Informatics and Digital Technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Master's Degree",
    location: "Rijeka, Croatia",
    description:
      "I'm now in my first year of studying for my Master's degree in Informatics on Faculty of Informatics and Digital Technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Summoner Spy",
    description:
      "My final project for Bachelor's degree. Users view LoL player's match history and add profiles as their favorites.",
    tags: ["Angular", "Typescript", "Express", "Firebase", "Tailwind"],
    imageUrl: summonerSpyImage,
    githubUrl: "https://github.com/marinactonci/SummonerSpy-client",
  },
  {
    title: "Bill Tracker",
    description:
      "A bill tracker app where users can add profiles and bills and view them in a dashboard. Users can also view their bill history and statistics.",
    tags: ["React", "Firebase", "Tailwind", "Framer"],
    imageUrl: billTrackerImg,
    githubUrl: "https://github.com/marinactonci/BillTracker",
  },
  {
    title: "Chat App",
    description:
      "A real time chat app where users can create rooms and chat with each other. Upgraded with AI functionalities.",
    tags: ["Angular", "TypeScript", "Tailwind", "Firebase", "Python", "Llama"],
    imageUrl: chatAppImg,
    githubUrl: "https://github.com/marinactonci/ChatApp",
  },
  {
    title: "Admin Dashboard",
    description:
      "A sidebar layout admin dashboard where he can view statistics and manage users and payment orders.",
    tags: ["Angular", "PrimeNG", "json-server"],
    imageUrl: adminDashboardImg,
    githubUrl: "https://github.com/marinactonci/admin-dashboard",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Angular",
  "Git",
  "Github",
  "Prisma",
  "Supabase",
  "Tailwind",
  "Figma",
  "Express",
  "MongoDB",
  "GSAP",
  "Firebase",
  "Python",
  "Django",
  "Framer Motion",
] as const;
