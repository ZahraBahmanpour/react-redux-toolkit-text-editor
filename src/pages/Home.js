import { Outlet } from "react-router-dom";
import SideMenu from "../components/sideMenu/SideMenu";
import Tabs from "../components/tabs/Tabs";
function Home() {
  return (
    <div className="d-flex">
      <SideMenu />
      <Tabs />
      <Outlet />
    </div>
  );
}

export default Home;
