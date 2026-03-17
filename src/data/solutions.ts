export interface SolutionPainPoint {
  title: string;
  description: string;
}

export interface Solution {
  id: string;
  industry: string;
  icon: string;
  title: string;
  description: string;
  painPoints: SolutionPainPoint[];
  values: string[];
  gradient: string;
}

export const SOLUTION_TABS = [
  { id: "finance", label: "智慧金融", icon: "Landmark" },
  { id: "retail", label: "数字零售", icon: "ShoppingBag" },
  { id: "manufacturing", label: "智能制造", icon: "Factory" },
  { id: "government", label: "数字政务", icon: "Building2" },
] as const;

export const SOLUTIONS: Solution[] = [
  {
    id: "finance",
    industry: "智慧金融",
    icon: "Landmark",
    title: "智慧金融解决方案",
    description:
      "面向银行、保险、证券等金融机构，提供智能风控、精准营销、智能客服等全栈解决方案，助力金融数字化转型。",
    painPoints: [
      {
        title: "风控效率低",
        description: "传统风控模型滞后，难以应对复杂多变的欺诈手段",
      },
      {
        title: "客户体验差",
        description: "服务流程繁琐，缺乏个性化触达和智能化服务能力",
      },
      {
        title: "数据孤岛多",
        description: "各业务系统数据割裂，无法形成统一的客户画像",
      },
    ],
    values: [
      "风控准确率提升 40%",
      "客户转化率提升 25%",
      "运营效率提升 60%",
      "合规风险降低 80%",
    ],
    gradient: "from-blue-600 to-indigo-500",
  },
  {
    id: "retail",
    industry: "数字零售",
    icon: "ShoppingBag",
    title: "数字零售解决方案",
    description:
      "为零售企业提供全渠道运营、智能供应链、会员精细化管理等数字化能力，驱动业务持续增长。",
    painPoints: [
      {
        title: "渠道分散",
        description: "线上线下渠道数据不通，难以形成一体化运营",
      },
      {
        title: "库存压力大",
        description: "供需预测不准，库存周转率低，资金占用严重",
      },
      {
        title: "会员粘性弱",
        description: "缺乏精准的会员运营手段，客户复购率持续走低",
      },
    ],
    values: [
      "全渠道 GMV 提升 35%",
      "库存周转率提升 50%",
      "会员复购率提升 30%",
      "运营成本降低 20%",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: "manufacturing",
    industry: "智能制造",
    icon: "Factory",
    title: "智能制造解决方案",
    description:
      "以工业互联网为核心，打通生产、质量、设备、供应链全价值链，推动制造业智能化升级。",
    painPoints: [
      {
        title: "生产不透明",
        description: "生产过程缺乏实时监控，问题发现和定位效率低",
      },
      {
        title: "质量波动大",
        description: "质检依赖人工经验，产品良率难以持续优化",
      },
      {
        title: "设备故障多",
        description: "被动式维护模式，设备非计划停机造成巨大损失",
      },
    ],
    values: [
      "产能利用率提升 30%",
      "产品良率提升至 99.5%",
      "设备停机时间减少 45%",
      "能耗降低 15%",
    ],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: "government",
    industry: "数字政务",
    icon: "Building2",
    title: "数字政务解决方案",
    description:
      "助力政府机构实现政务服务数字化、智能化，打造高效透明的服务型政府。",
    painPoints: [
      {
        title: "办事流程长",
        description: "群众办事需要多次跑腿，审批流程冗长且不透明",
      },
      {
        title: "数据共享难",
        description: "各部门系统独立建设，数据难以跨部门互通共享",
      },
      {
        title: "决策缺支撑",
        description: "海量政务数据未被有效利用，科学决策缺乏数据依据",
      },
    ],
    values: [
      "审批时效提升 70%",
      "群众满意度达 95%+",
      "数据共享率提升至 80%",
      "行政成本降低 40%",
    ],
    gradient: "from-teal-500 to-emerald-500",
  },
];
