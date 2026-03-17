import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { NewsList } from "@/components/news/NewsList";

export const metadata: Metadata = { title: "新闻动态" };

export default function NewsPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="section-padding gradient-bg-subtle">
        <div className="container-wide">
          <SectionTitle
            title="新闻动态"
            subtitle="了解 TechVision 最新资讯、行业洞察与技术分享"
          />
          <NewsList />
        </div>
      </section>
    </div>
  );
}
