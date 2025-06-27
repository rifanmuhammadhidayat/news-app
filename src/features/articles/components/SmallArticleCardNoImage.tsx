import React from "react";
import { Card, Space, Typography } from "antd";
import type { SmallArticle } from "../types/types";

const { Text, Title } = Typography;

interface Props {
  article: SmallArticle;
  layout: "boxed" | "underlined" | "none";
  onClick?: () => void;
}

const SmallArticleCardNoImage: React.FC<Props> = ({ article, layout, onClick }) => {

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = "#d6374f";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = "white";
  };

  const getCardStyle = () => {
    const baseStyle = {
      backgroundColor: "transparent",
      boxShadow: "none",
      borderRadius: "0",
      width: "100%",
      minWidth: 0,
    };

    if (layout === "boxed") {
      return { ...baseStyle, border: "1px solid #444" };
    } else if (layout === "underlined") {
      return {
        ...baseStyle,
        border: "none",
        borderBottom: "1px solid #444",
        marginBottom: "0px", 
      };
    } else {
      return { ...baseStyle, border: "none" };
    }
  };

  const getBodyStyle = () => {
    if (layout === "underlined") {
      return {
        padding: "15px 0px",
        backgroundColor: "transparent",
        minWidth: 0,
      };
    } else {
      return {
        padding: "clamp(15px, 3vw, 20px)",
        backgroundColor: "transparent",
        minWidth: 0,
      };
    }
  };

  return (
    <Card style={getCardStyle()} bodyStyle={getBodyStyle()}>
      <div onClick={onClick} style={{ cursor: "pointer", display: "flex" }}>
        <Space
          direction="vertical"
          size="small"
          style={{
            width: "100%",
            minWidth: 0,
          }}
        >
          <Title
            style={{
              color: "white",
              margin: 0,
              cursor: "pointer",
              transition: "color 0.3s ease",
              lineHeight: "1.4",
              fontSize: "clamp(14px, 3.5vw, 18px)",
              wordWrap: "break-word",
              overflowWrap: "break-word",
              hyphens: "auto",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {article.title}
          </Title>
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
    </Card>
  );
};

export default SmallArticleCardNoImage;
