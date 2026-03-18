export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface CultureValue {
  icon: string;
  title: string;
  description: string;
}

export const COMPANY_INTRO = {
  title: "关于 元宇宙科技",
  subtitle: "以技术驱动创新，用智慧连接未来",
  description:
    "元宇宙科技 成立于 2015 年，是一家专注于人工智能、云计算和大数据技术的创新型科技企业。我们致力于为企业提供全方位的数字化转型解决方案，帮助客户在数字经济时代实现业务增长和价值创造。经过多年发展，我们已服务超过 500 家企业客户，覆盖金融、零售、制造、政务等多个行业领域。",
  highlights: [
    { label: "成立时间", value: "2015 年" },
    { label: "员工规模", value: "800+" },
    { label: "服务客户", value: "500+" },
    { label: "技术专利", value: "120+" },
  ],
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "2015",
    title: "公司成立",
    description: "元宇宙科技 在武汉光谷正式成立，聚焦大数据技术研发",
  },
  {
    year: "2017",
    title: "A 轮融资",
    description: "获得知名风投 5000 万元 A 轮融资，团队扩展至 100 人",
  },
  {
    year: "2019",
    title: "产品矩阵成型",
    description: "推出云平台、数据中台、AI 平台三大核心产品线",
  },
  {
    year: "2021",
    title: "行业突破",
    description: "成功服务 200+ 家企业客户，进入金融和政务核心领域",
  },
  {
    year: "2023",
    title: "全国布局",
    description: "在上海、深圳、成都设立分公司，服务覆盖全国",
  },
  {
    year: "2025",
    title: "AI 战略升级",
    description: "发布新一代 AI 大模型平台，引领企业智能化转型",
  },
];

export const CULTURE_VALUES: CultureValue[] = [
  {
    icon: "Lightbulb",
    title: "创新",
    description: "持续探索前沿技术，以创新思维解决复杂问题，推动行业进步",
  },
  {
    icon: "Users",
    title: "协作",
    description: "开放包容的团队文化，跨部门紧密协作，凝聚集体智慧",
  },
  {
    icon: "Target",
    title: "专注",
    description: "深耕技术领域，专注产品打磨，以匠心精神交付卓越成果",
  },
  {
    icon: "Handshake",
    title: "共赢",
    description: "与客户、合作伙伴携手共进，共创价值，实现多方共赢",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "张明远",
    role: "创始人 & CEO",
    bio: "前 BAT 技术总监，15 年互联网从业经验，专注于企业数字化转型领域",
    avatar: "/team/ceo.jpg",
  },
  {
    name: "李思雨",
    role: "CTO",
    bio: "博士学位，人工智能领域专家，曾主导多个国家级科研项目",
    avatar: "/team/cto.jpg",
  },
  {
    name: "王浩然",
    role: "产品副总裁",
    bio: "10 年产品管理经验，擅长 B 端产品规划与商业化落地",
    avatar: "/team/vp-product.jpg",
  },
  {
    name: "陈晓琳",
    role: "市场副总裁",
    bio: "深耕科技行业市场营销，成功推动多个品牌从 0 到 1 的增长",
    avatar: "/team/vp-marketing.jpg",
  },
];
