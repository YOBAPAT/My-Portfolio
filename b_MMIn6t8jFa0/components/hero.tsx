import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-3xl mx-auto w-full">
        <p className="text-primary font-mono text-sm mb-4">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
          Yogesh Bapat
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-muted-foreground mb-6 text-balance">
          Sr Demand Planning and Operations
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mb-8 leading-relaxed">
          Global Supply Chain Management professional with 10+ years of experience.
          Currently at Tarana Wireless, driving S&OP processes, demand forecasting,
          and IBP solutions. Lean Six Sigma Green Belt certified.
        </p>

        <div className="flex items-center gap-6 mb-12">
          <a
            href="https://github.com/yogeshbapat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/yogeshbapat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:alex@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>

        <Link
          href="#about"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
        >
          Learn more about me
          <ArrowDown size={16} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
