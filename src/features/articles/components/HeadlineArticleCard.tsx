import React from "react";
import { Card, Typography } from "antd";
import type { FeaturedArticle } from "../types/types";

const { Title, Text } = Typography;

interface Props {
  article: FeaturedArticle;
  onClick?: (article: FeaturedArticle) => void;
}

const HeadlineArticleCard: React.FC<Props> = ({ article, onClick }) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = "#d6374f";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = "white";
  };

  const handleClick = () => {
    if (onClick) {
      onClick(article);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
        fontFamily: "Arial, sans-serif",
        minWidth: 0,
      }}
    >
      <Card
        hoverable
        onClick={handleClick}
        styles={{
          body: { padding: 0 },
        }}
        style={{
          width: "100%",
          minWidth: 0,
          cursor: onClick ? "pointer" : "default",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${article.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "clamp(250px, 50vw, 400px)",
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            padding: "clamp(15px, 4vw, 30px)",
            width: "100%",
            minWidth: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(transparent 40%, rgba(0,0,0,0.8) 100%)",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 2,
              color: "white",
              width: "100%",
              minWidth: 0,
            }}
          >
            <Title
              level={2}
              style={{
                color: "white",
                marginBottom: "clamp(10px, 3vw, 20px)",
                fontSize: "clamp(18px, 4vw, 36px)",
                fontWeight: "bold",
                lineHeight: "1.2",
                transition: "color 0.3s ease",
                cursor: "pointer",
                wordWrap: "break-word",
                hyphens: "auto",
                overflowWrap: "break-word",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {article.title}
            </Title>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "clamp(12px, 2.5vw, 14px)",
                color: "#cccccc",
                flexWrap: "wrap",
              }}
            >
              <Text
                strong
                style={{
                  color: "#cccccc",
                  fontSize: "clamp(12px, 2.5vw, 14px)",
                }}
              >
                {article.category.toUpperCase()}
              </Text>
              <span style={{ color: "#cccccc" }}>|</span>
              <Text
                style={{
                  fontSize: "clamp(12px, 2.5vw, 14px)",
                  color: "#cccccc",
                }}
              >
                {article.date}
              </Text>
            </div>

            <Text
              style={{
                color: "#cccccc",
                fontSize: "clamp(12px, 2.5vw, 14px)",
                marginTop: "clamp(8px, 2vw, 12px)",
                display: "block",
                lineHeight: "1.4",
                wordWrap: "break-word",
                overflowWrap: "break-word",
              }}
            >
              {article.excerpt}
            </Text>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HeadlineArticleCard;
