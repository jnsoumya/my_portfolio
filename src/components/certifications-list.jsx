"use client";

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Award } from "lucide-react";
import Link from "next/link";

const certifications = [
  {
    title: "Google Data Analytics",
    url: "#google-data-analytics",
  },
  {
    title: "SQL for Data Science",
    url: "#sql-for-data-science",
  },
  {
    title: "Distributed Computing with Spark SQL",
    url: "#distributed-computing",
  },
  {
    title: "Visual Analytics with Tableau",
    url: "#visual-analytics",
  },
];

export function CertificationsList() {
  return (
    <SidebarMenu>
      {certifications.map((cert) => (
        <SidebarMenuItem key={cert.url} className="pb-4">
          <SidebarMenuButton asChild>
            <Link
              href={cert.url}
              className="text-[#5A7D2B] hover:text-[#8B5A2B] text-sm transition-colors"
            >
              <Award className="h-4 w-4" />
              <span>{cert.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
