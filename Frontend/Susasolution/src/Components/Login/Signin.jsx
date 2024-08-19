import { useState } from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "../Axios/axios"; // Add axios for making API requests

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

const handleSubmit = async () => {
  try {
    const response = await axios.post("/signup/signin", {
      email: username,
      password: password,
    });
    if (response.status === 200) {
      const userData = response.data.user; // Get the user object from the response
      localStorage.setItem("user", JSON.stringify(userData)); // Save the user data to local storage
      navigate("/"); // Redirect to the dashboard page after signin
    } else {
      setError("Invalid email or password");
    }
  } catch (error) {
    setError("Error signing in");
  }
};
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#f0f0f0",
        padding: "20px",
      }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          width: "300px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Form layout="vertical">
          <h1>Susasolutions</h1>
          <Form.Item label="Username">
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Password">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <Form.Item>
            <Button type="primary" onClick={handleSubmit}>
              Signin
            </Button>
            <span
              style={{ paddingLeft: "50%", color: "purple" }}
              onClick={() => navigate("/signup")}
            >
              signup
            </span>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Signin;
