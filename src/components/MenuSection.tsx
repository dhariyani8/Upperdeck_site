import { useState } from "react";
import { motion } from "motion/react";
import { menuData } from "../data/menuData";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].title);

  return (
    <section id="menu" classname="py-24 bg-ud-black relative">
      <div classname="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div classname="text-center mb-16">
          <h2 classname="text-ud-accent font-medium tracking-[0.2em] uppercase text-sm mb-2">Our Offerings</h2>
          <h3 classname="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            The Menu
          </h3>
          <div classname="w-24 h-1 bg-ud-accent mx-auto mt-6"></div>
        </div>

        <div classname="flex flex-col md:flex-row gap-8 lg:gap-16">
          
          {/* Category Navigation (Sticky on Desktop) */}
          <div classname="md:w-1/3 lg:w-1/4 shrink-0">
            <div classname="sticky top-28 flex flex-row md:flex-col overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide border-b md:border-b-0 md:border-l border-white/10">
              {menuData.map((category) => (
                <button key="{category.title}" onclick="{()" ==""> setActiveCategory(category.title)}
                  className={`relative whitespace-nowrap md:whitespace-normal text-left px-6 py-4 transition-all duration-300 font-medium uppercase tracking-wider text-sm ${
                    activeCategory === category.title
                      ? "text-ud-accent bg-white/5"
                      : "text-gray-500 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {activeCategory === category.title && (
                    <motion.div layoutid="activeCategoryIndicator" classname="absolute bottom-0 left-0 right-0 h-0.5 md:h-full md:w-1 md:right-auto bg-ud-accent"/>
                  )}
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items Display */}
          <div classname="md:w-2/3 lg:w-3/4 min-h-[500px]">
            {menuData.map((category) => (
              <div key="{category.title}" classname="{`${activeCategory" =="=" category.title="" ?="" "block"="" :="" "hidden"}`}="">
                <motion.div initial="{{" opacity:="" 0,="" y:="" 20="" }}="" animate="{{" opacity:="" activecategory="==" category.title="" ?="" 1="" :="" 0,="" y:="" activecategory="==" category.title="" ?="" 0="" :="" 20="" }}="" transition="{{" duration:="" 0.4="" }}="">
                  <h4 classname="font-display text-3xl text-white mb-8 border-b border-white/10 pb-4">
                    {category.title}
                  </h4>

                  {/* Render direct items if any */}
                  {category.items && category.items.length > 0 && (
                    <div classname="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
                      {category.items.map((item, idx) => (
                        <div key="{idx}" classname="flex flex-col">
                          <div classname="flex justify-between items-baseline border-b border-white/10 pb-2 mb-2">
                            <span classname="text-lg font-medium text-white">{item.name}</span>
                            <span classname="text-ud-accent font-display font-bold">₹{item.price}/-</span>
                          </div>
                          {item.description && (
                            <p classname="text-sm text-gray-400 font-light">{item.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Render subcategories if any */}
                  {category.subcategories && category.subcategories.length > 0 && (
                    <div classname="space-y-12">
                      {category.subcategories.map((sub, subIdx) => (
                        <div key="{subIdx}">
                          <h5 classname="text-xl text-ud-accent font-display mb-6 uppercase tracking-wider">
                            {sub.title}
                          </h5>
                          <div classname="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            {sub.items.map((item, idx) => (
                              <div key="{idx}" classname="flex justify-between items-baseline border-b border-white/5 pb-2">
                                <span classname="text-base text-gray-200">{item.name}</span>
                                <span classname="text-white font-display">₹{item.price}/-</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
