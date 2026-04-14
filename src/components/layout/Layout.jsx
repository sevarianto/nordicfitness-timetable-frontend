// src/components/layout/Layout.jsx
// Hoved-layout – wrapper rundt alle sider

import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-nf-lys font-sans text-nf-tekst">
      <Header />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;