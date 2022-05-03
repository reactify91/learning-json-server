import { Outlet } from "react-router-dom";

export default function Create() {
  return (
    <>
      <h1 className="text-2xl text-center my-12">Details Page</h1>
      <Outlet />
    </>
  );
}
