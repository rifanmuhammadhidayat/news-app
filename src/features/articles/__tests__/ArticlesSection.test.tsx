
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ArticlesSection from "../components/ArticlesSection";
import type { SmallArticle, FeaturedArticle } from "../types/types";

// Mock child components
jest.mock("../components/sectionParts/SectionTitle", () => {
  return function MockSectionTitle({ title }: { title: string }) {
    return <h2 data-testid="section-title">{title}</h2>;
  };
});

jest.mock("../components/sectionParts/FeaturedArticlesList", () => {
  return function MockFeaturedArticlesList({ featuredArticle }: any) {
    return (
      <div data-testid="featured-articles-list">
        {featuredArticle.map((article: any) => (
          <div key={article.id} data-testid="featured-article-item">
            {article.title}
          </div>
        ))}
      </div>
    );
  };
});

jest.mock("../components/sectionParts/SmallArticlesList", () => {
  return function MockSmallArticlesList({ articles }: any) {
    return (
      <div data-testid="small-articles-list">
        {articles.map((article: any, index: number) => (
          <div key={index} data-testid="small-article-item" data-title={article.title}>
            {article.title}
          </div>
        ))}
      </div>
    );
  };
});

jest.mock("../components/sectionParts/MasonryArticlesList", () => {
  return function MockMasonryArticlesList({ columns }: any) {
    return (
      <div data-testid="masonry-articles-list">
        {columns.map((column: any, columnIndex: number) => (
          <div key={columnIndex} data-testid="masonry-column">
            {column.map((article: any, articleIndex: number) => (
              <div key={articleIndex} data-testid="masonry-article-item" data-title={article.title}>
                {article.title}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
});

describe("ArticlesSection", () => {
  const mockSmallArticles: SmallArticle[] = [
    { title: "Article 1", category: "Tech", date: "2024-01-01", image: undefined },
    { title: "Article 2", category: "Business", date: "2024-01-02", image: undefined },
    { title: "Article 3", category: "Sports", date: "2024-01-03", image: undefined },
    { title: "Article 4", category: "Health", date: "2024-01-04", image: undefined },
    { title: "Article 5", category: "Science", date: "2024-01-05", image: undefined },
    { title: "Article 6", category: "Politics", date: "2024-01-06", image: undefined },
    { title: "Article 7", category: "Culture", date: "2024-01-07", image: undefined },
  ];

  const mockFeaturedArticles: FeaturedArticle[] = [
    {
      id: "1",
      title: "Featured Article 1",
      category: "Featured",
      date: "2024-01-01",
      excerpt: "Featured excerpt 1",
      image: "image1.jpg",
    },
    {
      id: "2",
      title: "Featured Article 2",
      category: "Featured",
      date: "2024-01-02",
      excerpt: "Featured excerpt 2",
      image: "image2.jpg",
    },
  ];

  const mockOnArticleClick = jest.fn();
  const mockOnFeaturedArticleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Section Title Tests", () => {
    test("should display section title", () => {
      render(<ArticlesSection title="Test Section" articles={mockSmallArticles} layout="boxed" onArticleClick={mockOnArticleClick} />);

      expect(screen.getByTestId("section-title")).toBeInTheDocument();
      expect(screen.getByText("Test Section")).toBeInTheDocument();
    });

    test("should display different section titles", () => {
      const titles = ["Technology", "Business", "Sports"];

      titles.forEach((title) => {
        const { unmount } = render(<ArticlesSection title={title} articles={mockSmallArticles} layout="boxed" onArticleClick={mockOnArticleClick} />);

        expect(screen.getByText(title)).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe("SmallArticleCard Rendering Tests", () => {
    test("should render multiple SmallArticleCard components without image", () => {
      render(<ArticlesSection title="Test Section" articles={mockSmallArticles} layout="boxed" withImage={false} onArticleClick={mockOnArticleClick} />);

      expect(screen.getByTestId("small-articles-list")).toBeInTheDocument();
      expect(screen.getAllByTestId("small-article-item")).toHaveLength(6); // Default slice(0, 6)
    });

    test("should render articles with masonry layout when withImage is true", () => {
      render(<ArticlesSection title="Test Section" articles={mockSmallArticles} layout="boxed" withImage={true} onArticleClick={mockOnArticleClick} />);

      expect(screen.getByTestId("masonry-articles-list")).toBeInTheDocument();
      expect(screen.getAllByTestId("masonry-column")).toHaveLength(3); // 3 columns
    });

    test('should limit articles to 3 for "Top News" section', () => {
      render(<ArticlesSection title="Top News" articles={mockSmallArticles} layout="boxed" withImage={false} onArticleClick={mockOnArticleClick} />);

      expect(screen.getAllByTestId("small-article-item")).toHaveLength(3);
    });

    test("should limit articles to 6 for regular sections", () => {
      render(<ArticlesSection title="Regular Section" articles={mockSmallArticles} layout="boxed" withImage={false} onArticleClick={mockOnArticleClick} />);

      expect(screen.getAllByTestId("small-article-item")).toHaveLength(6);
    });
  });

  describe("FeaturedArticleCard Rendering Tests", () => {
    test("should render FeaturedArticleCard components", () => {
      render(<ArticlesSection title="Featured Section" featuredArticle={mockFeaturedArticles} articles={mockSmallArticles} layout="boxed" onFeaturedArticleClick={mockOnFeaturedArticleClick} />);

      expect(screen.getByTestId("featured-articles-list")).toBeInTheDocument();
      expect(screen.getAllByTestId("featured-article-item")).toHaveLength(2);
    });

    test('should not render featured articles for "Top News" section', () => {
      render(<ArticlesSection title="Top News" featuredArticle={mockFeaturedArticles} articles={mockSmallArticles} layout="boxed" onFeaturedArticleClick={mockOnFeaturedArticleClick} />);

      expect(screen.queryByTestId("featured-articles-list")).not.toBeInTheDocument();
    });

    test("should not render featured articles when not provided", () => {
      render(<ArticlesSection title="Regular Section" articles={mockSmallArticles} layout="boxed" onArticleClick={mockOnArticleClick} />);

      expect(screen.queryByTestId("featured-articles-list")).not.toBeInTheDocument();
    });
  });

  describe("Layout Props Tests", () => {
    test("should handle different layout props", () => {
      const layouts: Array<"boxed" | "underlined" | "none"> = ["boxed", "underlined", "none"];

      layouts.forEach((layout) => {
        const { unmount } = render(<ArticlesSection title="Test Section" articles={mockSmallArticles} layout={layout} withImage={false} onArticleClick={mockOnArticleClick} />);

        expect(screen.getByTestId("section-title")).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe("Data Handling Tests", () => {
    test("should handle articles with undefined images", () => {
      const articlesWithUndefinedImages: SmallArticle[] = [
        { title: "Article 1", category: "Tech", date: "2024-01-01", image: undefined },
        { title: "Article 2", category: "Business", date: "2024-01-02", image: undefined },
      ];

      render(<ArticlesSection title="Test Section" articles={articlesWithUndefinedImages} layout="boxed" withImage={false} onArticleClick={mockOnArticleClick} />);

      expect(screen.getAllByTestId("small-article-item")).toHaveLength(2);
      expect(screen.getByText("Article 1")).toBeInTheDocument();
      expect(screen.getByText("Article 2")).toBeInTheDocument();
    });

    test("should handle mix of articles with and without images", () => {
      const mixedArticles: SmallArticle[] = [
        { title: "Article with Image", category: "Tech", date: "2024-01-01", image: "image1.jpg" },
        { title: "Article without Image", category: "Business", date: "2024-01-02", image: undefined },
      ];

      render(<ArticlesSection title="Mixed Section" articles={mixedArticles} layout="boxed" withImage={true} onArticleClick={mockOnArticleClick} />);

      expect(screen.getByTestId("masonry-articles-list")).toBeInTheDocument();
      expect(screen.getAllByTestId("masonry-article-item")).toHaveLength(2);
    });

    test("should verify specific article titles are rendered", () => {
      render(<ArticlesSection title="Specific Articles" articles={mockSmallArticles.slice(0, 3)} layout="boxed" withImage={false} onArticleClick={mockOnArticleClick} />);

      expect(screen.getByText("Article 1")).toBeInTheDocument();
      expect(screen.getByText("Article 2")).toBeInTheDocument();
      expect(screen.getByText("Article 3")).toBeInTheDocument();
    });
  });

  describe("Edge Cases Tests", () => {
    test("should handle empty articles array", () => {
      render(<ArticlesSection title="Empty Section" articles={[]} layout="boxed" onArticleClick={mockOnArticleClick} />);

      expect(screen.getByTestId("section-title")).toBeInTheDocument();
      expect(screen.getByText("Empty Section")).toBeInTheDocument();
    });

    test("should handle undefined articles", () => {
      render(<ArticlesSection title="No Articles Section" layout="boxed" onArticleClick={mockOnArticleClick} />);

      expect(screen.getByTestId("section-title")).toBeInTheDocument();
      expect(screen.getByText("No Articles Section")).toBeInTheDocument();
    });

    test("should handle missing onClick handlers", () => {
      expect(() => {
        render(<ArticlesSection title="Test Section" articles={mockSmallArticles} featuredArticle={mockFeaturedArticles} layout="boxed" />);
      }).not.toThrow();
    });
  });
});
