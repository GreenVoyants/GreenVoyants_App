import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ResultsSection = () => {
  const [openSections, setOpenSections] = useState({
    yield: true,
    weather: false,
    soil: false,
    misc: false,
    suggestions: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const AccordionItem = ({ title, content, isOpen, section }) => (
    <div className="bg-white rounded-lg shadow-sm mb-3 overflow-hidden border">
      <button
        onClick={() => toggleSection(section)}
        className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg font-medium text-gray-900">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t border-gray-100">
          <div className="text-sm text-gray-600">{content}</div>
        </div>
      )}
    </div>
  );

  return (
    <div className="flex justify-center items-center w-3/4">
      <div className="bg-gray-50 p-10 rounded-2xl w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Results</h2>

        <AccordionItem
          title="Predicted Yield"
          content={<div className="font-mono">0.4569 kg/hec</div>}
          isOpen={openSections.yield}
          section="yield"
        />

        <AccordionItem
          title="Acquired Weather data Analysis"
          content={
            <div className="space-y-2">
              <p>Temperature: 25°C (Average)</p>
              <p>Humidity: 65%</p>
              <p>Precipitation: 120mm (Last 30 days)</p>
            </div>
          }
          isOpen={openSections.weather}
          section="weather"
        />

        <AccordionItem
          title="Acquired Soil data Analysis"
          content={
            <div className="space-y-2">
              <p>pH Level: 6.5</p>
              <p>Nitrogen Content: Medium</p>
              <p>Organic Matter: 3.2%</p>
            </div>
          }
          isOpen={openSections.soil}
          section="soil"
        />

        <AccordionItem
          title="Other Miscellaneous features Analysis"
          content={
            <div className="space-y-2">
              <p>Weed Pressure: Low</p>
              <p>Pest Activity: Minimal</p>
              <p>Field Drainage: Good</p>
            </div>
          }
          isOpen={openSections.misc}
          section="misc"
        />

        <AccordionItem
          title="Suggestions"
          content={
            <div className="space-y-2">
              <p>1. Consider increasing irrigation frequency</p>
              <p>2. Monitor nitrogen levels closely</p>
              <p>3. Maintain current pest control measures</p>
            </div>
          }
          isOpen={openSections.suggestions}
          section="suggestions"
        />
      </div>
    </div>
  );
};

export default ResultsSection;
