import React from "react";
import { ConfigProvider, theme } from "antd";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewsDetail from "./pages/NewsDetail";
import "./index.css";

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#e74c3c",
          colorBgContainer: "#1a1a1a",
          colorBgElevated: "#1a1a1a",
          colorText: "#ffffff",
          colorTextSecondary: "#cccccc",
          colorBorder: "#333333",
        },
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<NewsDetail />} />
      </Routes>
    </ConfigProvider>
  );
};

export default App;
