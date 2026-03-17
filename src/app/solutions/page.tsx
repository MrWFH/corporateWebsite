import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { IndustryTabs } from "@/components/solutions/IndustryTabs";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = { title: "解决方案" };

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
