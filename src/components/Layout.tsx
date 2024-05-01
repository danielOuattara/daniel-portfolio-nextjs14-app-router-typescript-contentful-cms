import { Navbar, Sidebar, Footer, Submenu } from "./index";
import "@/assets/css/main.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Submenu />
      {children}
      <Footer />
    </>
  );
}
