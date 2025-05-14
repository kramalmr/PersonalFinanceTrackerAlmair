import { useState, useEffect } from "react";
import Form from "./Form";
import TransactionList from "./TransactionList";
import { Link } from "react-router-dom";

function TransactionForm() {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );
  const [pemasukan, setPemasukan] = useState(
    JSON.parse(localStorage.getItem("pemasukan")) || 0
  );
  const [pengeluaran, setPengeluaran] = useState(
    JSON.parse(localStorage.getItem("pengeluaran")) || 0
  );

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    localStorage.setItem("pemasukan", JSON.stringify(pemasukan));
    localStorage.setItem("pengeluaran", JSON.stringify(pengeluaran));
  }, [transactions, pemasukan, pengeluaran]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions((prev) => [...prev, newTransaction]);
    if (newTransaction.type === "pemasukan") {
      setPemasukan((prev) => prev + newTransaction.amount);
    } else if (newTransaction.type === "pengeluaran") {
      setPengeluaran((prev) => prev + newTransaction.amount);
    }
  };

  const handleDeleteTransaction = (id) => {
    const updated = transactions.filter((t) => t.id !== id);
    setTransactions(updated);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="flex items-center justify-center">
        <Link to="/" className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </Link>
      </div>
      <Form onAddTransaction={handleAddTransaction} />
      <TransactionList
        transactions={transactions}
        onDeleteTransaction={handleDeleteTransaction}
      />
    </div>
  );
}

export default TransactionForm;

