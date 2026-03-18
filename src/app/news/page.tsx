import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { NewsList } from "@/components/news/NewsList";

export const metadata: Metadata = {
  title: "新闻动态",
  description:
    "获取 元宇宙科技 最新公司新闻、行业资讯与技术博客，了解人工智能、云计算领域的前沿动态与实践分享。",
  keywords: ["公司新闻", "行业资讯", "技术博客", "AI动态", "云计算资讯"],
  openGraph: {
    title: "新闻动态 | 元宇宙科技",
    description:
      "元宇宙科技 最新资讯、行业洞察与技术分享。",
  },
};

export default function NewsPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="section-padding gradient-bg-subtle">
        <div className="container-wide">
          <SectionTitle
            title="新闻动态"
            subtitle="了解 元宇宙科技 最新资讯、行业洞察与技术分享"
          />
          <NewsList />
        </div>
      </section>
    </div>
  );
}
