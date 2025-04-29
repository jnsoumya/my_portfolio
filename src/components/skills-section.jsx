export function SkillsSection() {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold text-[#8B5A2B] mb-6">
        SKILLS
      </h2>

      {/* Skills content will go here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-white/50 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-[#8B5A2B] mb-2">
            Data Analysis
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Statistical Analysis</li>
            <li>Data Cleaning</li>
            <li>Data Visualization</li>
            <li>Predictive Modeling</li>
          </ul>
        </div>

        <div className="p-4 bg-white/50 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-[#8B5A2B] mb-2">
            Programming
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>SQL</li>
            <li>Python</li>
            <li>R</li>
            <li>Spark</li>
          </ul>
        </div>

        <div className="p-4 bg-white/50 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-[#8B5A2B] mb-2">Tools</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Tableau</li>
            <li>Excel</li>
            <li>Power BI</li>
            <li>Google Analytics</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
