import { Badge } from "@/components/ui/badge";

const skills = [
  "Demand Planning",
  "S&OP",
  "Lean Six Sigma",
  "Supply Chain Operations",
  "NetSuite",
  "SAP",
  "Vena IBP",
  "Tableau",
  "SQL",
  "MRP/MPS",
  "Inventory Optimization",
  "Forecasting",
  "Anaplan",
  "Salesforce",
  "Data Analytics",
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-4">
          <span className="text-primary font-mono text-lg">01.</span>
          About Me
        </h2>
        <div className="w-24 h-px bg-border mb-8" />

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Accomplished Supply Chain Professional with 10+ years of experience
            seeking Techno-Functional roles within Global Supply Chain Management.
            Currently driving demand planning operations at{" "}
            <span className="text-primary font-medium">Tarana Wireless</span> in
            Sunnyvale, California.
          </p>

          <p>
            I specialize in{" "}
            <span className="text-primary font-medium">S&OP processes</span>,{" "}
            demand forecasting, and building IBP models using Vena Solutions.
            My expertise spans MRP, procurement, and cross-functional collaboration
            to ensure supply-demand alignment and inventory optimization.
          </p>

          <p>
            Previously worked with{" "}
            <span className="text-foreground font-medium">Amazon</span>,{" "}
            <span className="text-foreground font-medium">Apple (AppleCare)</span>,{" "}
            <span className="text-foreground font-medium">Google/Fitbit</span>, and{" "}
            <span className="text-foreground font-medium">Volkswagen</span>.
            MS in Logistics & Supply Chain Management from Oklahoma State University.
            Lean Six Sigma Green Belt certified.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-foreground text-sm mb-4 font-medium">
            Core competencies:
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="font-mono text-xs"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
