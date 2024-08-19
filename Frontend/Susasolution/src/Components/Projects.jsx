import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { Buffer } from "Buffer";
import { Layout, Typography, Button, Space, Image } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Project = () => {
  const navigate = useNavigate(); // Move this line inside the component
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(9);

  useEffect(() => {
    fetch("http://localhost:3000/api/projects/all")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <Title style={{ textAlign: "center" }} level={2}>
            <b> Welcome to Project Management App</b>
          </Title>

          <Space style={{ textAlign: "center", marginTop: "2rem" }}></Space>
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {currentProjects.map((project) => (
              <Card
                hoverable
                style={{ width: 300, margin: "10px" }}
                cover={
                  <img
                    alt="example"
                    src={`data:${
                      project.image.contentType
                    };base64,${Buffer.from(project.image.data).toString(
                      "base64"
                    )}`}
                  />
                }
                onClick={() => {
                  const userData = localStorage.getItem("user");
                  let userRole = null;
                  if (userData) {
                    userRole = JSON.parse(userData).userRole;
                  }
                  if (!userData || !userRole) {
                    navigate("/signup"); // Redirect to signup page
                  } else {
                    window.open(project.link, "_blank"); // Open project link in new tab
                  }
                }}
              >
                <Card.Meta
                  title={project.title}
                  description={project.description}
                />
              </Card>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {[1, 2, 3, 4, 5].map((pageNumber) => (
              <Button
                key={pageNumber}
                onClick={() => paginate(pageNumber)}
                type={currentPage === pageNumber ? "primary" : "default"}
              >
                {pageNumber}
              </Button>
            ))}
          </div>
        </div>
      </Content>
      <Button type="primary" size="large">
        Get Started
      </Button>
      <Button size="large">
        Learn More <SmileOutlined />
      </Button>
      <Footer style={{ textAlign: "center", Text: "bold" }}>
        <b>Project Management App 2023 Created by susa@Susasolutions</b>
      </Footer>
    </Layout>
  );
};

export default Project;