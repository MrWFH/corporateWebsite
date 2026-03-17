import type { NewsItem } from "@/data/news";

const categoryColors: Record<string, string> = {
  company: "bg-blue-50 text-blue-600 ring-blue-100",
  industry: "bg-amber-50 text-amber-600 ring-amber-100",
  tech: "bg-emerald-50 text-emerald-600 ring-emerald-100",
};

const categoryLabels: Record<string, string> = {
  company: "公司新闻",
  industry: "行业资讯",
  tech: "技术博客",
};

export function NewsCard({
  item,
  featured = false,
}: {
  item: NewsItem;
  featured?: boolean;
}) {
  if (featured) {
    return (
      <div className="group overflow-hidden rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="aspect-[21/9] bg-gradient-to-br from-primary-100 via-accent-400/10 to-primary-50 flex items-center justify-center">
          <div className="rounded-2xl gradient-bg px-6 py-3">
            <span className="text-lg font-bold text-white">Featured</span>
          </div>
        </div>
        <div className="p-6 lg:p-8">
          <div className="flex items-center gap-3">
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-medium ring-1 ${categoryColors[item.category]}`}
            >
              {categoryLabels[item.category]}
            </span>
            <time className="text-sm text-gray-400">{item.date}</time>
          </div>
          <h3 className="mt-3 text-xl font-bold text-gray-900 lg:text-2xl group-hover:text-primary-600 transition-colors">
            {item.title}
          </h3>
          <p className="mt-2 text-base text-gray-500 leading-relaxed">
            {item.summary}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="group overflow-hidden rounded-2xl bg-white border border-gray-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center gap-3">
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-medium ring-1 ${categoryColors[item.category]}`}
        >
          {categoryLabels[item.category]}
        </span>
        <time className="text-sm text-gray-400">{item.date}</time>
      </div>
      <h3 className="mt-3 text-base font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
        {item.title}
      </h3>
      <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
        {item.summary}
      </p>
    </div>
  );
}
