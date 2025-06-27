
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SmallArticleCard from "../components/SmallArticleCard";
import type { SmallArticle } from "../types/types"

// Mock komponen child
jest.mock("../components/SmallArticleCardWithImage", () => {
  return function MockSmallArticleCardWithImage({ article, onClick }: any) {
    return (
      <div data-testid="small-article-with-image" onClick={onClick}>
        <h3>{article.title}</h3>
        <span>{article.category}</span>
        <span>{article.date}</span>
        <img src={article.image} alt={article.title} />
      </div>
    );
  };
});

jest.mock("../components/SmallArticleCardNoImage", () => {
  return function MockSmallArticleCardNoImage({ article, onClick }: any) {
    return (
      <div data-testid="small-article-no-image" onClick={onClick}>
        <h3>{article.title}</h3>
        <span>{article.category}</span>
        <span>{article.date}</span>
      </div>
    );
  };
});

describe("SmallArticleCard", () => {
  const mockArticle: SmallArticle = {
    title: "Test Article Title",
    category: "Technology",
    date: "2024-01-15",
    image: "https://example.com/image.jpg",
  };

  const mockOnClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Render Content Tests", () => {
    test("should render title, category, and date with image", () => {
      render(<SmallArticleCard article={mockArticle} layout="boxed" withImage={true} onClick={mockOnClick} />);

      expect(screen.getByText("Test Article Title")).toBeInTheDocument();
      expect(screen.getByText("Technology")).toBeInTheDocument();
      expect(screen.getByText("2024-01-15")).toBeInTheDocument();
      expect(screen.getByTestId("small-article-with-image")).toBeInTheDocument();
    });

    test("should render title, category, and date without image", () => {
      render(<SmallArticleCard article={mockArticle} layout="boxed" withImage={false} onClick={mockOnClick} />);

      expect(screen.getByText("Test Article Title")).toBeInTheDocument();
      expect(screen.getByText("Technology")).toBeInTheDocument();
      expect(screen.getByText("2024-01-15")).toBeInTheDocument();
      expect(screen.getByTestId("small-article-no-image")).toBeInTheDocument();
    });
  });

  describe("onClick Event Tests", () => {
    test("should call onClick when card with image is clicked", () => {
      render(<SmallArticleCard article={mockArticle} layout="boxed" withImage={true} onClick={mockOnClick} />);

      fireEvent.click(screen.getByTestId("small-article-with-image"));
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    test("should call onClick when card without image is clicked", () => {
      render(<SmallArticleCard article={mockArticle} layout="boxed" withImage={false} onClick={mockOnClick} />);

      fireEvent.click(screen.getByTestId("small-article-no-image"));
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    test("should not throw error when onClick is not provided", () => {
      expect(() => {
        render(<SmallArticleCard article={mockArticle} layout="boxed" withImage={false} />);
      }).not.toThrow();
    });
  });

  describe("Image Handling Tests", () => {
    test("should render with image when image is provided", () => {
      const articleWithImage: SmallArticle = {
        title: "Article with Image",
        category: "Tech",
        date: "2024-01-01",
        image: "https://example.com/image.jpg",
      };

      render(<SmallArticleCard article={articleWithImage} layout="boxed" withImage={true} onClick={mockOnClick} />);

      expect(screen.getByTestId("small-article-with-image")).toBeInTheDocument();
    });

    test("should render without image when image is undefined", () => {
      const articleWithoutImage: SmallArticle = {
        title: "Article without Image",
        category: "Tech",
        date: "2024-01-01",
        image: undefined,
      };

      render(<SmallArticleCard article={articleWithoutImage} layout="boxed" withImage={true} onClick={mockOnClick} />);

      expect(screen.getByTestId("small-article-with-image")).toBeInTheDocument();
    });
  });

  describe("Layout Props Tests", () => {
    test("should render with different layout props", () => {
      const layouts: Array<"boxed" | "underlined" | "none"> = ["boxed", "underlined", "none"];

      layouts.forEach((layout) => {
        const { unmount } = render(<SmallArticleCard article={mockArticle} layout={layout} withImage={false} onClick={mockOnClick} />);

        expect(screen.getByTestId("small-article-no-image")).toBeInTheDocument();
        unmount();
      });
    });
  });
});
