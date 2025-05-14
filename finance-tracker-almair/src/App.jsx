import { Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">Finance Tracker</h1>
      <p className="text-2xl">Welcome to the Finance Tracker App!</p>
      <Link
        to="/form"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Add Transaction
      </Link>
      <Link
        to="/summary"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        View Summary
      </Link>
    </div>
  );
}
export default App;
