import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AccessibilityToolbar from "@/components/AccessibilityToolbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <AccessibilityToolbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
