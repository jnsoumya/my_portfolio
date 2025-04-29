"use client";

import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Github, Linkedin, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SkillsSection } from "./skills-section";
import { ProjectsSection } from "./projects-section";

export function MainContent() {
  return (
    <>
      <SidebarInset>
        <header className="p-4 md:p-6 flex flex-row justify-between items-center">
          <SidebarTrigger className="h-6 w-6 text-green-800" />

          <div className="flex flex-row gap-4">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-green-800" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 text-green-800" />
            </Link>
          </div>
        </header>

        <div className="h-1 w-full bg-green-700"></div>

        <main className="p-4 md:p-6 max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#8B5A2B] mb-4">
                Hi, I&apos;m Julia
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                WELCOME TO MY DATA ANALYST PORTFOLIO
              </h2>
              <p className="text-base md:text-lg mb-6">
                Highly organized and proactive data analyst with experience
                translating raw data into actionable insights. Proficient in
                utilizing SQL, Tableau, and Excel for comprehensive data
                analysis, dynamic KPI metrics visualization, and the creation of
                insightful ad-hoc reports.
              </p>
              <Button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded">
                DOWNLOAD RESUME
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/hero-banner-image.jpg"
                alt="Data visualization on laptop"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>

          <div className="h-1 w-full bg-green-700 my-12"></div>

          <SkillsSection />

          <div className="h-1 w-full bg-green-700 my-12"></div>

          <ProjectsSection />
        </main>
      </SidebarInset>
    </>
  );
}
