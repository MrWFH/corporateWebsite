import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { COMPANY_INTRO } from "@/data/company";

const HEADQUARTERS_ADDRESS = "江夏区光谷大道77号光谷金融港";
const HEADQUARTERS_LAT = 30.456;
const HEADQUARTERS_LON = 114.4253;
const MAP_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${HEADQUARTERS_LON - 0.01}%2C${HEADQUARTERS_LAT - 0.006}%2C${HEADQUARTERS_LON + 0.01}%2C${HEADQUARTERS_LAT + 0.006}&layer=mapnik&marker=${HEADQUARTERS_LAT}%2C${HEADQUARTERS_LON}`;

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
              <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
                <iframe
                  title="TechVision 总部地图"
                  src={MAP_SRC}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-3 rounded-2xl bg-white/90 px-4 py-3 text-sm text-gray-600 ring-1 ring-gray-100 backdrop-blur">
                <p className="font-semibold text-gray-800">TechVision 总部</p>
                <p className="mt-1">{HEADQUARTERS_ADDRESS}</p>
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-gradient-to-br from-primary-400 to-accent-400 opacity-20 blur-sm" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
