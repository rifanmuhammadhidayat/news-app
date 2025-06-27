import { Layout, Button, Typography } from "antd";
import { SearchOutlined, UserOutlined, MenuOutlined, BulbOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

const { Header: AntHeader } = Layout;
const { Text } = Typography;

const AppHeader = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <AntHeader
        style={{
          backgroundColor: "#333",
          position: "sticky",
          top: 0,
          zIndex: 999,
          padding: isMobile ? "0 12px" : "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
          borderBottom: "none",
        }}
      >
        {/* Logo dan Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Icon Logo */}
          <div
            style={{
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="6" height="6" fill="white" rx="1" />
              <rect x="15" y="3" width="6" height="6" fill="white" rx="1" />
              <rect x="3" y="15" width="6" height="6" fill="white" rx="1" />
              <rect x="15" y="15" width="6" height="6" fill="white" rx="1" />
              <rect x="9" y="9" width="6" height="6" fill="white" rx="1" />
            </svg>
          </div>
          <Text
            style={{
              color: "white",
              fontSize: isMobile ? "16px" : "18px",
              fontWeight: "600",
              margin: 0,
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
          >
            NewsHub
          </Text>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: isMobile ? "8px" : "16px",
            flexWrap: "nowrap",
          }}
        >
          {/* Dark Mode Toggle */}
          <Button
            type="text"
            icon={<BulbOutlined />}
            style={{
              color: "white",
              border: "none",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              padding: "4px 8px",
            }}
          />

          {/* Temperature */}
          {!isMobile && (
            <Text
              style={{
                color: "white",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                whiteSpace: "nowrap",
              }}
            >
              28.9°C Dayeuhkolot
            </Text>
          )}

          {/* Search Button  */}
          <Button
            type="text"
            icon={<SearchOutlined />}
            style={{
              color: "white",
              border: "none",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              padding: "4px 8px",
            }}
          />

          {/* User Account  */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <UserOutlined style={{ color: "white", fontSize: "16px" }} />
            {!isMobile && (
              <Text
                style={{
                  color: "white",
                  fontSize: "14px",
                  margin: 0,
                  whiteSpace: "nowrap",
                }}
              >
                My account
              </Text>
            )}
          </div>

          {/* Menu Button */}
          <Button
            type="text"
            icon={<MenuOutlined />}
            style={{
              color: "white",
              border: "none",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              padding: "4px 8px",
            }}
          />
        </div>
      </AntHeader>
    </>
  );
};

export default AppHeader;
