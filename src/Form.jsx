import { useState } from "react";

const Form = ({ onAddTransaction }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi form
    if (!description.trim()) {
      setError("Deskripsi tidak boleh kosong.");
      return;
    }
    if (!amount || parseFloat(amount) <= 0) {
      setError("Jumlah harus lebih dari 0.");
      return;
    }
    if (!type) {
      setError("Pilih jenis transaksi.");
      return;
    }

    // Buat objek transaksi
    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type,
    };

    onAddTransaction(newTransaction); // Kirim ke App.js

    // Reset form
    setDescription("");
    setAmount("");
    setType("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Tambah Transaksi</h2>

      {error && <div className="text-red-600">{error}</div>}

      <div>
        <label className="block font-medium">Deskripsi</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Contoh: Makan Siang"
        />
      </div>

      <div>
        <label className="block font-medium">Jumlah</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Contoh: 50000"
        />
      </div>

      <div>
        <label className="block font-medium">Jenis Transaksi</label>
        <div className="flex gap-4 mt-1">
          <label>
            <input
              type="radio"
              name="type"
              value="pemasukan"
              checked={type === "pemasukan"}
              onChange={(e) => setType(e.target.value)}
            />
            <span className="ml-1">Pemasukan</span>
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="pengeluaran"
              checked={type === "pengeluaran"}
              onChange={(e) => setType(e.target.value)}
            />
            <span className="ml-1">Pengeluaran</span>
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Tambah Transaksi
      </button>
    </form>
  );
};

export default Form;
