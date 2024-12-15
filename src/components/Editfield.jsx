import { useState } from "react";

export default function Editfields() {
  const [fieldData, setFieldData] = useState({
    name: "Test",
    variety: "BG-305",
    sowingDate: "2024-03-04",
    season: "Yala",
    district: "Mannar",
  });

  const handleInputChange = (field, value) => {
    setFieldData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Field data:", fieldData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Edit Field</h2>
      <div className="grid gap-6 md:grid-cols-[1fr,300px]">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-200 rounded-lg shadow">
          <div className="absolute inset-0">
            <img
              src="assets/Editfields_imagejpg.jpg"
              alt="Field map"
              className="w-full h-full object-cover"
            />
            {/* Map interaction points would go here */}
            <div className="absolute inset-0 pointer-events-none border-2 border-dashed border-green-500 m-12" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Field Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={fieldData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Enter field name"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Variety
            </label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={fieldData.variety}
              onChange={(e) => handleInputChange("variety", e.target.value)}
            >
              <option value="BG-305">BG-305</option>
              <option value="BG-300">BG-300</option>
              <option value="BG-310">BG-310</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Sowing Date
            </label>
            <input
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={fieldData.sowingDate}
              onChange={(e) => handleInputChange("sowingDate", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Season
            </label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={fieldData.season}
              onChange={(e) => handleInputChange("season", e.target.value)}
            >
              <option value="Yala">Yala</option>
              <option value="Maha">Maha</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              District
            </label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={fieldData.district}
              onChange={(e) => handleInputChange("district", e.target.value)}
            >
              <option value="Mannar">Mannar</option>
              <option value="Jaffna">Jaffna</option>
              <option value="Kilinochchi">Kilinochchi</option>
              <option value="Mullaitivu">Mullaitivu</option>
            </select>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
