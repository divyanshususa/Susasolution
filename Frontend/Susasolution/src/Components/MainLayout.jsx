// MainLayout.js
import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import {
  PieChartOutlined,
  DesktopOutlined,
  InboxOutlined,
  MailOutlined,
} from "@ant-design/icons";

import "./Mainlayout.css";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  
  const userData = localStorage.getItem("user");
  //  console.log("userData", userData);
    let userRole = null;
    if (userData) {
      userRole = JSON.parse(userData).userRole;
      console.log("userRole",userRole)
  }
  
  const navigate = useNavigate();

  return (
    <Layout style={{ height: "200vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={[
            {
              key: "Projects",
              icon: <PieChartOutlined />,
              label: "Projects",
              onClick: () => navigate("/projects"),
            },

            userRole === "Admin" && {
              key: "addcards",
              icon: <PieChartOutlined />,
              label: "AddCards",
              onClick: () => navigate("/addcards"),
            },
            {
              key: "signup",
              icon: <PieChartOutlined />,
              label: "SignUp",
              onClick: () => navigate("/signup"),
            },

            {
              key: "signout",
              icon: <PieChartOutlined />,
              label: "Signout",
              onClick: () => {
                localStorage.removeItem("user"); // Remove the user data from local storage
                navigate("/signin"); // Redirect to the signin page
              },
            },
            // {
            //   key: "3",
            //   icon: <InboxOutlined />,
            //   label: "Option 3",
            // },
            // {
            //   key: "sub1",
            //   icon: <MailOutlined />,
            //   label: "Navigation One",
            //   children: [
            //     {
            //       key: "5",
            //       label: "Option 5",
            //     },
            //     {
            //       key: "6",
            //       label: "Option 6",
            //     },
            //     {
            //       key: "7",
            //       label: "Option 7",
            //     },
            //     {
            //       key: "8",
            //       label: "Option 8",
            //     },
            //   ],
            // },
            // {
            //   key: "sub2",
            //   label: "Navigation Two",
            //   children: [
            //     {
            //       key: "9",
            //       label: "Option 9",
            //     },
            //     {
            //       key: "10",
            //       label: "Option 10",
            //     },
            //     {
            //       key: "sub3",
            //       label: "Submenu",
            //       children: [
            //         {
            //           key: "11",
            //           label: "Option 11",
            //         },
            //         {
            //           key: "12",
            //           label: "Option 12",
            //         },
            //       ],
            //     },
            //   ],
            // },
          ]}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#ffffff",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "rgb(129 150 132)",
            color: "#132461",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              type="text"
              icon={collapsed ? <PieChartOutlined /> : <DesktopOutlined />}
              onClick={toggleCollapsed}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <h1>SusaSolutions... </h1>
            <Button
              style={{ margin: "5px", backgroundColor: "grey" }}
              onClick={() => navigate("/signin")}
            >
              Login
            </Button>
            <Button
              style={{ margin: "5px", backgroundColor: "grey" }}
              onClick={() => navigate("/signup")}
            >
              SiginUp
            </Button>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "#ffffff",
            borderRadius: "8px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
