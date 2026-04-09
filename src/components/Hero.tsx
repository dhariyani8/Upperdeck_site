import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" classname="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div classname="absolute inset-0 z-0">
        <img src="/gallery/cafe-1.jpeg" alt="The Upper Deck Cafe" classname="w-full h-full object-cover opacity-40" referrerpolicy="no-referrer"/>
        <div classname="absolute inset-0 bg-gradient-to-b from-ud-black/80 via-ud-black/50 to-ud-black"></div>
      </div>

      {/* Content */}
      <div classname="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div initial="{{" opacity:="" 0,="" y:="" 30="" }}="" animate="{{" opacity:="" 1,="" y:="" 0="" }}="" transition="{{" duration:="" 0.8,="" delay:="" 0.2="" }}="">
          <h2 classname="text-ud-accent font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-4">
            Welcome to the top
          </h2>
          <h1 classname="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-tighter leading-[0.9] mb-6">
            The Upper Deck
            <br/>
            <span classname="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Cafe & Grill
            </span>
          </h1>
          <p classname="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Experience premium dining, thrilling snooker games, and a breathtaking rooftop ambiance under the open sky.
          </p>
          
          <div classname="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#menu" classname="px-8 py-4 bg-ud-accent text-ud-black font-semibold rounded-full uppercase tracking-wider hover:bg-white transition-colors duration-300">
              Explore Menu
            </a>
            <a href="https://www.instagram.com/theupperdeck.cafe_/" target="_blank" rel="noopener noreferrer" classname="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-full uppercase tracking-wider hover:bg-white/10 transition-colors duration-300">
              Follow Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial="{{" opacity:="" 0="" }}="" animate="{{" opacity:="" 1="" }}="" transition="{{" delay:="" 1.5,="" duration:="" 1="" }}="" classname="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span classname="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
        <motion.div animate="{{" y:="" [0,="" 10,="" 0]="" }}="" transition="{{" repeat:="" infinity,="" duration:="" 1.5,="" ease:="" "easeinout"="" }}="">
          <arrowdown size="{16}" classname="text-ud-accent"/>
        </motion.div>
      </motion.div>
    </section>
  );
}
