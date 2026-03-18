import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "联系我们",
  description:
    "联系 元宇宙科技，获取定制化数字化转型解决方案。提供在线咨询、电话咨询、邮件联系等多种方式，专家团队 24 小时内响应。",
  keywords: ["联系元宇宙科技", "在线咨询", "数字化转型咨询", "企业合作"],
  openGraph: {
    title: "联系我们 | 元宇宙科技",
    description:
      "与 元宇宙科技 专家团队沟通，获取适合您企业的定制化解决方案。",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="section-padding gradient-bg-subtle">
        <div className="container-wide">
          <SectionTitle
            title="联系我们"
            subtitle="期待与您的交流，让我们一起探索数字化转型的无限可能"
          />

          <div className="grid gap-8 lg:grid-cols-3">
            <AnimateOnScroll direction="left" className="lg:col-span-2">
              <ContactForm />
            </AnimateOnScroll>
            <AnimateOnScroll direction="right">
              <ContactInfo />
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
