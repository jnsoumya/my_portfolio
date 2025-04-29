import { PortfolioSidebar } from "@/components/portfolio-sidebar";
import { MainContent } from "@/components/main-content";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <>
      <SidebarProvider defaultOpen={false}>
        <PortfolioSidebar />
        <MainContent />
      </SidebarProvider>
    </>
  );
}
