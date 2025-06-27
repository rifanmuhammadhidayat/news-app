import { Divider, Typography } from "antd";
import React from "react";

const { Title } = Typography;

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Divider style={{ borderColor: "#dc2626", borderWidth: "4px", flex: 1, minWidth: "50px", margin: 0 }} />
      <Title level={4} style={{ fontWeight: "bold", margin: "0 25px", textAlign: "center" }} type="secondary">
        {title}
      </Title>
      <Divider style={{ borderColor: "#dc2626", borderWidth: "4px", flex: 1, minWidth: "50px" }} />
    </div>
  );
};

export default SectionTitle;
