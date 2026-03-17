"use client";

import { Cloud, Brain, Shield, Zap } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionTitle } from "@/components/ui/SectionTitle";

const features = [
  {
    icon: Cloud,
    title: "云原生架构",
    description: "基于云原生技术栈构建，弹性伸缩，高可用，支持混合云和多云部署方案",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Brain,
    title: "AI 智能引擎",
    description: "自研大模型驱动，覆盖 NLP、CV、推荐等场景，为业务注入智能化能力",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Shield,
    title: "安全合规",
    description: "通过等保三级认证，端到端数据加密，满足金融级安全合规要求",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Zap,
    title: "极致性能",
    description: "毫秒级响应，百万级并发，保障业务高峰期的稳定运行和极致体验",
    gradient: "from-amber-500 to-orange-400",
  },
];

export function FeatureSection() {
  return (
    <section className="section-padding gradient-bg-subtle">
      <div className="container-wide">
        <SectionTitle
          title="核心技术能力"
          subtitle="用领先的技术实力，为企业数字化转型保驾护航"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <AnimateOnScroll key={feature.title} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}
                >
                  <feature.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {feature.description}
                </p>
                <div
                  className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${feature.gradient} scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}
                />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
