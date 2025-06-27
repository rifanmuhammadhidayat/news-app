import { useState, useEffect, useCallback } from "react";
import { newsService, type NewsAPIArticle } from "../services/newsService";
import { convertToSmallArticle, convertToFeaturedArticle } from "../utils/converters";

export interface UseNewsState {
  data: NewsAPIArticle[];
  loading: boolean;
  error: string | null;
  totalResults: number;
}

export interface UseNewsReturn extends UseNewsState {
  refetch: () => Promise<void>;
  clearError: () => void;
}

export const useTopHeadlines = (country: string = "us", pageSize: number = 20): UseNewsReturn => {
  const [state, setState] = useState<UseNewsState>({
    data: [],
    loading: true,
    error: null,
    totalResults: 0,
  });

  const fetchData = useCallback(async () => {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }));
      const response = await newsService.getTopHeadlines(country, pageSize);
      setState({
        data: response.articles,
        loading: false,
        error: null,
        totalResults: response.totalResults,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to fetch top headlines";
      setState((prev) => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }));
    }
  }, [country, pageSize]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  return {
    ...state,
    refetch: fetchData,
    clearError,
  };
};

export const useHeadlinesByCategory = (category: string, country: string = "us", pageSize: number = 20): UseNewsReturn => {
  const [state, setState] = useState<UseNewsState>({
    data: [],
    loading: true,
    error: null,
    totalResults: 0,
  });

  const fetchData = useCallback(async () => {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }));
      const response = await newsService.getHeadlinesByCategory(category, country, pageSize);
      setState({
        data: response.articles,
        loading: false,
        error: null,
        totalResults: response.totalResults,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : `Failed to fetch ${category} headlines`;
      setState((prev) => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }));
    }
  }, [category, country, pageSize]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  return {
    ...state,
    refetch: fetchData,
    clearError,
  };
};

export const useEverything = (query: string, pageSize: number = 20): UseNewsReturn => {
  const [state, setState] = useState<UseNewsState>({
    data: [],
    loading: false,
    error: null,
    totalResults: 0,
  });

  const fetchData = useCallback(async () => {
    if (!query.trim()) {
      setState({
        data: [],
        loading: false,
        error: null,
        totalResults: 0,
      });
      return;
    }

    try {
      setState((prev) => ({ ...prev, loading: true, error: null }));
      const response = await newsService.getEverything(query, pageSize);
      setState({
        data: response.articles,
        loading: false,
        error: null,
        totalResults: response.totalResults,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : `Failed to search for ${query}`;
      setState((prev) => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }));
    }
  }, [query, pageSize]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  return {
    ...state,
    refetch: fetchData,
    clearError,
  };
};

export const useMultipleCategories = () => {
  const topNews = useTopHeadlines("us", 10);
  const businessNews = useHeadlinesByCategory("business", "us", 6);
  const techNews = useHeadlinesByCategory("technology", "us", 6);
  const sportsNews = useHeadlinesByCategory("sports", "us", 6);
  const healthNews = useHeadlinesByCategory("health", "us", 6);
  const scienceNews = useHeadlinesByCategory("science", "us", 6);
  const entertainmentNews = useHeadlinesByCategory("entertainment", "us", 6);
  const generalNews = useHeadlinesByCategory("general", "us", 6);

  const refetchAll = useCallback(() => {
    topNews.refetch();
    businessNews.refetch();
    techNews.refetch();
    sportsNews.refetch();
    healthNews.refetch();
    scienceNews.refetch();
    entertainmentNews.refetch();
    generalNews.refetch();
  }, [topNews, businessNews, techNews, sportsNews, healthNews, scienceNews, entertainmentNews, generalNews]);

  const isLoading = topNews.loading || businessNews.loading || techNews.loading || sportsNews.loading || healthNews.loading || scienceNews.loading || entertainmentNews.loading || generalNews.loading;

  const error = topNews.error || businessNews.error || techNews.error || sportsNews.error || healthNews.error || scienceNews.error || entertainmentNews.error || generalNews.error;

  return {
    topNews: {
      ...topNews,
      articles: topNews.data.map(convertToSmallArticle),
      featuredArticle: scienceNews.data.slice(0, 3).map(convertToFeaturedArticle),
    },
    businessNews: {
      ...businessNews,
      articles: businessNews.data.map(convertToSmallArticle),
      featuredArticle: businessNews.data.slice(0, 3).map(convertToFeaturedArticle),
    },
    techNews: {
      ...techNews,
      articles: techNews.data.map(convertToSmallArticle),
      featuredArticle: techNews.data.slice(0, 3).map(convertToFeaturedArticle),
    },
    sportsNews: {
      ...sportsNews,
      articles: sportsNews.data.map(convertToSmallArticle),
      featuredArticle: scienceNews.data.slice(0, 3).map(convertToFeaturedArticle),
    },
    healthNews: {
      ...healthNews,
      articles: healthNews.data.map(convertToSmallArticle),
      featuredArticle: healthNews.data.slice(0, 3).map(convertToFeaturedArticle),
    },
    scienceNews: {
      ...scienceNews,
      articles: scienceNews.data.map(convertToSmallArticle),
      featuredArticle: scienceNews.data.slice(0, 3).map(convertToFeaturedArticle),
    },
    entertainmentNews: {
      ...entertainmentNews,
      articles: entertainmentNews.data.map(convertToSmallArticle),
      featuredArticle: scienceNews.data.slice(0, 3).map(convertToFeaturedArticle),
    },
    generalNews: {
      ...generalNews,
      articles: generalNews.data.map(convertToSmallArticle),
      featuredArticle: scienceNews.data.slice(0, 3).map(convertToFeaturedArticle),
    },
    loading: isLoading,
    error,
    refetchAll,
  };
};
