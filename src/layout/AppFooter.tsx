import React from "react";
import { Layout, Typography, Button, Divider, Space } from "antd";
import { TwitterOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined, HeartFilled } from "@ant-design/icons";

const { Footer: AntFooter } = Layout;
const { Text, Title } = Typography;

const AppFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AntFooter
      style={{
        backgroundColor: "#333",
        color: "white",
        padding: "48px 24px 24px",
        marginTop: "auto",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Main Footer Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "48px",
            marginBottom: "32px",
          }}
        >
          {/* Brand Section */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              {/* Logo yang sama dengan header */}
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
                  fontSize: "18px",
                  fontWeight: "600",
                  margin: 0,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                }}
              >
                NewsHub
              </Text>
            </div>
            <Text
              style={{
                color: "#ccc",
                fontSize: "14px",
                lineHeight: "1.6",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Platform berita terpercaya yang menyajikan informasi terkini dari berbagai sumber dengan akurasi tinggi dan perspektif yang berimbang.
            </Text>

            {/* Social Media Icons */}
            <Space size="middle">
              <Button
                type="text"
                icon={<TwitterOutlined />}
                style={{
                  color: "#ccc",
                  border: "1px solid #555",
                  borderRadius: "6px",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.borderColor = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#ccc";
                  e.currentTarget.style.borderColor = "#555";
                }}
              />
              <Button
                type="text"
                icon={<FacebookOutlined />}
                style={{
                  color: "#ccc",
                  border: "1px solid #555",
                  borderRadius: "6px",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.borderColor = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#ccc";
                  e.currentTarget.style.borderColor = "#555";
                }}
              />
              <Button
                type="text"
                icon={<InstagramOutlined />}
                style={{
                  color: "#ccc",
                  border: "1px solid #555",
                  borderRadius: "6px",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.borderColor = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#ccc";
                  e.currentTarget.style.borderColor = "#555";
                }}
              />
              <Button
                type="text"
                icon={<LinkedinOutlined />}
                style={{
                  color: "#ccc",
                  border: "1px solid #555",
                  borderRadius: "6px",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.borderColor = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#ccc";
                  e.currentTarget.style.borderColor = "#555";
                }}
              />
            </Space>
          </div>

          {/* Quick Links */}
          <div>
            <Title level={5} style={{ color: "white", marginBottom: "16px", fontSize: "16px" }}>
              Menu Utama
            </Title>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {["Beranda", "Berita", "Politik", "Ekonomi", "Olahraga", "Teknologi"].map((item) => (
                <Text
                  key={item}
                  style={{
                    color: "#ccc",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#ccc";
                  }}
                >
                  {item}
                </Text>
              ))}
            </div>
          </div>

          {/* Company Info */}
          <div>
            <Title level={5} style={{ color: "white", marginBottom: "16px", fontSize: "16px" }}>
              Tentang Kami
            </Title>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {["Profil Perusahaan", "Tim Redaksi", "Karir", "Kontak", "Kebijakan Privasi", "Syarat & Ketentuan"].map((item) => (
                <Text
                  key={item}
                  style={{
                    color: "#ccc",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#ccc";
                  }}
                >
                  {item}
                </Text>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <Title level={5} style={{ color: "white", marginBottom: "16px", fontSize: "16px" }}>
              Hubungi Kami
            </Title>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <EnvironmentOutlined style={{ color: "#ccc", fontSize: "14px" }} />
                <Text style={{ color: "#ccc", fontSize: "14px" }}>Jakarta, Indonesia</Text>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <PhoneOutlined style={{ color: "#ccc", fontSize: "14px" }} />
                <Text style={{ color: "#ccc", fontSize: "14px" }}>+62 21 1234 5678</Text>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <MailOutlined style={{ color: "#ccc", fontSize: "14px" }} />
                <Text style={{ color: "#ccc", fontSize: "14px" }}>info@newshub.com</Text>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Divider style={{ borderColor: "#555", margin: "32px 0 24px" }} />

        {/* Bottom Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <Text style={{ color: "#ccc", fontSize: "14px" }}>© {currentYear} NewsHub. All rights reserved.</Text>

          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Text style={{ color: "#ccc", fontSize: "14px" }}>Made with</Text>
            <HeartFilled style={{ color: "#ff4d4f", fontSize: "14px" }} />
            <Text style={{ color: "#ccc", fontSize: "14px" }}>in Indonesia</Text>
          </div>
        </div>
      </div>
    </AntFooter>
  );
};

export default AppFooter;
