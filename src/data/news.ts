export type NewsCategory = "company" | "industry" | "tech";

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: NewsCategory;
  featured?: boolean;
}

export const NEWS_CATEGORIES: { id: NewsCategory; label: string }[] = [
  { id: "company", label: "公司新闻" },
  { id: "industry", label: "行业资讯" },
  { id: "tech", label: "技术博客" },
];

export const NEWS_LIST: NewsItem[] = [
  {
    id: "1",
    title: "TechVision 发布新一代 AI 大模型平台，赋能千行百业智能化",
    summary:
      "在 2025 年度技术峰会上，TechVision 正式发布了全新的企业级 AI 大模型平台，支持多模态理解、智能生成和行业知识注入，为企业客户提供开箱即用的 AI 能力。",
    date: "2025-12-15",
    category: "company",
    featured: true,
  },
  {
    id: "2",
    title: "获评「年度最具创新力科技企业」，技术实力再获权威认可",
    summary:
      "在中国信息通信研究院主办的年度评选中，TechVision 凭借在云计算和人工智能领域的持续创新，荣获「年度最具创新力科技企业」称号。",
    date: "2025-11-28",
    category: "company",
  },
  {
    id: "3",
    title: "2026 年企业 AI 应用趋势：从概念验证到规模化落地",
    summary:
      "随着大模型技术的快速成熟，企业 AI 应用正从探索期步入深水区。本文深度分析了 2026 年企业 AI 的五大趋势。",
    date: "2025-11-20",
    category: "industry",
  },
  {
    id: "4",
    title: "深入理解 RAG 架构：构建企业级知识增强系统实践",
    summary:
      "检索增强生成（RAG）已成为企业 AI 应用的核心架构。本文分享了 TechVision 在构建大规模 RAG 系统中的技术选型与优化实践。",
    date: "2025-11-10",
    category: "tech",
  },
  {
    id: "5",
    title: "TechVision 云平台通过国家等保三级认证",
    summary:
      "近日，TechVision 云平台正式通过国家网络安全等级保护三级认证，标志着平台在安全合规方面达到了金融级标准。",
    date: "2025-10-25",
    category: "company",
  },
  {
    id: "6",
    title: "低代码平台如何重塑企业数字化开发模式",
    summary:
      "低代码开发正在改变传统的软件开发模式。我们探讨了低代码平台在企业级应用场景中的价值与边界。",
    date: "2025-10-18",
    category: "tech",
  },
  {
    id: "7",
    title: "数字零售行业报告：全渠道融合的下一个增长引擎",
    summary:
      "数字化已成为零售行业不可逆转的趋势。本报告深入分析了全渠道融合的关键技术路径和成功案例。",
    date: "2025-10-05",
    category: "industry",
  },
  {
    id: "8",
    title: "携手某大型国有银行，打造智能风控标杆项目",
    summary:
      "TechVision 与某大型国有银行达成战略合作，共建智能风控平台，实现贷前、贷中、贷后全流程智能化管控。",
    date: "2025-09-20",
    category: "company",
  },
  {
    id: "9",
    title: "微服务架构下的分布式事务实践与思考",
    summary:
      "在微服务架构中，分布式事务一直是技术难点。本文分享了我们在生产环境中解决分布式事务一致性问题的实战经验。",
    date: "2025-09-10",
    category: "tech",
  },
  {
    id: "10",
    title: "TechVision 成都研发中心正式启用，西南布局再进一步",
    summary:
      "TechVision 成都研发中心于近日正式投入运营，将重点承担 AI 算法研发和行业解决方案孵化工作，进一步完善全国研发网络布局。",
    date: "2025-08-28",
    category: "company",
  },
  {
    id: "11",
    title: "边缘计算与 IoT：下一代智能工厂的技术底座",
    summary:
      "随着工业 4.0 的深入推进，边缘计算正在成为智能工厂的核心基础设施。本文探讨了边缘计算在制造场景中的架构设计与落地实践。",
    date: "2025-08-15",
    category: "tech",
  },
  {
    id: "12",
    title: "2025 中国企业数字化转型白皮书发布",
    summary:
      "由 TechVision 联合多家研究机构编撰的《2025 中国企业数字化转型白皮书》正式发布，全面梳理了各行业数字化转型的现状、挑战与路径。",
    date: "2025-08-01",
    category: "industry",
  },
];
