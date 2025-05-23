import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import CoursesPage from "./pages/courses/CoursesPage";
import ContactPage from "./pages/contact/ContactPage";
import OrderPage from "./pages/order/OrderPage";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="services" element={<OrderPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
