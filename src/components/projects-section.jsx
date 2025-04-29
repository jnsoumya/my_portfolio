import { Roboto_Slab } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const font = Roboto_Slab({ subsets: ["latin"] });


// Sample project data
const projects = [
  {
    id: "licensed-drivers",
    title: "LICENSED DRIVERS DATA ANALYSIS IN USA",
    description:
      "Performed an in-depth exploration and cleaning of two datasets using Pandas. Developed and maintained a series of SQL queries to uncover patterns and test hypotheses regarding the distribution of licensed drivers across age groups, gender, and state governing party. Generated insightful visualizations using Python libraries Matplotlib and Seaborn to effectively communicate the findings.",
    image: "/licensed_project.jfif",
    technologies: ["Python", "Pandas", "SQL", "Matplotlib", "Seaborn"],
    url: "#view-project",
  },
  {
    id: "food-sales",
    title: "FOOD SALES AND CUSTOMER ANALYSIS",
    description:
      "Developed a robust food sales and orders database utilizing four PostgreSQL tables. Leveraged SQL expertise to analyze data and extract key insights, including customer satisfaction rate, repeat customer percentage, top-selling products, and net profit revenue. Constructed an interactive KPI dashboard in Tableau to visualize trends, provide actionable business metrics, and uncover opportunities for improvement.",
    image: "/hero-banner-image.jpg",
    technologies: ["PostgreSQL", "SQL", "Tableau", "Data Modeling"],
    url: "#view-project",
  },
  {
    id: "yelp-dataset",
    title: "THE YELP DATASET",
    description:
      "Conducted a comprehensive profiling and analysis of businesses and user data to establish correlations between user reviews and various metrics, including the number of fans, customer success rates, and business rating distributions across categories and locations.",
    image: "/hero-banner-image.jpg",
    technologies: ["PostgreSQL", "SQL", "Google Docs"],
    url: "#view-project",
  },
];

export function ProjectsSection() {
  return (
    <section className="my-12 lg:my-24">
      <h2 className={cn("text-2xl md:text-4xl font-bold text-[#8B5A2B] mb-2", font.className)}>
        PROJECTS
      </h2>
      <div className="h-1 w-[170px] bg-green-700 mb-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-16">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col gap-8">
            <div className="relative min-h-[350px] overflow-hidden rounded-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>

            <h3 className={cn("text-xl font-bold text-[#8B5A2B]", font.className)}>
              {project.title}
            </h3>

            <p className="text-base flex-grow">
              {project.description}
            </p>

            {project.technologies && (
              <p className="text-sm font-normal">
                {project.technologies.join(" • ")}
              </p>
            )}

            {project.url && (
              <Button
                className={cn('bg-[#446e0d] border-2 border-[#446e0d] hover:bg-white text-white hover:text-[#446e0d] w-fit mt-auto tracking-wider', font.className)}
                size="lg"
                asChild
              >
                <a href={project.url}>VIEW PROJECT</a>
              </Button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
