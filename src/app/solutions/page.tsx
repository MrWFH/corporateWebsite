import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { IndustryTabs } from "@/components/solutions/IndustryTabs";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "解决方案",
  description:
    "TechVision 面向智慧金融、数字零售、智能制造、数字政务四大行业，提供端到端的定制化数字化解决方案，助力企业降本增效。",
  keywords: ["智慧金融", "数字零售", "智能制造", "数字政务", "行业解决方案", "数字化转型"],
  openGraph: {
    title: "行业解决方案 | TechVision",
    description:
      "深耕金融、零售、制造、政务四大行业，提供端到端数字化解决方案。",
  },
};

export default function SolutionsPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="section-padding gradient-bg-subtle">
        <div className="container-wide">
          <SectionTitle
            title="行业解决方案"
            subtitle="深耕行业场景，提供端到端的定制化数字化解决方案"
          />
          <IndustryTabs />
        </div>
      </section>
      <CTASection />
    </div>
  );
}
