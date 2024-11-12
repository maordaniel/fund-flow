import { IoMdRefresh } from "react-icons/io";

const DataUnavailable = () => {
  const handleRefresh = () => window.location.reload();

  return (
    <div className="flex justify-center items-center h-screen flex flex-col items-center">
      <p className="text-2xl font-bold text-gray-700 bg-blue-100 p-8 rounded-lg shadow-lg flex items-center">
        No data available
        <button onClick={handleRefresh} className="ml-3">
          <IoMdRefresh />
        </button>
      </p>
    </div>
  );
};

export default DataUnavailable;
