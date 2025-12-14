import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="relative bg-[#F3F6FB] min-h-screen dark:bg-[var(--color-darkPrimary)] w-full ">
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
