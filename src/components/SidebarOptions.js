import { Add } from "@material-ui/icons";
import React from "react";
import "./SidebarOption.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="car.jpeg"
          alt=""
        />
        <p>CARS</p>
      </div>

      <div className="sidebarOption">
        <img
          src="bike.jpeg"
          alt=""
        />

        <p>BIKES</p>
      </div>
      <div className="sidebarOption">
        <img
          src="truck.jpeg"
          alt=""
        />
        <p>TRUCKS</p>
      </div>

      <div className="sidebarOption">
        <img
          src=""
          alt=""
        />
        
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;
