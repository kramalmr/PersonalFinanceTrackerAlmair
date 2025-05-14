import { useState, useEffect } from "react";
import Form from "./Form";

function App() {
  const [transactions, setTransactions] = useState([]);

  // Ambil data dari localStorage saat pertama kali dimuat
  useEffect(() => {
    const savedTransactions = localStorage.getItem("transactions");
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  // Simpan ke localStorage setiap kali transaksi berubah
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const handleAddTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  return (
    <div className="p-4">
      <Form onAddTransaction={handleAddTransaction} />
      <ul className="mt-6 space-y-2">
        {transactions.map((t) => (
          <li key={t.id} className="border p-2 rounded shadow">
            {t.description} - Rp{t.amount.toLocaleString()} ({t.type})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
