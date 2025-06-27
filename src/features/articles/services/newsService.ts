
export interface NewsAPIArticle {
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
}

export interface NewsAPIResponse {
  status: string;
  totalResults: number;
  articles: NewsAPIArticle[];
}

export interface NewsServiceError {
  message: string;
  status?: number;
}

class NewsService {
  private readonly baseURL = "https://newsapi.org/v2";
  private readonly apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async fetchFromAPI(endpoint: string): Promise<NewsAPIResponse> {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        headers: {
          "X-API-Key": this.apiKey,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: NewsAPIResponse = await response.json();

      if (data.status !== "ok") {
        throw new Error(`API error: ${data.status}`);
      }

      return data;
    } catch (error) {
      console.error("News API fetch error:", error);
      throw error instanceof Error ? error : new Error("Unknown error occurred while fetching news");
    }
  }

  async getTopHeadlines(country: string = "us", pageSize: number = 20): Promise<NewsAPIResponse> {
    return this.fetchFromAPI(`/top-headlines?country=${country}&pageSize=${pageSize}`);
  }

  async getHeadlinesByCategory(category: string, country: string = "us", pageSize: number = 20): Promise<NewsAPIResponse> {
    return this.fetchFromAPI(`/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}`);
  }

  async getEverything(query: string, pageSize: number = 20): Promise<NewsAPIResponse> {
    return this.fetchFromAPI(`/everything?q=${encodeURIComponent(query)}&pageSize=${pageSize}&sortBy=publishedAt`);
  }

  async getHeadlinesBySource(source: string, pageSize: number = 20): Promise<NewsAPIResponse> {
    return this.fetchFromAPI(`/top-headlines?sources=${source}&pageSize=${pageSize}`);
  }
}


const API_KEY = import.meta.env.VITE_NEWS_API_KEY 

export const newsService = new NewsService(API_KEY);

export default NewsService;
