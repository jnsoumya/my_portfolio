"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { CertificationsList } from "./certifications-list";

export function PortfolioSidebar() {
  return (
    <Sidebar collapsible="offcanvas" className="border-r border-green-700/20 bg-white py-4 px-2">
      <SidebarHeader className="p-4">
        <h2 className="text-xl font-bold text-[#8B5A2B]">CERTIFICATES</h2>
        <div className="h-1 w-[170px] bg-green-700 mt-1"></div>
      </SidebarHeader>
      <SidebarContent className="p-0 mt-4">
        <CertificationsList />
      </SidebarContent>
      <SidebarFooter className="p-4 text-xs text-gray-500 border-t border-green-700/10">
        <p>&copy; Julia Ohorodnyk 2025. All rights reserved.</p>
      </SidebarFooter>
    </Sidebar>
  );
}
