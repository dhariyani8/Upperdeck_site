import { motion } from "motion/react";

export default function Gallery() {
  const images = [
    {
      src: "/gallery/cafe-1.jpeg",
      alt: "The Upper Deck Rooftop",
      className: "col-span-1 md:col-span-2 row-span-2"
    },
    {
      src: "/gallery/cafe-2.jpeg",
      alt: "Cafe Ambiance",
      className: "col-span-1 row-span-1"
    },
    {
      src: "/gallery/cafe-3.jpeg",
      alt: "Cafe View",
      className: "col-span-1 row-span-1"
    },
    {
      src: "/gallery/cafe-4.jpeg",
      alt: "Snooker Area",
      className: "col-span-1 md:col-span-2 row-span-1"
    },
    {
      src: "/gallery/cafe-5.jpeg",
      alt: "Seating",
      className: "col-span-1 md:col-span-2 row-span-2"
    },
    {
      src: "/gallery/cafe-6.jpeg",
      alt: "Rooftop Night",
      className: "col-span-1 md:col-span-2 row-span-1"
    },
    {
      src: "/gallery/cafe-7.jpeg",
      alt: "Cafe Interior",
      className: "col-span-1 row-span-1"
    },
    {
      src: "/gallery/cafe-8.jpeg",
      alt: "Cafe Exterior",
      className: "col-span-1 row-span-1"
    }
  ];

  return (
    <section id="gallery" classname="py-24 bg-ud-dark relative">
      <div classname="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div classname="text-center mb-16">
          <h2 classname="text-ud-accent font-medium tracking-[0.2em] uppercase text-sm mb-2">The Vibe</h2>
          <h3 classname="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            Gallery
          </h3>
          <div classname="w-24 h-1 bg-ud-accent mx-auto mt-6"></div>
        </div>

        {/* Bento Grid Gallery */}
        <div classname="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, idx) => (
            <motion.div key="{idx}" initial="{{" opacity:="" 0,="" scale:="" 0.95="" }}="" whileinview="{{" opacity:="" 1,="" scale:="" 1="" }}="" viewport="{{" once:="" true="" }}="" transition="{{" duration:="" 0.5,="" delay:="" idx="" *="" 0.1="" }}="" classname="{`relative" overflow-hidden="" rounded-2xl="" group="" ${img.classname}`}="">
              <div classname="absolute inset-0 bg-ud-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src="{img.src}" alt="{img.alt}" classname="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" referrerpolicy="no-referrer"/>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
