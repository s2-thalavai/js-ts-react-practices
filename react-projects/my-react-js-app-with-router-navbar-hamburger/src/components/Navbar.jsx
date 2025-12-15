import { NavLink, useLocation } from "react-router-dom";
import { useState, useCallback } from "react";

export default function Navbar({ role = "user" }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Hide navbar on login pages
  if (pathname.startsWith("/login")) return null;

  const linkStyle = useCallback(
    ({ isActive }) => ({
      padding: "12px 16px",
      textDecoration: "none",
      color: isActive ? "#1976d2" : "#333",
      fontWeight: isActive ? "600" : "400",
      display: "block",
    }),
    []
  );

  return (
    <>
      {/* Top Bar */}
      <header style={styles.header}>
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          style={styles.hamburger}
        >
          ☰
        </button>
        <h3 style={styles.logo}>MyApp</h3>
      </header>

      {/* Overlay */}
      {open && <div style={styles.overlay} onClick={() => setOpen(false)} />}

      {/* Side Nav */}
      <aside
        style={{
          ...styles.sideNav,
          transform: open ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          style={styles.close}
        >
          ✕
        </button>

        <nav>
          <NavLink to="/" style={linkStyle} onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/about" style={linkStyle} onClick={() => setOpen(false)}>
            About
          </NavLink>

          <NavLink to="/dashboard" style={linkStyle} onClick={() => setOpen(false)}>
            Dashboard
          </NavLink>

          {role === "admin" && (
            <NavLink to="/admin" style={linkStyle} onClick={() => setOpen(false)}>
              Admin
            </NavLink>
          )}
        </nav>
      </aside>
    </>
  );
}

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px",
    borderBottom: "1px solid #ddd",
  },
  hamburger: {
    fontSize: "22px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  logo: {
    margin: 0,
  },
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    zIndex: 998,
  },
  sideNav: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "240px",
    height: "100%",
    background: "#fff",
    boxShadow: "2px 0 6px rgba(0,0,0,0.2)",
    paddingTop: "16px",
    transition: "transform 0.3s ease",
    zIndex: 999,
  },
  close: {
    marginLeft: "auto",
    marginRight: "12px",
    marginBottom: "16px",
    background: "none",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    display: "block",
  },
};
