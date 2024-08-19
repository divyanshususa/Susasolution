import React from "react";
import { Layout, Typography, Button, Space, Image } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Home= () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          {/* <Image
            width={200}
            src="https://picsum.photos/200/300"
            alt="Project Management"
            style={{ borderRadius: "10px", margin: "20px auto" }}
          /> */}
          <Title style={{ textAlign: "center" }} level={2}>
            <b> Welcome to Project Management App</b>
          </Title>
          <Paragraph style={{ textAlign: "center" }}>
            Streamline your projects and collaborate with your team like never
            before.
          </Paragraph>
          <Space style={{ textAlign: "center", marginTop: "2rem" }}></Space>
          <Image
            width={400}
            src="https://picsum.photos/400/200"
            alt="Project Management Features"
            style={{ borderRadius: "10px", margin: "20px auto" }}
          />
          <Title style={{ textAlign: "center" }} level={3}>
            Features
          </Title>
          <Paragraph style={{ textAlign: "center" }}>
            Our app offers a range of features to help you manage your projects
            efficiently, including task management, team collaboration, and
            reporting.
          </Paragraph>
        </div>
      </Content>
      <Button type="primary" size="large">
        Get Started
      </Button>
      <Button size="large">
        Learn More <SmileOutlined />
      </Button>
      <Footer style={{ textAlign: "center", Text: "bold" }}>
        <b>Project Management App ©2023 Created by susa@Susasolutions</b>
      </Footer>
    </Layout>
  );
};

export default Home;
