"use client";

import { motion } from "framer-motion";

export default function BackgroundLights() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      
      {/* --- HERO SECTION --- */}
      
      {/* Haut Gauche - Violet (Existant) */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 -left-[10%] w-[400px] h-[400px] rounded-full bg-primary blur-[100px]"
      />

      {/* Bas Droite du Hero - Rose/Violet (NOUVEAU DEMANDE) */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[15%] right-0 w-[450px] h-[450px] rounded-full bg-fuchsia-600 blur-[110px]"
      />


      {/* --- SKILLS SECTION --- */}
      
      {/* Derrière la Bento Grid - Plus bas, plus petit, Violet (MODIFIE) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1], 
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[35%] left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-purple-600 blur-[100px]"
      />


      {/* --- PROJECTS SECTION --- */}
      
      <motion.div 
        animate={{ x: [-20, 20, -20], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[60%] -left-[5%] w-[350px] h-[350px] rounded-full bg-blue-600 blur-[100px]"
      />

      {/* --- CONTACT SECTION --- */}
      
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[90%] right-[10%] w-[400px] h-[400px] rounded-full bg-indigo-600 blur-[110px]"
      />

    </div>
  );
}