import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  SITE_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_ADDRESS,
} from "@/lib/constants";

const footerLinks = [
  {
    title: "产品服务",
    links: [
      { label: "云平台", href: "/products" },
      { label: "数据中台", href: "/products" },
      { label: "AI 智能引擎", href: "/products" },
      { label: "IoT 物联平台", href: "/products" },
    ],
  },
  {
    title: "解决方案",
    links: [
      { label: "智慧金融", href: "/solutions" },
      { label: "数字零售", href: "/solutions" },
      { label: "智能制造", href: "/solutions" },
      { label: "数字政务", href: "/solutions" },
    ],
  },
  {
    title: "关于我们",
    links: [
      { label: "公司介绍", href: "/about" },
      { label: "新闻动态", href: "/news" },
      { label: "加入我们", href: "/contact" },
      { label: "联系我们", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="container-wide section-padding !py-12 lg:!py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-bg">
                <span className="text-lg font-bold text-white">T</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
              以技术驱动创新，用智慧连接未来。专注于人工智能、云计算和大数据技术，为企业提供全方位数字化转型解决方案。
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Phone size={16} className="text-primary-500" />
                <span>{CONTACT_PHONE}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Mail size={16} className="text-primary-500" />
                <span>{CONTACT_EMAIL}</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-500">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary-500" />
                <span>{CONTACT_ADDRESS}</span>
              </div>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-gray-900">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
