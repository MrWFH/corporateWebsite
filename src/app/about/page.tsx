import type { Metadata } from "next";
import { CompanyIntro } from "@/components/about/CompanyIntro";
import { Timeline } from "@/components/about/Timeline";
import { CultureValues } from "@/components/about/CultureValues";
import { TeamSection } from "@/components/about/TeamSection";

export const metadata: Metadata = { title: "关于我们" };

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
