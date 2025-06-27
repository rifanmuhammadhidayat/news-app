import React from "react";
import FeaturedArticleCard from "../FeaturedArticleCard";
import type { FeaturedArticle } from "../../types/types";

interface Props {
  featuredArticle: FeaturedArticle[];
  layout: "boxed" | "underlined" | "none";
  onArticleClick?: (article: FeaturedArticle) => void;
}

const FeaturedArticlesList: React.FC<Props> = ({ featuredArticle, layout, onArticleClick }) => {
  return (
    <>
      {featuredArticle.map((article, index) => (
        <div 
          key={article.id}
          onClick={() => onArticleClick?.(article)}
          style={{ cursor: 'pointer' }}
        >
          <FeaturedArticleCard 
            article={article} 
            layout={layout} 
            showImage={index === 0}
          />
        </div>
      ))}
    </>
  );
};

export default FeaturedArticlesList;