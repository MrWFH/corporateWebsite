import { Flame, ArrowRight } from "lucide-react";
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

const categoryGradients: Record<string, string> = {
  company: "from-blue-500 via-indigo-500 to-violet-500",
  industry: "from-amber-400 via-orange-500 to-rose-500",
  tech: "from-emerald-400 via-teal-500 to-cyan-500",
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
        <div className="grid md:grid-cols-5">
          <div
            className={`relative flex flex-col justify-between bg-gradient-to-br ${categoryGradients[item.category]} p-6 md:col-span-2 md:p-8`}
          >
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                <Flame size={14} />
                置顶推荐
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/80 hidden md:block">
                {item.summary.slice(0, 60)}...
              </p>
            </div>
            <div className="mt-6 text-xs text-white/60">{item.date}</div>

            <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-white/10" />
            <div className="absolute -top-6 -left-6 h-20 w-20 rounded-full bg-white/10" />
          </div>

          <div className="flex flex-col justify-center p-6 md:col-span-3 md:p-8">
            <div className="flex items-center gap-3">
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-medium ring-1 ${categoryColors[item.category]}`}
              >
                {categoryLabels[item.category]}
              </span>
              <time className="text-sm text-gray-400 md:hidden">
                {item.date}
              </time>
            </div>
            <h3 className="mt-3 text-xl font-bold text-gray-900 lg:text-2xl group-hover:text-primary-600 transition-colors">
              {item.title}
            </h3>
            <p className="mt-3 text-base text-gray-500 leading-relaxed">
              {item.summary}
            </p>
            <div className="mt-4">
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:gap-2 transition-all">
                阅读全文
                <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group overflow-hidden rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div
        className={`h-2 bg-gradient-to-r ${categoryGradients[item.category]}`}
      />
      <div className="p-5">
        <div className="flex items-center gap-3">
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-medium ring-1 ${categoryColors[item.category]}`}
          >
            {categoryLabels[item.category]}
          </span>
          <time className="text-sm text-gray-400">{item.date}</time>
        </div>
        <h3 className="mt-3 text-base font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
          {item.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
          {item.summary}
        </p>
        <div className="mt-3">
          <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
            阅读全文
            <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </div>
  );
}
