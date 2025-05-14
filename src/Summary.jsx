import { Link } from 'react-router-dom';

export default function SummaryPage() {
  const pemasukan = JSON.parse(localStorage.getItem('pemasukan')) || 0;
  const pengeluaran = JSON.parse(localStorage.getItem('pengeluaran')) || 0;

  const totalPemasukan = pemasukan;
  const totalPengeluaran = pengeluaran;

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow rounded">
      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">
        Back
      </Link>
      
      <h1 className="text-2xl font-bold mb-4">Summary</h1>
      <div className="space-y-2">
        <p className="text-lg">Total Pemasukan: <span className="font-semibold">Rp{totalPemasukan.toLocaleString()}</span></p>
        <p className="text-lg">Total Pengeluaran: <span className="font-semibold">Rp{totalPengeluaran.toLocaleString()}</span></p>
        <p className="text-lg">Saldo: <span className={`font-semibold ${totalPemasukan - totalPengeluaran >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          Rp{(totalPemasukan - totalPengeluaran).toLocaleString()}
        </span></p>
      </div>
    </div>
  );
}

