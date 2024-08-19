// import { Form, Input, Upload, Table, Button, Modal } from "antd";
// import axios from "./Axios/axios";
// import { useEffect, useState } from "react";

// const AddCards = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [form] = Form.useForm();
//   const [editingProject, setEditingProject] = useState({});
//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("/api/projects/all");
//       setProjects(response.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCreateProject = async (values) => {
//     try {
//       const formData = new FormData();
//       formData.append("title", values.title);
//       formData.append("link", values.link);
//       formData.append("description", values.description);
//       formData.append("image", file);

//       const response = await axios.post("/api/projects/create", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       setProjects([...projects, response.data]);
//       form.resetFields();
//       setFile(null); // reset the file state
//     } catch (error) {
//       console.error(error);
//       // Handle error here
//     }
//   };

//   const handleUpdateProject = async (id, values) => {
//     try {
//       const formData = new FormData();
//       formData.append("title", values.title);
//       formData.append("link", values.link);
//       formData.append("description", values.description);

//       if (file) {
//         formData.append("image", file);
//       } else {
//         // If file is null, don't update the image
//         formData.append("image", editingProject.image);
//       }

//       // ...
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const handleDeleteProject = async (id) => {
//     try {
//       await axios.delete(`/api/projects/delete/${id}`);
//       setProjects(projects.filter((project) => project._id !== id));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const columns = [
//     {
//       title: "Title",
//       dataIndex: "title",
//       key: "title",
//     },
//     {
//       title: "Link",
//       dataIndex: "link",
//       key: "link",
//     },
//     {
//       title: "Description",
//       dataIndex: "description",
//       key: "description",
//     },
//     {
//       title: "Image",
//       dataIndex: "image",
//       key: "image",
//       render: (text) => <img src={text} alt="project image" />,
//     },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (text, record) => (
//         <div>
//           <Button
//             onClick={() => {
//               setModalVisible(true);
//               setEditingProject(record);
//               setFile(null); // Reset the file state to null
//             }}
//           >
//             Edit
//           </Button>
//           <Button type="danger" onClick={() => handleDeleteProject(record._id)}>
//             Delete
//           </Button>
//         </div>
//       ),
//     },
//   ];

//   const handleFileChange = (info) => {
//     if (info.file.status === "done") {
//       setFile(info.file.originFileObj);
//     } else {
//       setFile(info.file.originFileObj); // Update the file state with the new file object
//     }
//   };

//   return (
//     <div>
//       <Form
//         form={form}
//         onFinish={handleCreateProject}
//         style={{
//           border: "1px ridge #ddd",
//           padding: "20px",
//           margin: "25vh",
//           borderRadius: "10px",
//           boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <h1>Add Projects</h1>
//         <Form.Item name="title" label="Title">
//           <Input placeholder="Enter title" />
//         </Form.Item>
//         <Form.Item name="link" label="Link">
//           <Input placeholder="Enter link" />
//         </Form.Item>
//         <Form.Item name="description" label="Description">
//           <Input.TextArea placeholder="Enter description" />
//         </Form.Item>
//         <Form.Item label="Image">
//           <Upload
//             name="image"
//             action="/api/projects/create"
//             listType="picture"
//             onChange={handleFileChange}
//           >
//             <button>Upload Image</button>
//           </Upload>
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" htmlType="submit">
//             Create Project
//           </Button>
//         </Form.Item>
//       </Form>

//       <Table
//         columns={columns}
//         dataSource={projects}
//         loading={loading}
//         rowKey="_id"
//       />

//       <Modal
//         title="Edit Project"
//         visible={modalVisible}
//         onOk={() => setModalVisible(false)}
//         onCancel={() => setModalVisible(false)}
//       >
//         <Form
//           form={form}
//           initialValues={editingProject}
//           onFinish={(values) => handleUpdateProject(editingProject._id, values)}
//         >
//           <Form.Item label="Title">
//             <Input placeholder="Enter title" />
//           </Form.Item>

//           <Form.Item label="Link">
//             <Input placeholder="Enter link" />
//           </Form.Item>
//           <Form.Item label="Description">
//             <Input.TextArea placeholder="Enter description" />
//           </Form.Item>
//           <Form.Item label="Image">
//             <Upload
//               name="image"
//               action="/api/projects/create"
//               listType="picture"
//               onChange={handleFileChange}
//             >
//               <button>Upload Image</button>
//             </Upload>
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Update Project
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default AddCards;
