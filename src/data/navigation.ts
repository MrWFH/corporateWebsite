export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "首页", href: "/" },
  { label: "关于我们", href: "/about" },
  { label: "产品服务", href: "/products" },
  { label: "解决方案", href: "/solutions" },
  { label: "新闻动态", href: "/news" },
  { label: "联系我们", href: "/contact" },
];
