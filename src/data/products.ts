export interface Product {
  id: string;
  icon: string;
  name: string;
  description: string;
  features: string[];
  gradient: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "cloud-platform",
    icon: "Cloud",
    name: "元宇宙科技 云平台",
    description:
      "企业级云基础设施平台，提供弹性计算、存储、网络等全栈云服务，助力企业快速上云。",
    features: ["弹性伸缩", "高可用架构", "多云管理", "安全合规"],
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    id: "data-platform",
    icon: "Database",
    name: "智能数据中台",
    description:
      "一站式数据管理平台，涵盖数据采集、治理、分析、可视化全链路，释放数据价值。",
    features: ["实时数据处理", "智能数据治理", "可视化分析", "数据资产管理"],
    gradient: "from-violet-500 to-purple-400",
  },
  {
    id: "ai-engine",
    icon: "Brain",
    name: "AI 智能引擎",
    description:
      "基于自研大模型的 AI 平台，提供自然语言处理、计算机视觉、智能决策等核心能力。",
    features: ["大模型服务", "NLP 引擎", "视觉识别", "智能推荐"],
    gradient: "from-pink-500 to-rose-400",
  },
  {
    id: "iot-platform",
    icon: "Cpu",
    name: "IoT 物联平台",
    description:
      "万物互联管理平台，支持海量设备接入与管理，构建智能物联应用生态。",
    features: ["设备管理", "边缘计算", "数字孪生", "场景联动"],
    gradient: "from-amber-500 to-orange-400",
  },
  {
    id: "security-suite",
    icon: "Shield",
    name: "安全防护套件",
    description:
      "全方位网络安全解决方案，保护企业数据资产安全，防御各类网络威胁。",
    features: ["威胁检测", "漏洞扫描", "数据加密", "合规审计"],
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    id: "low-code",
    icon: "Blocks",
    name: "低代码开发平台",
    description:
      "可视化应用搭建平台，拖拽式开发，让业务人员也能快速构建企业应用。",
    features: ["可视化搭建", "组件市场", "流程引擎", "多端发布"],
    gradient: "from-indigo-500 to-blue-400",
  },
];
