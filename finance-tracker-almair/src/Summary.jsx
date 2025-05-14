import { Link } from 'react-router-dom';

export default function SummaryPage() {
  const pemasukan = JSON.parse(localStorage.getItem('pemasukan')) || [];
  const pengeluaran = JSON.parse(localStorage.getItem('pengeluaran')) || [];

  const totalPemasukan = pemasukan
  const totalPengeluaran = pengeluaran

  return (
    <div>
      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
        Back
      </Link>
      
      <h1>Summary</h1>
      <p>Total Pemasukan: {totalPemasukan}</p>
      <p>Total Pengeluaran: {totalPengeluaran}</p>
      <p>Saldo: {totalPemasukan - totalPengeluaran}</p>
    </div>
  );
}


