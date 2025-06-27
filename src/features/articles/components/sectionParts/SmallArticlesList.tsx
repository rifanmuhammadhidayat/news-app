import React from "react";
import SmallArticleCard from "../SmallArticleCard";
import type { SmallArticle } from "../../types/types";

interface Props {
  articles: SmallArticle[];
  layout: "boxed" | "underlined" | "none";
  withImage?: boolean;
  onArticleClick?: (article: SmallArticle) => void;
}

const SmallArticlesList: React.FC<Props> = ({ articles, layout, withImage, onArticleClick }) => {
  return (
    <div className="articles">
      {articles.map((article, index) => (
        <SmallArticleCard key={index} article={article} layout={layout} withImage={withImage} onClick={() => onArticleClick?.(article)} />
      ))}
    </div>
  );
};

export default SmallArticlesList;
