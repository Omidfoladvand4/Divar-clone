// routes/index.js
import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense, memo } from "react";
import Loading from "../features/shared/components/Loading";

const Home = lazy(() => import("../features/home/pages/Home"));
const Category = lazy(() => import("../features/categories/pages/Category"));
const Visit = lazy(() => import("../features/post/pages/Visit"));
const Chat = lazy(() => import("../features/chat/pages/Chat"));
const New = lazy(() => import("../features/post/pages/New"));
const Help = lazy(() => import("../features/shared/pages/Help"));
const NotFound = lazy(() => import("../features/shared/pages/NotFound"));

export const ROUTES = {
  HOME: "/:City/",
  CATEGORY: "/Category/:id",
  NEW_AD: "/New",
  VISIT: "/V/:id",
  CHAT: "/Chat",
  HELP: "/Help",
} 

const routes = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.CATEGORY, element: <Category /> },
  { path: ROUTES.NEW_AD, element: <New /> },
  { path: ROUTES.VISIT, element: <Visit /> },
  { path: ROUTES.CHAT, element: <Chat /> },
  { path: ROUTES.HELP, element: <Help /> },
];

const AppRoutes = memo(() => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Navigate to="/iran" replace />} />
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
});

AppRoutes.displayName = "AppRoutes";

export default AppRoutes;