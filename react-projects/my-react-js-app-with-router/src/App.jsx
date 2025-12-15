import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/dashboard/Overview";
import Users from "./pages/dashboard/Users";
import Settings from "./pages/dashboard/Settings";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      {/* Top Navigation */}
      <nav style={{ display: "flex", gap: "12px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      {/* Application Routes */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Dashboard Layout + Nested Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
