"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout, Server, Zap, Smartphone, Terminal, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  // LIGNE 1 (Total 5 cols) : [ FRONTEND (3) ] [ BACKEND (1) ] [ MOBILE (1) ]
  {
    title: "Frontend Mastery",
    description: "Creating fluid, responsive interfaces.",
    icon: <Layout className="w-6 h-6" />,
    className: "md:col-span-3", 
    tech: ["React", "Next.js 15", "Tailwind", "Framer", "Three.js"]
  },
  {
    title: "Backend",
    description: "Scalable APIs.",
    icon: <Server className="w-6 h-6" />,
    className: "md:col-span-1",
    tech: ["NestJS", "Node.js", "PostgreSQL"]
  },
  {
    title: "Mobile",
    description: "iOS & Android.",
    icon: <Smartphone className="w-6 h-6" />,
    className: "md:col-span-1",
    tech: ["React Native", "Expo"]
  },

  // LIGNE 2 (Total 5 cols) : [ DEVOPS (1) ] [ SYSTEM (1) ] [ PERFORMANCE (3) ]
  {
    title: "DevOps",
    description: "CI/CD pipelines.",
    icon: <Terminal className="w-6 h-6" />,
    className: "md:col-span-1",
    tech: ["Docker", "AWS", "Github Actions"]
  },
  {
    title: "System Design",
    description: "Architecture.",
    icon: <Cpu className="w-6 h-6" />,
    className: "md:col-span-1",
    tech: ["Microservices", "Patterns"]
  },
   {
    title: "Performance",
    description: "Core Web Vitals optimization & Analytics.",
    icon: <Zap className="w-6 h-6" />,
    className: "md:col-span-3",
    tech: ["Lighthouse", "Vercel Analytics", "Lazy Loading"]
  },
];

export default function Skills() {
  return (
    <section id="stack" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Technical Arsenal</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated stack of modern technologies I use to build the future.
          </p>
        </motion.div>

        {/* Grille de 5 colonnes pour plus de flexibilité */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={cn("group", item.className)}
            >
              <Card className="h-full w-full overflow-hidden border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-primary/50 relative min-h-[160px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10 pb-2">
                  <div className="flex items-center justify-between">
                     <div className="p-2 bg-black/50 w-fit rounded-lg text-primary border border-white/10">
                      {item.icon}
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-colors" />
                  </div>
                  <CardTitle className="text-lg md:text-xl mt-3 truncate">{item.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-1">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-white/5 rounded text-[10px] font-medium text-white/70 border border-white/5 truncate max-w-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}