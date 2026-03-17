import { HeroBanner } from "@/components/home/HeroBanner";
import { FeatureSection } from "@/components/home/FeatureSection";
import { DataStats } from "@/components/home/DataStats";
import { PartnerLogos } from "@/components/home/PartnerLogos";
import { CTASection } from "@/components/home/CTASection";

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
