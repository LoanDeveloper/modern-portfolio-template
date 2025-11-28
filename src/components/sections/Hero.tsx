"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      
      {/* Grid overlay for tech feel - Kept but simplified as background lights handle the color */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-white/80">Available for new projects</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8"
          >
            Architecting the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-blue-500 animate-gradient-x">
              Digital Future
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            I am <strong className="text-white">Loan Thomy</strong>. Fullstack Engineer crafting pixel-perfect, high-performance web applications with Next.js & NestJS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="h-12 px-8 rounded-full text-base" asChild>
              <Link href="#projects">
                Explore Work <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 rounded-full text-base" asChild>
              <Link href="/cv.pdf">
                Download CV <Download className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-20 pt-10 border-t border-white/5 flex items-center justify-center gap-8"
          >
             <SocialLink href="#" icon={<Github className="w-5 h-5" />} label="Github" />
             <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
             <SocialLink href="#" icon={<Mail className="w-5 h-5" />} label="Email" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors group"
    >
      <span className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
        {icon}
      </span>
      <span className="hidden md:inline text-sm font-medium">{label}</span>
    </a>
  )
}
