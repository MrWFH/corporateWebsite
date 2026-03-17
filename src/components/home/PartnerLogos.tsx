import { SectionTitle } from "@/components/ui/SectionTitle";

const partners = [
  "中国工商银行",
  "中国平安",
  "华为云",
  "阿里巴巴",
  "腾讯",
  "字节跳动",
  "京东",
  "美团",
  "中国移动",
  "国家电网",
];

export function PartnerLogos() {
  const doubled = [...partners, ...partners];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <SectionTitle
          title="信赖我们的伙伴"
          subtitle="携手行业标杆企业，共创数字化未来"
        />
      </div>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-gray-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-gray-50 to-transparent" />

        <div className="flex animate-marquee">
          {doubled.map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="mx-6 flex h-20 w-48 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white px-6"
            >
              <span className="text-base font-semibold text-gray-400 whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
