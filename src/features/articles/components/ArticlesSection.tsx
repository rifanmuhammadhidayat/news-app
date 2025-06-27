import { Row, Col, Space } from "antd";
import React from "react";
import type { FeaturedArticle, SmallArticle } from "../types/types";
import SectionTitle from "./sectionParts/SectionTitle";
import FeaturedArticlesList from "./sectionParts/FeaturedArticlesList";
import MasonryArticlesList from "./sectionParts/MasonryArticlesList";
import SmallArticlesList from "./sectionParts/SmallArticlesList";

type ArticleSectionProps = {
  title: string;
  featuredArticle?: FeaturedArticle[];
  articles?: SmallArticle[];
  layout: "boxed" | "underlined" | "none";
  withImage?: boolean;
  onArticleClick?: (article: SmallArticle) => void;
  onFeaturedArticleClick?: (article: FeaturedArticle) => void;
};

const ArticlesSection: React.FC<ArticleSectionProps> = ({ title, featuredArticle, articles, layout, withImage, onArticleClick, onFeaturedArticleClick }) => {
  const isTopNews = title.toLowerCase() === "top news";
  const displayedArticles = articles ? (isTopNews ? articles.slice(0, 3) : articles.slice(0, 6)) : [];

  const createMasonryColumns = (articles: SmallArticle[], numColumns: number = 3) => {
    const columns: SmallArticle[][] = Array.from({ length: numColumns }, () => []);
    articles.forEach((article, index) => {
      const columnIndex = index % numColumns;
      columns[columnIndex].push(article);
    });
    return columns;
  };

  const masonryColumns = withImage ? createMasonryColumns(displayedArticles) : [];

  return (
    <div>
      <Row justify="center">
        <Col lg={24} style={{ padding: "0px 20px" }}>
          <Space direction="vertical" style={{ textAlign: "left", margin: 0, padding: 0, width: "100%" }}>
            <SectionTitle title={title} />

            {!isTopNews && featuredArticle && <FeaturedArticlesList featuredArticle={featuredArticle} layout={layout} onArticleClick={onFeaturedArticleClick} />}

            {withImage ? (
              <MasonryArticlesList columns={masonryColumns} layout={layout} withImage={withImage} onArticleClick={onArticleClick} />
            ) : (
              <SmallArticlesList articles={displayedArticles} layout={layout} withImage={withImage} onArticleClick={onArticleClick} />
            )}
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default ArticlesSection;
