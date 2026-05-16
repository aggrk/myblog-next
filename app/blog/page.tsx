import { articles } from "@/utils/articles";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-8 py-16">
      <div
        className="grid gap-px bg-textsecondary/10"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
      >
        {articles.map((article) => (
          <article
            key={article.id}
            className="bg-bgcolor group flex flex-col transition-colors duration-200 hover:bg-alt"
          >
            <Link
              href={article.link}
              className="relative block h-48 overflow-hidden"
            >
              <Image
                src={article.image_url}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-bgcolor/50 to-transparent" />
            </Link>

            <div className="flex flex-col flex-1 p-6 gap-3 relative">
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <p className="text-[0.6rem] uppercase tracking-[0.15em] text-textcolor/30">
                {article.published_date}
              </p>

              <Link href={article.link}>
                <h2 className="serif text-textsecondary text-base sm:text-lg font-bold leading-snug hover:text-textcolor transition-colors duration-200">
                  {article.title}
                </h2>
              </Link>

              <p className="text-textcolor/45 text-sm leading-relaxed line-clamp-3 flex-1">
                {article.intro}
              </p>

              <Link
                href={article.link}
                className="mt-auto pt-4 border-t border-textsecondary/10 text-[0.65rem] uppercase tracking-[0.12em] text-gold flex items-center gap-1.5 w-fit hover:gap-2.5 transition-all duration-200"
              >
                Read →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
