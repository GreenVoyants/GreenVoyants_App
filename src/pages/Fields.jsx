import React from "react";
import Sidebar from "../components/Sidebar";
import EditFields from "../components/Editfield";

function Fields() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex relative">
        <Sidebar />
        <EditFields />
      </div>
    </div>
  );
}

export default Fields;
