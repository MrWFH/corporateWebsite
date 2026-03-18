import type { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - ${SITE_DESCRIPTION}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "TechVision 是一家专注于人工智能、云计算和大数据技术的创新型科技企业，为企业提供全方位数字化转型解决方案。",
  keywords: [
    "TechVision",
    "人工智能",
    "云计算",
    "大数据",
    "数字化转型",
    "企业官网",
    "解决方案",
    "智慧金融",
    "智能制造",
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - ${SITE_DESCRIPTION}`,
    description:
      "专注于人工智能、云计算和大数据技术，为企业提供全方位数字化转型解决方案。",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - ${SITE_DESCRIPTION}`,
    description:
      "专注于人工智能、云计算和大数据技术，为企业提供全方位数字化转型解决方案。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="canonical" href={SITE_URL} />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
