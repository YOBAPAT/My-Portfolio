import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "2023 — Present",
    title: "Sr. Demand Planning Operations",
    company: "Tarana Wireless, Inc.",
    companyUrl: "https://www.linkedin.com/company/tarana-wireless-inc",
    description:
      "Own consolidated Forecast Signal for Tarana systems and accessories. Drive forecast development strategies, S&OP Master Data Flows & Reporting (Vena), and build IBP supply chain models. Facilitate analytics based on OLAP data to challenge sales forecasts and support decision making.",
    technologies: ["Vena", "NetSuite", "S&OP", "MRP", "Forecasting"],
  },
  {
    period: "2020 — 2023",
    title: "Supply Chain Engineer - Hardware Networking",
    company: "TeqTron Inc",
    companyUrl: "https://www.linkedin.com/company/teqtron-inc",
    description:
      "Collaborated with SCO/Planning Team to drive system improvements for Inventory/Demand/ERP Applications. Supported 14 Hub locations, 2 DCs for supply chain operations. Created analytical dashboards to monitor variances and improved API from 90% to 99.2%.",
    technologies: ["SAP", "Oracle", "Salesforce", "BigQuery", "SQL"],
  },
  {
    period: "2018 — 2019",
    title: "Global Supply Chain Analyst",
    company: "Global Technical Talent",
    companyUrl: "https://www.linkedin.com/company/global-technical-talent",
    description:
      "Analyzed service parts supply/demand for consumer hardware wearables. Enabled merchants to improve Fill Rate (78% to 88%), POP (90% to 95%), and GMV (5% growth). Utilized BI Tools for 200+ SKU supply/demand balancing.",
    technologies: ["Anaplan", "Tableau", "MySQL", "Inventory Optimization"],
  },
  {
    period: "2017 — 2019",
    title: "WW Supply Demand Planning - AppleCare",
    company: "PDS Tech Commercial, Inc.",
    companyUrl: "https://www.linkedin.com/company/pds-tech",
    description:
      "Performed supply demand analysis for 12-month forecasts. Created forecast reports for NPI and Sustaining models within AppleCare repair materials program. Monitored factory adherence to build plans across 6 Global Carrier Networks.",
    technologies: ["Supply Planning", "B2B Forecasting", "Yield Analysis"],
  },
  {
    period: "2016",
    title: "Industrial Engineering Intern - WW Fulfillment",
    company: "Amazon",
    companyUrl: "https://www.linkedin.com/company/amazon",
    description:
      "Led operations improvement project for outbound operations and fill rate optimization. Utilized DMAIC Lean Six Sigma Methods to improve KPIs, streamline processing times, and throughput analysis. Reduced inventory defect rate by 15%.",
    technologies: ["Lean Six Sigma", "DMAIC", "Process Optimization"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-4">
          <span className="text-primary font-mono text-lg">02.</span>
          Experience
        </h2>
        <div className="w-24 h-px bg-border mb-8" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative grid md:grid-cols-[140px_1fr] gap-4 md:gap-8"
            >
              <p className="text-muted-foreground text-sm font-mono">
                {exp.period}
              </p>
              <div>
                <h3 className="text-foreground font-semibold mb-1 flex items-center gap-2">
                  {exp.title} ·{" "}
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    {exp.company}
                    <ExternalLink size={14} />
                  </a>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="font-mono text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium border border-primary px-6 py-3 rounded-lg hover:bg-primary/10"
          >
            View Full Resume
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
