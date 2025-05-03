"use client";

import { useSidebar } from "@/components/ui/sidebar";
import Link from "next/link";
import { Github, Linkedin, Menu } from "lucide-react";

export function HeaderNavbar() {
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <header className="px-2 py-8 flex flex-row justify-between items-center">
        {/* <Menu
          className="h-6 w-6 text-green-800 hover:cursor-pointer"
          onClick={() => toggleSidebar()}
        /> */}

        <div className="flex flex-row gap-4">
          <Link
            href="https://linkedin.com/in/jnsoumya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 text-green-800" />
          </Link>
          <Link
            href="https://github.com/jnsoumya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6 text-green-800" />
          </Link>
        </div>
      </header>
    </>
  );
}
