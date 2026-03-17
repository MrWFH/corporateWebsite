import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = { title: "联系我们" };

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
