import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Roboto_Slab } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Roboto_Slab({ subsets: ["latin"] });

export function MainContent() {
  return (
    <>
      <section className="grid md:grid-cols-2 gap-8 items-center my-12 lg:my-24">
        <div className="order-last md:order-first space-y-6">
          <h1 className={cn("text-3xl md:text-5xl font-bold text-[#5A7D2B] mb-20", font.className)}>
            Hi, I'm Soumya
          </h1>
          <h2 className={cn("text-lg md:text-xl font-normal uppercase", font.className)}>
            Welcome to my Data Analyst Portfolio
          </h2>
          <p className="text-sm md:text-base font-normal mb-12">
            Highly organized and proactive data analyst with experience
            translating raw data into actionable insights. Proficient in
            utilizing SQL, Tableau, and Excel for comprehensive data analysis,
            dynamic KPI metrics visualization, and the creation of insightful
            ad-hoc reports.
          </p>
          <a
            href="/Soumya_JN_CV.pdf"
            title="Download Resume"
            role="button"
            target="_blank"
            download={true}
            className="inline-block"
            rel="noopener noreferrer"
          >
            <Button className="bg-green-700 hover:bg-green-700 text-white px-6 py-2 rounded hover:bg-white text-white hover:text-[#446e0d] w-fit mt-auto tracking-wider">
              <Download /> Download resume
            </Button>
          </a>
        </div>
        <div className="order-first md:order-last relative h-[300px] md:h-[400px] border border-gray-300 rounded-lg">
          <Image
            src="/hero-banner-image.jpg"
            alt="Data visualization on laptop"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </section>
    </>
  );
}
