import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Visit from "./pages/Visit";
import Chat from "./pages/Chat";
import New from "./pages/New";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/s/:City" element={<Home />} />
      <Route path="/Category/:id" element={<Category />} />
      <Route path="/New" element={<New />} />
      <Route path="/Visit" element={<Visit />} />
      <Route path="/Chat" element={<Chat />} />
      <Route path="/Help" element={<Help />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
