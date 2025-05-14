const TransactionList = ({ transactions, onDeleteTransaction }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Daftar Transaksi</h2>

      {transactions.length === 0 ? (
        <p className="text-gray-600">Belum ada transaksi.</p>
      ) : (
        <ul className="space-y-3">
          {transactions.map((t) => (
            <li
              key={t.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-semibold">{t.description}</p>
                <p className="text-sm text-gray-600">
                  {t.type} - Rp{t.amount.toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => onDeleteTransaction(t.id)}
                className="text-red-600 hover:underline"
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
