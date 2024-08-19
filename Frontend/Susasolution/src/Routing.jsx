import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./Components/Login/Signin";
import Home from "./Components/Home";
import MainLayout from "./Components/MainLayout";
import Projects from "./Components/Projects";
import Signup from "./Components/Login/Signup";
import AddCards from "./Components/AddCards";
import NotFound from "./Components/NotFound";
function Routing() {
    


    return (
      <>
        <Router>
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/" element={<MainLayout />}>
              <Route index element={<Projects />} />
              <Route path="projects" element={<Projects />} />
              <Route path="addcards" element={<AddCards />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </>
    );
}

export default Routing