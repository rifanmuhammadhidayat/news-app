import React from "react";
import { Row, Col } from "antd";
import SmallArticleCard from "../SmallArticleCard";
import type { SmallArticle } from "../../types/types";

interface Props {
  columns: SmallArticle[][];
  layout: "boxed" | "underlined" | "none";
  withImage?: boolean;
  onArticleClick?: (article: SmallArticle) => void;
}

const MasonryArticlesList: React.FC<Props> = ({ columns, layout, withImage, onArticleClick }) => {
  return (
    <Row gutter={[16, 16]}>
      {columns.map((column, columnIndex) => (
        <Col key={columnIndex} xs={24} sm={12} md={8}>
          <div className="masonry-column">
            {column.map((article, articleIndex) => (
              <div key={articleIndex} style={{ marginBottom: "16px" }}>
                <SmallArticleCard article={article} layout={layout} withImage={withImage} onClick={() => onArticleClick?.(article)} />
              </div>
            ))}
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default MasonryArticlesList;
