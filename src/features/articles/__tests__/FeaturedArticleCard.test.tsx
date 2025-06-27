
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FeaturedArticleCard from "../components/FeaturedArticleCard";
import type { FeaturedArticle } from "../types/types";

describe("FeaturedArticleCard", () => {
  const mockFeaturedArticle: FeaturedArticle = {
    id: "1",
    title: "Featured Article Title",
    category: "Business",
    date: "2024-01-20",
    excerpt: "This is a test excerpt for the featured article.",
    image: "https://example.com/featured-image.jpg",
  };

  const mockOnClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Image Display Tests", () => {
    test("should display image when showImage is true and image exists", () => {
      render(<FeaturedArticleCard article={mockFeaturedArticle} showImage={true} layout="boxed" onClick={mockOnClick} />);

      const image = screen.getByAltText("Featured Article Title");
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", "https://example.com/featured-image.jpg");
    });

    test("should not display image when showImage is false", () => {
      render(<FeaturedArticleCard article={mockFeaturedArticle} showImage={false} layout="boxed" onClick={mockOnClick} />);

      const image = screen.queryByAltText("Featured Article Title");
      expect(image).not.toBeInTheDocument();
    });

    test("should not display image when showImage is true but image is null", () => {
      const articleWithoutImage = { ...mockFeaturedArticle, image: "" };

      render(<FeaturedArticleCard article={articleWithoutImage} showImage={true} layout="boxed" onClick={mockOnClick} />);

      const image = screen.queryByAltText("Featured Article Title");
      expect(image).not.toBeInTheDocument();
    });
  });

  describe("Excerpt Display Tests", () => {
    test("should display excerpt correctly", () => {
      render(<FeaturedArticleCard article={mockFeaturedArticle} showImage={false} layout="boxed" onClick={mockOnClick} />);

      expect(screen.getByText("This is a test excerpt for the featured article.")).toBeInTheDocument();
    });

    test("should display all article information", () => {
      render(<FeaturedArticleCard article={mockFeaturedArticle} showImage={false} layout="boxed" onClick={mockOnClick} />);

      expect(screen.getByText("Featured Article Title")).toBeInTheDocument();
      expect(screen.getByText("Business")).toBeInTheDocument();
      expect(screen.getByText("2024-01-20")).toBeInTheDocument();
      expect(screen.getByText("This is a test excerpt for the featured article.")).toBeInTheDocument();
    });
  });

  describe("FeaturedArticle ID Tests", () => {
    test("should handle FeaturedArticle with valid ID", () => {
      render(<FeaturedArticleCard article={mockFeaturedArticle} showImage={false} layout="boxed" onClick={mockOnClick} />);

      expect(screen.getByText("Featured Article Title")).toBeInTheDocument();
      expect(screen.getByText("Business")).toBeInTheDocument();
      expect(screen.getByText("2024-01-20")).toBeInTheDocument();
      expect(screen.getByText("This is a test excerpt for the featured article.")).toBeInTheDocument();
    });

    test("should handle long excerpts properly", () => {
      const longExcerptArticle: FeaturedArticle = {
        ...mockFeaturedArticle,
        excerpt: "This is a very long excerpt that should be handled properly by the component and should not cause any layout issues or text overflow problems.",
      };

      render(<FeaturedArticleCard article={longExcerptArticle} showImage={false} layout="boxed" onClick={mockOnClick} />);

      expect(screen.getByText(/This is a very long excerpt that should be handled properly/)).toBeInTheDocument();
    });
  });

  describe("Layout Tests", () => {
    test("should render with boxed layout", () => {
      const { container } = render(<FeaturedArticleCard article={mockFeaturedArticle} showImage={false} layout="boxed" onClick={mockOnClick} />);

      const card = container.querySelector(".ant-card");
      expect(card).toBeInTheDocument();
    });

    test("should render with underlined layout", () => {
      const { container } = render(<FeaturedArticleCard article={mockFeaturedArticle} showImage={false} layout="underlined" onClick={mockOnClick} />);

      const card = container.querySelector(".ant-card");
      expect(card).toBeInTheDocument();
    });
  });

  describe("Hover Effects Tests", () => {
    test("should handle mouse enter and leave events on title", () => {
      render(<FeaturedArticleCard article={mockFeaturedArticle} showImage={false} layout="boxed" onClick={mockOnClick} />);

      const title = screen.getByText("Featured Article Title");

      fireEvent.mouseEnter(title);
      expect(title).toHaveStyle("color: #d6374f");

      fireEvent.mouseLeave(title);
      expect(title).toHaveStyle("color: rgb(255, 255, 255)");
    });
  });
});
