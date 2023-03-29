import { ReactElement, ReactNode } from "react";
import { Header } from "@/components";
import { Outlet } from "react-router-dom";

const Layout = (): ReactElement => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
