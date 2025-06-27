import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Layout, Typography, Button, Row, Col, Card, ConfigProvider, Space, Divider, theme as antdTheme } from "antd";
import { ArrowLeftOutlined, ShareAltOutlined, HeartOutlined, CalendarOutlined, GlobalOutlined } from "@ant-design/icons";
import type { FullArticle, SmallArticle } from "../features/articles/types/types";
import ArticlesSection from "../features/articles/components/ArticlesSection";
import { useMultipleCategories } from "../features/articles/hooks/useNews";
import { convertToFullArticle } from "../features/articles/utils/converters";

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { useToken } = antdTheme;

const customTheme = {
  components: {
    Card: {
      borderRadius: 0,
      borderRadiusLG: 0,
      borderRadiusSM: 0,
    },
    Layout: {
      bodyBg: "#ffffff",
    },
  },
};

const NewsDetail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token } = useToken();
  const article = location.state as FullArticle;
  const { topNews } = useMultipleCategories();

  const handleArticleClick = (article: SmallArticle): void => {
    const originalArticle = topNews.data?.find((item) => item.title === article.title);

    if (originalArticle) {
     
      const fullArticle = convertToFullArticle(originalArticle);
      navigate("/detail", { state: fullArticle });
    }
  };

  const handleGoBack = (): void => {
    navigate(-1);
  };


  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!article) {
    return (
      <Layout
        style={{
          minHeight: "100vh",
          padding: token.paddingSM,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Content style={{ textAlign: "center" }}>
          <Title level={3}>Data artikel tidak ditemukan</Title>
          <Button type="primary" onClick={handleGoBack}>
            Kembali
          </Button>
        </Content>
      </Layout>
    );
  }

  return (
    <ConfigProvider theme={customTheme}>
      <Layout
        style={{
          minHeight: "100vh",
          backgroundColor: token.colorBgContainer,
        }}
      >
        <Content
          style={{
            padding: `${token.paddingLG}px ${token.paddingSM}px`,
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {/* Header dengan tombol back */}
          <Row style={{ marginBottom: token.marginLG }}>
            <Col span={24}>
              <Button
                type="text"
                icon={<ArrowLeftOutlined />}
                onClick={handleGoBack}
                style={{
                  marginBottom: token.marginMD,
                  padding: `${token.paddingXS}px ${token.paddingSM}px`,
                }}
              >
                Kembali
              </Button>
            </Col>
          </Row>

          {/* Title dengan border kiri */}
          <Row style={{ marginBottom: token.marginXL }}>
            <Col span={24}>
              <div
                style={{
                  paddingLeft: token.paddingMD,
                  borderLeft: `4px solid ${token.colorError}`,
                }}
              >
                <Title
                  level={1}
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                    lineHeight: 1.2,
                    marginBottom: 0,
                  }}
                >
                  {article.title}
                </Title>
              </div>
            </Col>
          </Row>

          {/* Content area */}
          <Row gutter={[24, 24]}>
            {/* Main content */}
            <Col xs={24} lg={16}>
              <Card
                style={{
                  marginBottom: token.marginLG,
                  boxShadow: token.boxShadowTertiary,
                }}
                cover={
                  article.urlToImage && (
                    <div
                      style={{
                        position: "relative",
                        paddingBottom: "56.25%",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: 0,
                        }}
                        loading="lazy"
                      />
                    </div>
                  )
                }
              >
                {/* Article metadata */}
                <Space
                  direction="vertical"
                  size="small"
                  style={{
                    width: "100%",
                    marginBottom: token.marginMD,
                  }}
                >
                  <Space wrap size="middle">
                    <Space size="small">
                      <CalendarOutlined style={{ color: token.colorTextSecondary }} />
                      <Text type="secondary">{formatDate(article.publishedAt)}</Text>
                    </Space>
                    <Space size="small">
                      <GlobalOutlined style={{ color: token.colorTextSecondary }} />
                      <Text type="secondary">{article.source.name}</Text>
                    </Space>
                  </Space>

                  <Space>
                    <Button type="text" icon={<ShareAltOutlined />}  size="small">
                      Bagikan
                    </Button>
                    <Button type="text" icon={<HeartOutlined />} size="small">
                      Simpan
                    </Button>
                  </Space>
                </Space>

                <Divider />

                {/* Article content */}
                <Space direction="vertical" size="large" style={{ width: "100%" }}>
                  {article.description && (
                    <Paragraph
                      style={{
                        fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                        lineHeight: 1.6,
                        fontWeight: 500,
                        color: token.colorText,
                      }}
                    >
                      {article.description}
                    </Paragraph>
                  )}

                  {article.content && (
                    <Paragraph
                      style={{
                        fontSize: "clamp(0.875rem, 2vw, 1rem)",
                        lineHeight: 1.7,
                        color: token.colorText,
                        textAlign: "justify",
                      }}
                    >
                      {article.content}
                    </Paragraph>
                  )}
                </Space>
              </Card>
            </Col>

            {/* Sidebar */}
            <Col xs={24} lg={8}>
              <div
                style={{
                  position: "sticky",
                  top: token.paddingLG,
                }}
              >
                <ArticlesSection title="Berita Terpopuler" articles={topNews.articles} layout="underlined" onArticleClick={handleArticleClick} />
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default NewsDetail;
