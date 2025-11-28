"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "AI Knowledge Hub",
    description: "Next-generation knowledge base powered by GPT-4 and vector search. Features automated tagging and semantic retrieval.",
    tags: ["Next.js 15", "OpenAI", "Pinecone", "Tailwind"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    link: "#",
    github: "#",
    className: "md:col-span-2 h-full min-h-[350px]",
  },
  {
    title: "Mobile Banking",
    description: "Native iOS experience for modern finance.",
    tags: ["React Native", "Expo", "Supabase"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    link: "#",
    github: "#",
    className: "md:col-span-2 h-full min-h-[350px]",
  },
  {
    title: "E-Commerce V2",
    description: "Headless Shopify storefront.",
    tags: ["Shopify", "Remix"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop",
    link: "#",
    github: "#",
    className: "md:col-span-1 h-full min-h-[300px]",
  },
  {
    title: "Design System",
    description: "Component library for enterprise.",
    tags: ["Storybook", "Radix UI"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2370&auto=format&fit=crop",
    link: "#",
    github: "#",
    className: "md:col-span-1 h-full min-h-[300px]",
  },
  {
    title: "Crypto Analytics",
    description: "Real-time blockchain transaction visualizer.",
    tags: ["Web3.js", "D3.js", "Ethereum"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    link: "#",
    github: "#",
    className: "md:col-span-2 h-full min-h-[300px]",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Selected Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              A collection of products and tools built with a focus on performance, aesthetics, and user experience.
            </p>
          </div>
          <Button variant="outline" className="rounded-full group" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View Github <Github className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6 grid-flow-dense">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className={cn(
                "group relative overflow-hidden rounded-[32px] bg-neutral-900/20 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-black/20",
                project.className
              )}
            >
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-75 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              <div className="relative h-full flex flex-col p-8 justify-end z-10">
                <div className="transform transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <div className="flex justify-between items-end mb-4">
                    <h3 className="text-2xl font-bold text-white leading-tight tracking-tight">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                      <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                           <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button size="icon" className="h-8 w-8 rounded-full" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                           <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-base mb-6 line-clamp-2 group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-white/70 bg-white/5 backdrop-blur-sm border border-white/5 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}