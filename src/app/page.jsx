import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

import { PortfolioSidebar } from "@/components/portfolio-sidebar";
import { HeaderNavbar } from "@/components/header-navbar";
import { MainContent } from "@/components/main-content";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <>
      <SidebarProvider defaultOpen={false}>
        <PortfolioSidebar />
        <SidebarInset>
          <main className="px-6 xl:px-16 max-w-screen-lg xl:max-w-screen-2xl mx-auto">
            <HeaderNavbar />
            
            <div className="h-1 w-full bg-green-800" />
            <MainContent />

            <div className="h-1 w-full bg-green-800" />
            <SkillsSection />

            <div className="h-1 w-full bg-green-800" />
            <ProjectsSection />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
