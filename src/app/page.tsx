import type { Metadata } from "next";
import { HeroBanner } from "@/components/home/HeroBanner";
import { FeatureSection } from "@/components/home/FeatureSection";
import { DataStats } from "@/components/home/DataStats";
import { PartnerLogos } from "@/components/home/PartnerLogos";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "TechVision - 以技术驱动创新，用智慧连接未来",
  description:
    "TechVision 是一家专注于人工智能、云计算和大数据技术的创新型科技企业，为 500+ 企业客户提供云平台、数据中台、AI 引擎等全方位数字化转型解决方案。",
  keywords: [
    "TechVision",
    "人工智能",
    "云计算",
    "大数据",
    "数字化转型",
    "企业级解决方案",
  ],
  openGraph: {
    title: "TechVision - 以技术驱动创新，用智慧连接未来",
    description:
      "专注于人工智能、云计算和大数据技术，为企业提供全方位数字化转型解决方案。",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <FeatureSection />
      <DataStats />
      <PartnerLogos />
      <CTASection />
    </>
  );
}
