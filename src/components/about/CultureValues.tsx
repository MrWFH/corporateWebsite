import { Lightbulb, Users, Target, Handshake } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CULTURE_VALUES } from "@/data/company";

const iconMap: Record<string, React.ComponentType<{ size?: number | string }>> = {
  Lightbulb,
  Users,
  Target,
  Handshake,
};

const gradients = [
  "from-amber-400 to-orange-400",
  "from-blue-500 to-cyan-400",
  "from-rose-500 to-pink-400",
  "from-emerald-500 to-teal-400",
];

export function CultureValues() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionTitle
          title="企业文化与价值观"
          subtitle="以价值观为内核，驱动持续创新与卓越交付"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CULTURE_VALUES.map((value, index) => {
            const Icon = iconMap[value.icon];
            return (
              <AnimateOnScroll key={value.title} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl bg-white p-8 text-center border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div
                    className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradients[index]} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    {Icon && <Icon size={28} />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {value.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
