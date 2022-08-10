import { Outlet } from "react-router-dom";
function Home() {
  return (
    <div className="d-flex">
      <Outlet />
    </div>
  );
}

export default Home;
