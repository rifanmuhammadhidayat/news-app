import React from "react";
import type { SmallArticle } from "../types/types";
import SmallArticleCardWithImage from "./SmallArticleCardWithImage";
import SmallArticleCardNoImage from "./SmallArticleCardNoImage";

interface SmallArticleCardProps {
  article: SmallArticle;
  layout: "boxed" | "underlined" | "none";
  withImage?: boolean;
  onClick?: () => void;
}

const SmallArticleCard: React.FC<SmallArticleCardProps> = ({ article, layout, withImage, onClick }) => {
  return withImage ? <SmallArticleCardWithImage article={article} layout={layout} onClick={onClick} /> : <SmallArticleCardNoImage article={article} layout={layout} onClick={onClick} />;
};

export default SmallArticleCard;
