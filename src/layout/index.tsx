import { Content } from "./content";
import { Footer } from "./footer";
import { Topbar } from "./topbar";

export const Layout = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Topbar />
      <Content />
      <Footer />
    </div>
  );
};
