import { Form, Input, Button, Select } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import axios from "../Axios/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
const navigate = useNavigate();
  const handleCreateUser = async (values) => {
    try {
      const formData = new FormData();
      formData.append("userRole", values.userRole);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("panCardImage", file);

      setLoading(true);
      const response = await axios.post("/signup/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("response.data",response.data.message);
      form.resetFields();
      setFile(null); // reset the file state
    if (response.data.message === "User created successfully") {
      navigate("/signin");
    }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Form
        form={form}
        onFinish={handleCreateUser}
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "rgba(0, 0, 0, 0.1) -20px 14px 20px 11px",
          width: "300px",
        }}
      >
        <h1>SignUp</h1>
        <Form.Item label="User Role" name="userRole">
          <Select>
            <Select.Option value="Individual">Individual</Select.Option>
            <Select.Option value="Company">Company</Select.Option>
            <Select.Option value="Partner">Partner</Select.Option>
            
          </Select>
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input prefix={<MailOutlined />} />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password prefix={<LockOutlined />} />
        </Form.Item>
        <Form.Item label="PAN Card Image">
          <input type="file" onChange={handleFileChange} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Sign up
          </Button>
          <span
            onClick={() => navigate("/signin")}
            style={{ color: "purple", marginLeft: "50%" }}
          >
            Signin
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
