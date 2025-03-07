import { useState, useEffect } from "react";
import useLicenseStore from "../store/useLicenseStore";

export default function Home() {
  const { licenses, fetchLicenses, filterText, setFilterText, addLicense } = useLicenseStore();
  const [newLicense, setNewLicense] = useState("");

  useEffect(() => {
    fetchLicenses(); // fetch data ONCE page loads
  }, []);

  const filteredLicenses = licenses.filter((item) => {
      return item.name.toLowerCase().includes(filterText.toLowerCase());
  })

  const handleAdd = () => {
    if(newLicense.trim()) {
      addLicense(newLicense);
      setNewLicense(""); //reset input
    }
  }


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Licensing Dashboard</h1>
        
        {/* Add New License Input + Button */}
          <div className="flex gap-2 justify-center items-center">
            <input 
              type="text"
              placeholder="Add new license"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={newLicense}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAdd();
                }
              }}
              onChange={(e) => {
                setNewLicense(e.target.value);
              }}
            />
            <input 
              type="button" value="+"
              className="bg-green-300 font-bold px-4 py-2 text-white text-2xl rounded-md hover:bg-gray-400 transition" 
              onClick={() => handleAdd()}
            />
          </div>
        
        {/** Search Input + Reset button */}
        <div className="flex gap-2 mb-4 mt-10">
          <input
            type="text"
            placeholder="Search licenses..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}

            className="w-full p-2 border border-gray-300 rounded-md" />
          <button
            onClick={() => setFilterText("")}
            className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition"
            >
            Reset
          </button>
        </div>

        <ul className="space-y-2">
          {filteredLicenses.length > 0 ? (
              filteredLicenses.map((license) => (
                <li 
                  key={license.id}
                  className="p-3 bg-gray-200 rounded-md text-gray-700"
                >{license.name}</li>
              ))
            ) : (
              <li className="text-gray-500">No Licenses found</li>
            ) 
          }
        </ul>
      </div>
      
    </div>
  );
}
