import React from "react";
import Navbar from "./Navbar";
import Stats from "./Stats";
import StatInfo from "./StatInfo";

const Dashboard = ({ sideBarToggle, setSideBarToggle }) => {
  return (
    <div className={`${sideBarToggle ? "" : "ml-64"} w-full`}>
      <Navbar
        sideBarToggle={sideBarToggle}
        setSideBarToggle={setSideBarToggle}
      />
      <div class="m-4 flex flex-wrap gap-4">
        <div className="column1">
          <div className="flex flex-col flex-wrap">
            <div><Stats/></div>
            <div>chart</div>
            <div>table</div>
          </div>
        </div>
        <div className="column2">
        <div className="flex flex-col flex-wrap">
            <div className="w-full">
              <StatInfo/>
              </div>
            <div>goals</div>
            <div>feedback</div>
          </div>          
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
