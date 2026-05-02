import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-primary font-mono text-sm mb-2">04. What&apos;s Next?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          I&apos;m currently open to new opportunities and would love to hear from
          you. Whether you have a question, a project idea, or just want to say
          hi, my inbox is always open. I&apos;ll try my best to get back to you!
        </p>
        <Button asChild size="lg" className="gap-2">
          <a href="mailto:alex@example.com">
            <Mail size={18} />
            Say Hello
          </a>
        </Button>
      </div>
    </section>
  );
}
