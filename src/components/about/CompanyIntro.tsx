import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { COMPANY_INTRO } from "@/data/company";

export function CompanyIntro() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateOnScroll direction="left">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                {COMPANY_INTRO.title}
              </h2>
              <p className="mt-2 text-lg font-medium gradient-text">
                {COMPANY_INTRO.subtitle}
              </p>
              <p className="mt-6 text-base leading-relaxed text-gray-500">
                {COMPANY_INTRO.description}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {COMPANY_INTRO.highlights.map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-2xl font-bold gradient-text">
                      {item.value}
                    </div>
                    <div className="mt-1 text-sm text-gray-500">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-primary-100 to-accent-400/20">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl gradient-bg shadow-xl">
                      <span className="text-3xl font-bold text-white">T</span>
                    </div>
                    <p className="mt-4 text-sm font-medium text-gray-400">
                      TechVision 总部大楼
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-gradient-to-br from-primary-400 to-accent-400 opacity-20 blur-sm" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
