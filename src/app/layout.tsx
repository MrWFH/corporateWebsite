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
    "元宇宙科技 是一家专注于人工智能、云计算和大数据技术的创新型科技企业，为企业提供全方位数字化转型解决方案。",
  keywords: [
    "元宇宙科技",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: SITE_NAME,
      alternateName: "元宇宙科技 科技",
      url: SITE_URL,
    },
    {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "专注于人工智能、云计算和大数据技术的创新型科技企业，为企业提供全方位数字化转型解决方案。",
      foundingDate: "2015",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+86-400-888-9999",
        contactType: "customer service",
        availableLanguage: "Chinese",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="google-site-verification" content="uZjsVoMUIm74DBNBw7JXOCJ4mk8AMicw-CtY-K9PxEE" />
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
