import ResultsSection from "../components/PredictedResults.jsx";

import React from "react";
import Sidebar from "../components/Sidebar";

function Predictions() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex relative">
        <Sidebar />
        <div className="flex items-center justify-center w-full">
          <ResultsSection />
        </div>
      </div>
    </div>
  );
}

export default Predictions;
