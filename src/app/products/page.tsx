import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductList } from "@/components/products/ProductList";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = { title: "产品服务" };

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
