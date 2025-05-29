import { Roboto_Slab } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const font = Roboto_Slab({ subsets: ["latin"] });


const projects = [
  {
    id: "stack-overflow-analysis",
    title: "STACKOVERFLOW DEVELOPER SURVEY DATA ANALYSIS",
    description:
      "Performed comprehensive analysis of the Stack Overflow Developer Survey using a combination of SQL and Python. Developed a suite of SQL queries to explore trends and test hypotheses across key dimensions such as country, age, education level, programming experience, technology preferences, job satisfaction, and AI adoption. Cleaned and prepared the data using Pandas, and utilized Matplotlib and Seaborn to create clear, insightful visualizations that highlighted patterns in developer demographics, tech stack usage, and professional outlook.The analysis provided actionable insights into the developer community, revealing trends in technology adoption, job satisfaction, and the impact of AI on development practices.",
    image: "/survey.jpg",
    technologies: ["Python", "Pandas", "SQL", "Matplotlib", "Seaborn"],
    url: "#view-project githublink",
  },
 {
    id: "walmart-sales-analysis",       
    title: "WALMART SALES ANALYSIS",    
    description:
      "This project focuses on analyzing Walmart's point-of-sale data to address key business questions using SQL. It includes:\n\n" +
      "• Trend analysis by branch, category, and time\n" +
      "• Profit and performance comparisons across cities\n" +
      "• Behavior segmentation by time of day\n" +
      "• Revenue change detection between 2022 and 2023\n\n" +
      "Tools used: SQL (PostgreSQL), window functions, date/time parsing, aggregation, CTEs.\n" +
      "Insights were designed to support decision-making in marketing strategy, store operations, and product planning.",
    image: "/sample.jpg",
    technologies: ["Python", "Pandas", "SQL", "Matplotlib", "Seaborn"],
    url: "#view-project-github-link"
  },
  {
    id: "ecommerce-sales-performance",       
    title: "E-COMMERCE SALES PERFORMANCE ANALYSIS",    
    description:
      "Analyzed an e-commerce dataset using SQL to uncover sales trends, customer behavior, and product performance. Key deliverables:\n\n" +
      "• Total and average revenue by country and product\n" +
      "• Monthly revenue trend and top customer profiling\n" +
      "• Product bundling patterns (items frequently bought together)\n\n" +
      "Used SQL CTEs, joins, aggregations, and window functions for efficient querying. Visualized results using Matplotlib and Seaborn for actionable business insights.",
    image: "/sample2.jpg",
    technologies: ["SQL", "Python", "Matplotlib", "Seaborn"],
    url: "#view-project-ecommerce"
  },
  {
    id: "yelp-dataset",
    title: "THE YELP DATASET",
    description:
      "Conducted a comprehensive profiling and analysis of businesses and user data to establish correlations between user reviews and various metrics, including the number of fans, customer success rates, and business rating distributions across categories and locations.",
    image: "/review.jpg",
    technologies: ["PostgreSQL", "SQL", "Google Docs"],
    url: "#view-project",
  },
   {
    id: "retail-dataset",
    title: "RETAIL SALES TRENDS & ANALYSIS",
    description:
      "This Sales Performance Dashboard visualizes key metrics such as YTD revenue, YoY growth, and goal progress. It highlights revenue trends by month, product, and store, enabling deeper insights into high-performing categories and locations. The dashboard supports strategic decisions through clear comparisons and goal tracking.",
    image: "/retail_sales.png",
    technologies: ["POWER BI", "SQL", "Excel"],
    url: "#view-project",
  },
   {
    id: "hr-dataset",
    title: "WORKFORCE RETENTION ANALYSIS",
    description:
      "This HR Analytics Dashboard visualizes employee attrition using key metrics and trends across multiple organizational and demographic dimensions to help identify patterns and areas for HR intervention.",
    image: "/hr_attrition.png",
    technologies: ["Tableau"],
    url: "#view-project",
  },
];

export function ProjectsSection() {
  return (
    <section className="my-12 lg:my-24">
      <h2 className={cn("text-2xl md:text-4xl font-bold text-yellow-darker mb-2", font.className)}>
        PROJECTS
      </h2>
      <div className="h-1 w-[185px] bg-green-700 mb-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-16">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col gap-8">
            <div className="relative min-h-[350px] overflow-hidden rounded-lg border-4 border-[#1a1a1a]">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>

            <h3 className={cn("text-xl font-bold text-[#598322]", font.className)}>
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
