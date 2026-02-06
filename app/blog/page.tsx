import { articles } from "@/utils/articles";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl sm:max-w-5xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {articles.map((article) => {
          return (
            <div
              key={article.id}
              className="bg-alt rounded-2xl border border-white/10 shadow-xl overflow-hidden transition hover:shadow-2xl"
            >
              <div className="p-4 pb-0">
                <Link href={article.link}>
                  <div className="relative w-full h-52">
                    <Image
                      src={article.image_url}
                      alt="Article cover"
                      fill
                      className="object-cover rounded-xl cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </Link>
              </div>

              <div className="p-6 pt-4 space-y-3">
                <p className="text-textsecondary text-xs">
                  Published • {article.published_date}
                </p>

                <Link href={article.link}>
                  <h2 className="text-lg font-semibold text-textcolor hover:text-[#A1CAFC] transition-colors">
                    {article.title}
                  </h2>
                </Link>

                <p className="text-textcolor/80 leading-relaxed text-sm line-clamp-4 mt-2">
                  {article.intro}
                </p>

                <Link
                  href={article.link}
                  className="inline-block text-[#A1CAFC] font-medium text-sm"
                >
                  Read →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
