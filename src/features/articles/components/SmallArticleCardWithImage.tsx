import React from "react";
import { Card, Space, Typography } from "antd";
import type { SmallArticle } from "../types/types";

const { Text, Title } = Typography;

interface Props {
  article: SmallArticle;
  layout: "boxed" | "underlined" | "none";
    onClick?: () => void;
  
}


const SmallArticleCardWithImage: React.FC<Props> = ({ article, layout, onClick }) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = "#d6374f";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = "white";
  };

  const displayTitle = article.title.length > 42 ? `${article.title.substring(0, 42)}...` : article.title;

  return (
    <Card
      style={{
        backgroundColor: "transparent",
        boxShadow: "none",
        borderRadius: "0",
        width: "100%",
        minWidth: 0,
        ...(layout === "boxed" ? { border: "1px solid #444" } : layout === "underlined" ? { borderBottom: "1px solid #444" } : { border: "none" }),
      }}
      bodyStyle={{
        padding: "0 0 20px 0",
        backgroundColor: "transparent",
        minWidth: 0,
      }}
    >
      <div onClick={onClick} style={{ cursor: "pointer" }}>
        {" "}
        <div
          style={{
            display: "flex",
            gap: "clamp(8px, 2vw, 16px)",
            alignItems: "flex-start",
            width: "100%",
            minWidth: 0,
          }}
        >
          <img
            src={article.image}
            alt={article.title}
            style={{
              width: "clamp(60px, 15vw, 100px)",
              height: "clamp(60px, 15vw, 100px)",
              objectFit: "cover",
              borderRadius: "4px",
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1, minWidth: 0 }}>
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
                    fontSize: "clamp(14px, 3vw, 18px)",
                    margin: 0,
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    lineHeight: "1.4",
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    hyphens: "auto",
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {displayTitle}
                </Title>
              </div>
              <div style={{ width: "100%", minWidth: 0 }}>
                <Space split={<Text style={{ color: "#888", margin: "0 4px" }}>|</Text>} style={{ flexWrap: "wrap" }}>
                  <Text
                    strong
                    style={{
                      color: "white",
                      fontSize: "clamp(11px, 2.5vw, 14px)",
                    }}
                  >
                    {article.category}
                  </Text>
                  <Text
                    style={{
                      color: "#888",
                      fontSize: "clamp(11px, 2.5vw, 14px)",
                    }}
                  >
                    {article.date}
                  </Text>
                </Space>
              </div>
            </Space>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SmallArticleCardWithImage;
