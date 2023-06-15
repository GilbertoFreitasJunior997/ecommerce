import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout";
import { MainPage } from "../pages/main";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/category/:name" element={<>CATEGORY</>} />
        <Route path="*" element={<>404</>} />
      </Route>
    </Routes>
  );
};
