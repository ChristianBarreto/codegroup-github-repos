import { Outlet } from "react-router-dom";
import Header from "../organisms/Header";

export default function MainTemplate() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}