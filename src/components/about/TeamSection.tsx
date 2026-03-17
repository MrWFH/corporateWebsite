import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TEAM_MEMBERS } from "@/data/company";

export function TeamSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <SectionTitle
          title="核心团队"
          subtitle="汇聚行业顶尖人才，共同打造卓越产品"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member, index) => (
            <AnimateOnScroll key={member.name} delay={index * 0.1}>
              <div className="group overflow-hidden rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-accent-400/20 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary-300 to-accent-400 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                    {member.name[0]}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium gradient-text">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
