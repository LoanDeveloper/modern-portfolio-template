import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Loan Thomy. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
           <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
             <Github className="w-5 h-5" />
           </Link>
           <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
             <Linkedin className="w-5 h-5" />
           </Link>
           <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
             <Twitter className="w-5 h-5" />
           </Link>
        </div>
      </div>
    </footer>
  );
}
