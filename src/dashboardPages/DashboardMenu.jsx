import React, { useState } from "react";
import { DASHBOARD_MENU } from "../constants/constants";
import { useLocation, Outlet, useNavigate } from "react-router-dom";

export default function DashboardMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItem = (item) => {
    // Navigate to the selected dashboard page
    console.log("item", item);
    const path = item.toLowerCase().replace(" ", ""); // Convert to path-friendly format
    console.log("pathssss", path);
    navigate(`/dashboard/${path}`);
  };
  return (
    <div className="flex flex-col md:flex-row bg-slate-400 min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <div className="w-full md:w-1/5 p-4 font-bold bg-gray-200 overflow-auto h-[calc(100vh-4rem)]">
        <ul className="p-2">
          {DASHBOARD_MENU.map((item, index) => {
            const path = item.toLowerCase().replace(" ", "");
            const isActive = location.pathname === `/dashboard/${path}`;

            return (
              <li
                key={index}
                className={`cursor-pointer pt-5 pb-5 text-xl border rounded-lg pl-3 
                        ${isActive ? "bg-gray-300" : "hover:bg-gray-300"}`}
                onClick={() => menuItem(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Main Content */}
      <div className="bg-white w-full md:w-4/5 p-4 overflow-auto h-[calc(100vh-4rem)]">
        <Outlet />
      </div>
    </div>
  );
}
