export type SmallArticle = {
  image: string | undefined;
  title: string;
  category: string;
  date: string;
};
export type FeaturedArticle = {
  id: string;
  title: string;
  image: string;
  category: string;
  date: string;
  excerpt: string;
};

export type FullArticle = {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};
