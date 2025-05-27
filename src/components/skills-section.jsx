import { Database, FileSpreadsheet, BarChart3 } from "lucide-react";
import { Roboto_Slab } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Roboto_Slab({ subsets: ["latin"] });

const skills = [
  {
    title: "SQL",
    icon: <Database className="h-12 w-12 text-green-700" />,
    description:
      "Data profiling and cleaning data, working with structured and partially structured datasets using aggregations, window functions, and data modeling.",
    additionalInfo: "Databases: PostgreSQL, SQLite, MySQL, Spark SQL",
  },
  {
    title: "Spreadsheets",
    icon: <FileSpreadsheet className="h-12 w-12 text-green-700" />,
    description:
      "Organizing and filtering data, VLOOKUP function, conditional formatting, aggregation functions, pivot tables, creating dashboards and presentations.",
  },
  {
    title: "Tableau",
    icon: <BarChart3 className="h-12 w-12 text-green-700" />,
    description:
      "Creating KPI dashboards from the data analysis to deliver business insights and recommendations to primary stakeholders",
  },
];

export function SkillsSection() {
  return (
    <section className="my-12 lg:my-24">
      <h2 className={cn("text-2xl md:text-4xl font-bold text-[#9a620b] mb-2", font.className)}>
        SKILLS
      </h2>
      <div className="h-1 w-[125px] bg-green-700 mb-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {skills.map((skill, index) => (
          <div key={index} className="flex gap-6">
            <div className="relative flex-shrink-0">
              {/* <div className="absolute inset-0 border border-green-700 rotate-45 transform-gpu"></div> */}
              <div className="relative flex items-center justify-center h-16 w-16 z-10">
                {skill.icon}
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className={cn("text-xl lg:text-3xl font-semibold text-[#4A6D1B] mb-2", font.className)}>
                {skill.title}
              </h3>
              <p className="text-base mb-2">{skill.description}</p>
              {skill.additionalInfo && (
                <p className="text-sm ">{skill.additionalInfo}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
