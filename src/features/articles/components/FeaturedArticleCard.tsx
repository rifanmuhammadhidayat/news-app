import React from "react";
import type { FeaturedArticle } from "../types/types";
import { Card, Space, Typography } from "antd";

const { Text, Title } = Typography;

interface FeaturedArticleCardProps {
  article: FeaturedArticle;
  showImage?: boolean;
  layout: "boxed" | "underlined" | "none";
  onClick?: () => void;
}

const FeaturedArticleCard: React.FC<FeaturedArticleCardProps> = ({ article, showImage, layout }) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = "#d6374f";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = "white";
  };

  return (
    <Card
      style={{
        border: "none",
        width: "100%",
        minWidth: 0,
        ...(layout === "boxed" && { border: "1px solid #444" }),
        borderBottom: layout === "underlined" ? "1px solid #444" : "none",
        backgroundColor: "transparent",
        boxShadow: "none",
        borderRadius: "0",
      }}
      bodyStyle={{
        padding: "clamp(15px, 3vw, 20px) 0",
        backgroundColor: "transparent",
        minWidth: 0,
      }}
    >
      <Space
        direction="vertical"
        size="small"
        style={{
          width: "100%",
          minWidth: 0,
        }}
      >
        <div style={{ width: "100%", minWidth: 0 }}>
          <Title
            level={3}
            style={{
              color: "white",
              fontSize: "clamp(16px, 4vw, 20px)",
              fontWeight: "bold",
              margin: 0,
              cursor: "pointer",
              transition: "color 0.3s ease",
              display: "inline",
              lineHeight: "1.3",
              wordWrap: "break-word",
              overflowWrap: "break-word",
              hyphens: "auto",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {article.title}
          </Title>
        </div>

        <div style={{ width: "100%", minWidth: 0 }}>
          <Space split={<Text style={{ color: "#888", margin: "0 4px" }}>|</Text>} style={{ flexWrap: "wrap" }}>
            <Text
              strong
              style={{
                color: "white",
                fontSize: "clamp(12px, 2.5vw, 14px)",
              }}
            >
              {article.category}
            </Text>
            <Text
              style={{
                color: "#888",
                fontSize: "clamp(12px, 2.5vw, 14px)",
              }}
            >
              {article.date}
            </Text>
          </Space>
        </div>

        <Space direction="vertical" style={{ width: "100%", minWidth: 0 }}>
          {showImage && article.image && (
            <img
              src={article.image}
              alt={article.title}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                marginTop: "10px",
              }}
            />
          )}
          <Text
            style={{
              color: "#cccccc",
              fontSize: "clamp(13px, 3vw, 16px)",
              lineHeight: "1.5",
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {article.excerpt}
          </Text>
        </Space>
      </Space>
    </Card>
  );
};

export default FeaturedArticleCard;
