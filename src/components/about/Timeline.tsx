"use client";

import { motion } from "framer-motion";
import { TIMELINE_EVENTS } from "@/data/company";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Timeline() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <SectionTitle
          title="发展历程"
          subtitle="从创业到行业领军，每一步都是对使命的践行"
        />

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-accent-400 to-primary-300 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8 md:space-y-12">
            {TIMELINE_EVENTS.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative pl-12 md:pl-0"
                >
                  <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full gradient-bg ring-4 ring-white md:left-1/2 md:-translate-x-1.5" />

                  <div
                    className={`md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-sm font-bold text-primary-600">
                      {event.year}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-gray-900">
                      {event.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
