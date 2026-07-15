import { Outlet } from "react-router-dom";
import AppNavbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/layout/WhatsAppButton";

function MainLayout() {
  return (
    <>
      <AppNavbar />

      <main className="min-vh-100">
        <Outlet />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default MainLayout;