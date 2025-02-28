import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import CoursesPage from "./pages/courses/CoursesPage";
import ContactPage from "./pages/contact/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
