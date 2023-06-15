import { Outlet } from "react-router-dom";

export const Content = () => {
  return (
    <main className="flex-grow px-10 py-5 bg-gray-200">
      <Outlet />
    </main>
  );
};
