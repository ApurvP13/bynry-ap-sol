import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Hero from "./pages/Hero";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/profiles" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}
