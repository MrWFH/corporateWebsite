import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductList } from "@/components/products/ProductList";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "产品服务",
  description:
    "元宇宙科技 全栈技术产品矩阵：云平台、智能数据中台、AI 智能引擎、IoT 物联平台、安全防护套件、低代码开发平台，为企业数字化转型提供坚实底座。",
  keywords: ["云平台", "数据中台", "AI引擎", "IoT物联", "低代码平台", "企业级产品"],
  openGraph: {
    title: "产品服务 | 元宇宙科技",
    description:
      "全栈技术产品矩阵，覆盖云计算、大数据、人工智能、物联网等核心领域。",
  },
};

export default function ProductsPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="section-padding gradient-bg-subtle">
        <div className="container-wide">
          <SectionTitle
            title="产品服务"
            subtitle="全栈技术产品矩阵，为企业数字化转型提供坚实底座"
          />
          <ProductList />
        </div>
      </section>
      <CTASection />
    </div>
  );
}
