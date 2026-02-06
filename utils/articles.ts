type Article = {
  id: number;
  title: string;
  intro: string;
  image_url: string;
  published_date: string;
  link: string;
};

export const articles: Article[] = [
  {
    id: 1,
    title:
      "A Journey of Deconstruction: From Religious Dogma to Independent Thought",
    intro:
      "The journey from religious certainty to skepticism is oftencomplex and deeply personal. It is shaped by one's upbringing,the boundaries imposed by doctrine, and, eventually, the courage to pursue independent inquiry. While early immersion in a religious system can provide a strong sense of identity, purpose, and community, the absence of space for critical questioning often becomes problematic. When individuals begin to encounter logical inconsistencies or unresolved theological tensions, faith—once unquestioned—can slowly give way to doubt.",
    image_url: "/images/deconstruction.jpg",
    published_date: "Dec 20, 2025",
    link: "/blog/article-1",
  },
  {
    id: 2,
    title: "Why I No Longer Believe in the God of the Bible.",
    intro:
      "Discussing the so called “God” is such a sensitive topic because it involves almost every aspect of any Christian's life, speaking negatively about him always triggers anger to most believers. Those who speak bad about “God” are often regarded as blasphemers, and it is said that sooner or later they will face the fury of the “God” whom they blaspheme. Some would take some extra step and pray for mercy for anyone who speak badly about “God” for they believe that they do that because they are out of their mind and “They don’t know what they are doing”. ",
    image_url: "/images/atheism.jpg",
    published_date: "Feb 6, 2026",
    link: "/blog/article-2",
  },
];
