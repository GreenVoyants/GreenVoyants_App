import React from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

function Monitor() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex relative">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default Monitor;
