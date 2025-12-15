import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Skeleton from "./components/Skeleton";
import { routes as getRoutes } from "./routes/routes";

function renderRoutes(routeList, role) {
  return routeList.map(
    ({ path, element, children, roles, index }) => {
      if (roles && !roles.includes(role)) return null;

      return (
        <Route key={path || "index"} path={path} element={element} index={index}>
          {children && renderRoutes(children, role)}
        </Route>
      );
    }
  );
}

export default function App() {
  const isAuth = true;
  const role = "admin";

  return (
    <>
      <Navbar role={role} />

      <Suspense fallback={<Skeleton />}>
        <Routes>{renderRoutes(getRoutes({ isAuth, role }), role)}</Routes>
      </Suspense>
    </>
  );
}