import React from "react";
import { Result, Button } from "antd";

const NotFound = () => {
  return (
    <Result
      status="404"
      title="404 Not Found"
      subTitle="Sorry, the page you are looking for does not exist."
      extra={
        <Button type="primary" href="/">
          Back Home
        </Button>
      }
      style={{
        backgroundImage: "url('https://example.com/background-image.jpg')",
        backgroundSize: "cover",
        height: "100vh",
      }}
    />
  );
};

export default NotFound;
