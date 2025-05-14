export default function SummaryPage() {
    localStorage.getItem('pemasukan') === null
        ? localStorage.setItem('pemasukan', JSON.stringify([]))
        : null;

    localStorage.getItem('pengeluaran') === null
        ? localStorage.setItem('pengeluaran', JSON.stringify([]))
        : null;

  return (
    <div>
      <h1>Summary</h1>
      
    </div>
  );
}
