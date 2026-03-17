import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <AnimateOnScroll>
          <div className="relative overflow-hidden rounded-3xl gradient-bg px-6 py-16 text-center sm:px-12 lg:px-20 lg:py-24">
            <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-white/10 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/10 translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                准备好开启数字化转型了吗？
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                与我们的专家团队沟通，获取适合您企业的定制化解决方案
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="!border-white !text-white hover:!bg-white/10"
                >
                  立即咨询
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button
                  href="/solutions"
                  variant="ghost"
                  size="lg"
                  className="!text-white/90 hover:!text-white hover:!bg-white/10"
                >
                  查看方案
                </Button>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
