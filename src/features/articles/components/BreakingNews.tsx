import React from "react";
import { Row, Col, Typography } from "antd";

const { Text } = Typography;

interface BreakingNewsBarProps {
  message: string;
}

const BreakingNewsBar: React.FC<BreakingNewsBarProps> = ({ message }) => {
  return (
    <Row style={{ background: "#121212", width: "100%", minWidth: 0 }}>
      <Col
        xs={24}
        sm={6}
        md={4}
        lg={3}
        style={{
          background: "#d7263d",
          padding: "12px 15px",
          minWidth: 0,
        }}
      >
        <Text
          style={{
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "clamp(14px, 3vw, 18px)",
            whiteSpace: "nowrap",
          }}
        >
          BREAKING NEWS
        </Text>
      </Col>
      <Col
        xs={24}
        sm={18}
        md={20}
        lg={21}
        style={{
          background: "#333333",
          padding: "12px 15px",
          minWidth: 0,
        }}
      >
        <Text
          style={{
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "clamp(14px, 3vw, 18px)",
            wordWrap: "break-word",
            overflowWrap: "break-word",
          }}
        >
          {message}
        </Text>
      </Col>
    </Row>
  );
};

export default BreakingNewsBar;
