import { Layout, Col, Row, Spin, Alert, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { ReloadOutlined } from "@ant-design/icons";
import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";
import HeadlineArticleCard from "../features/articles/components/HeadlineArticleCard";
import BreakingNews from "../features/articles/components/BreakingNews";
import { Content } from "antd/es/layout/layout";
import ArticlesSection from "../features/articles/components/ArticlesSection";
import { useMultipleCategories } from "../features/articles/hooks/useNews";
import { convertToFeaturedArticle, convertToFullArticle } from "../features/articles/utils/converters";
import type { SmallArticle, FeaturedArticle } from "../features/articles/types/types";

const Home = () => {
  const navigate = useNavigate();
  const { topNews, businessNews, techNews, sportsNews, generalNews, entertainmentNews, scienceNews, healthNews, loading, error, refetchAll } = useMultipleCategories();

  const handleArticleClick = (article: SmallArticle) => {
    
    const originalArticle =
      topNews.data.find((item) => item.title === article.title) ||
      businessNews.data.find((item) => item.title === article.title) ||
      techNews.data.find((item) => item.title === article.title) ||
      sportsNews.data.find((item) => item.title === article.title) ||
      generalNews.data.find((item) => item.title === article.title) ||
      entertainmentNews.data.find((item) => item.title === article.title) ||
      scienceNews.data.find((item) => item.title === article.title) ||
      healthNews.data.find((item) => item.title === article.title);     

    if (originalArticle) {
      
      const fullArticle = convertToFullArticle(originalArticle);
      navigate("/detail", { state: fullArticle });
    }
  };

  const handleFeaturedArticleClick = (article: FeaturedArticle) => {
    
    const originalArticle =
      topNews.data.find((item) => item.title === article.title) ||
      businessNews.data.find((item) => item.title === article.title) ||
      techNews.data.find((item) => item.title === article.title) ||
      sportsNews.data.find((item) => item.title === article.title) ||
      generalNews.data.find((item) => item.title === article.title) ||
      entertainmentNews.data.find((item) => item.title === article.title) ||
      scienceNews.data.find((item) => item.title === article.title) ||
      healthNews.data.find((item) => item.title === article.title); 

    if (originalArticle) {
      
      const fullArticle = convertToFullArticle(originalArticle);
      navigate("/detail", { state: fullArticle });
    }
  };

  const headlineArticle = topNews.data[0] ? convertToFeaturedArticle(topNews.data[0]) : null;

  if (loading) {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <AppHeader />
        <Content
          style={{
            padding: "30px 5%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh",
          }}
        >
          <Spin size="large" tip="Loading news..." />
        </Content>
        <AppFooter />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <AppHeader />
        <Content
          style={{
            padding: "30px 5%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "500px", width: "100%" }}>
            <Alert message="Failed to Load News" description={error} type="error" showIcon style={{ marginBottom: "20px" }} />
            <Button type="primary" icon={<ReloadOutlined />} onClick={refetchAll}>
              Retry
            </Button>
          </div>
        </Content>
        <AppFooter />
      </Layout>
    );
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppHeader />
      <Content style={{ padding: "20px 5%", minWidth: 0 }}>
        {/* Hero Section - Headline dan Top News */}
        <Row gutter={[16, 24]}>
          <Col xs={24} lg={14}>
            {headlineArticle && <HeadlineArticleCard article={headlineArticle} onClick={handleFeaturedArticleClick} />}
          </Col>
          <Col xs={24} lg={10}>
            <ArticlesSection title="Top News" articles={topNews.articles} layout="underlined" onArticleClick={handleArticleClick} />
          </Col>
        </Row>

        {/* Breaking News */}
        <Row style={{ marginTop: "30px" }}>
          <Col span={24}>
            <BreakingNews message="Breaking news goes here" />
          </Col>
        </Row>

        {/* Main Content Sections */}
        <Row gutter={[16, 24]} style={{ marginTop: "40px" }}>
          <Col xs={24} sm={24} md={8} lg={7}>
            <ArticlesSection title="Sports" articles={sportsNews.articles} layout="boxed" onArticleClick={handleArticleClick} />
          </Col>
          <Col xs={24} sm={24} md={8} lg={10}>
            <ArticlesSection title="Technology" featuredArticle={techNews.featuredArticle} layout="underlined" onArticleClick={handleArticleClick} onFeaturedArticleClick={handleFeaturedArticleClick} />
          </Col>
          <Col xs={24} sm={24} md={8} lg={7}>
            <ArticlesSection title="Business" articles={businessNews.articles} layout="boxed" onArticleClick={handleArticleClick} />
          </Col>
        </Row>

        <Row style={{ marginTop: "40px" }}>
          <Col span={24} style={{ backgroundColor: "#333333", padding: "20px 10px" }}>
            <ArticlesSection title="Entertainment" articles={entertainmentNews.articles} layout="none" withImage onArticleClick={handleArticleClick} />
          </Col>
        </Row>

        <Row gutter={[16, 24]} style={{ marginTop: "40px" }}>
          <Col xs={24} lg={12}>
            <ArticlesSection title="Health" featuredArticle={healthNews.featuredArticle} layout="underlined" onArticleClick={handleArticleClick} onFeaturedArticleClick={handleFeaturedArticleClick} />
          </Col>
          <Col xs={24} lg={12}>
            <ArticlesSection title="Science" featuredArticle={scienceNews.featuredArticle} layout="underlined" onArticleClick={handleArticleClick} onFeaturedArticleClick={handleFeaturedArticleClick} />
          </Col>
        </Row>

        <Row style={{ margin: "40px 0" }}>
          <Col
            span={24}
            style={{
              backgroundColor: "#1a1a1a",
              padding: "20px 10px",
              border: "1px solid #444",
            }}
          >
            <ArticlesSection title="General" articles={generalNews.articles} layout="none" withImage onArticleClick={handleArticleClick} />
          </Col>
        </Row>
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default Home;
