"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Package } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Shipment Tracker",
    description:
      "A real-time shipment tracking tool that allows users to track packages across multiple carriers. Features live status updates, delivery estimates, and notification alerts.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    liveUrl: "/projects/shipment-tracker",
    githubUrl: "https://github.com",
    featured: true,
    icon: Package,
  },
  {
    title: "IBP Vena Solutions - Global S&OP Process",
    description:
      "Design & Development of S&OP Process at Tarana Wireless. Built data connections with NetSuite ERP & Salesforce, centralized reporting for supplier forecasts, PPV, and scenario planning. Created ETL transformations and OLAP cube analytics.",
    technologies: ["Vena", "NetSuite", "Salesforce", "ETL", "OLAP"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Supply Chain Network Design",
    description:
      "End-to-end supply chain model using LLamasoft Supply Chain Guru. Determined optimal production/warehouse locations, cleaned data for 18,000 SKUs, and planned transportation for 900 customers - saving approximately $200,000.",
    technologies: ["Supply Chain Guru", "Network Optimization", "Analytics"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];

const otherProjects = [
  {
    title: "Demand Forecasting & Attach Rates",
    description: "Forecasting based on historical performance, customer analysis, and attach rate calculations with ARIMA & statistical models.",
    technologies: ["Forecasting", "ARIMA", "Analytics"],
    githubUrl: "#",
  },
  {
    title: "Fill Rate Optimization",
    description: "Improved Fill Rate 78% to 88%, POP 90% to 95%, GMV 5% growth using inventory optimization and SQL-based analytics.",
    technologies: ["SQL", "Tableau", "Optimization"],
    githubUrl: "#",
  },
  {
    title: "MRP Supply Demand Planning",
    description: "Collaborative workbench for supply/material shortages, clear-to-build automation, and inventory optimization.",
    technologies: ["NetSuite", "MRP", "ERP"],
    githubUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-4">
          <span className="text-primary font-mono text-lg">03.</span>
          Featured Projects
        </h2>
        <div className="w-24 h-px bg-border mb-8" />

        {/* Featured Projects */}
        <div className="space-y-16 mb-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl border border-border p-6 md:p-8 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {project.icon && (
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <project.icon className="text-primary" size={24} />
                    </div>
                  )}
                  <div>
                    <p className="text-primary font-mono text-xs mb-1">
                      Featured Project
                    </p>
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink size={20} />
                    </Link>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="font-mono text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {project.liveUrl.startsWith("/") && (
                <Button asChild size="sm" variant="outline">
                  <Link href={project.liveUrl}>Try Demo</Link>
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-xl font-bold text-foreground mb-6 text-center">
          Other Noteworthy Projects
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border p-5 hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Github className="text-primary" size={18} />
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              <h4 className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-muted-foreground font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
