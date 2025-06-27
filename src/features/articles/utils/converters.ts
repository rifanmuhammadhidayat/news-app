import type { NewsAPIArticle } from "../services/newsService";
import type { SmallArticle, FeaturedArticle, FullArticle } from "../types/types";

export const convertToSmallArticle = (article: NewsAPIArticle): SmallArticle => ({
  image: article.urlToImage || "",
  title: article.title || "No title available",
  category: article.source?.name || "General",
  date: new Date(article.publishedAt).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
  
});

export const convertToFeaturedArticle = (article: NewsAPIArticle): FeaturedArticle => ({
  id: article.url,
  title: article.title || "No title available",
  image: article.urlToImage || "",
  category: article.source?.name || "General",
  date: new Date(article.publishedAt).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
  excerpt: article.description || article.content?.substring(0, 200) + "..." || "No description available",
  
});

export const convertToFullArticle = (article: NewsAPIArticle): FullArticle => ({
  source: article.source,
  author: article.author,
  title: article.title,
  description: article.description,
  url: article.url,
  urlToImage: article.urlToImage,
  publishedAt: article.publishedAt,
  content: article.content,
});