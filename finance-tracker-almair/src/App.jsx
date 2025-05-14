import { Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">Finance Tracker</h1>
      <p className="text-2xl">Welcome to the Finance Tracker App!</p>
      <div className="mt-8 space-x-4">
        <Link
          to="/form"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Do Transactions
        </Link>
        <Link
          to="/summary"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Summary
        </Link>
      </div>
    </div>
  );
}
export default App;
