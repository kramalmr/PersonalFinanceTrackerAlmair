import { useState, useEffect } from "react";
import Form from "./Form";
import TransactionList from "./TransactionList";

function App() {
  const [transactions, setTransactions] = useState([]);

  // 🔄 Ambil dari localStorage saat pertama kali aplikasi dimuat
  useEffect(() => {
    const savedTransactions = localStorage.getItem("transactions");
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  // 💾 Simpan ke localStorage setiap kali data transaksi berubah
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // ➕ Tambah transaksi baru
  const handleAddTransaction = (newTransaction) => {
    setTransactions((prev) => [...prev, newTransaction]);
  };

  // ❌ Hapus transaksi berdasarkan ID
  const handleDeleteTransaction = (id) => {
    const updated = transactions.filter((t) => t.id !== id);
    setTransactions(updated);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <Form onAddTransaction={handleAddTransaction} />
      <TransactionList
        transactions={transactions}
        onDeleteTransaction={handleDeleteTransaction}
      />
    </div>
  );
}

export default App;
