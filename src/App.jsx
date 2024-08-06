import { useState } from "react";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";

function App() {
  const [sideBarToggle,setSideBarToggle] = useState(false);
  return (
    <>
      <div className="flex">
        <SideBar sideBarToggle={sideBarToggle}/>
        <Dashboard sideBarToggle={sideBarToggle} setSideBarToggle={setSideBarToggle}/>
      </div>
    </>
  );
}

export default App;
