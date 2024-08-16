"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Currently, I am a first-year{" "}
        <span className="italic">Master&apos;s student in Informatics </span>.
        As a child, I was good at crossing out images, and that&apos;s what{" "}
        <span className="font-medium">frontend development</span> is to me—where
        the image is a given design and the drawing is the website i build. My
        core stack includes{" "}
        <span className="font-medium">
          Angular, React, Next.js, and Firebase
        </span>
        . I am always eager to learn new technologies and expand my skill set.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, watching movies, series and anime. Additionally, I
        have been training water polo since 2011.
      </p>
    </motion.section>
  );
}
