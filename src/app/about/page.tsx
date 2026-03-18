import type { Metadata } from "next";
import { CompanyIntro } from "@/components/about/CompanyIntro";
import { Timeline } from "@/components/about/Timeline";
import { CultureValues } from "@/components/about/CultureValues";
import { TeamSection } from "@/components/about/TeamSection";

export const metadata: Metadata = {
  title: "关于我们",
  description:
    "了解 TechVision 的发展历程、企业文化、核心团队与价值观。成立于 2015 年，专注人工智能与云计算领域，已服务超过 500 家企业客户。",
  keywords: ["关于TechVision", "企业介绍", "发展历程", "核心团队", "企业文化"],
  openGraph: {
    title: "关于我们 | TechVision",
    description:
      "了解 TechVision 的发展历程、企业文化与核心团队，一家专注 AI 与云计算的创新型科技企业。",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <CompanyIntro />
      <Timeline />
      <CultureValues />
      <TeamSection />
    </div>
  );
}
