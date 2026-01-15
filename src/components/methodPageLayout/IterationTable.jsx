export default function IterationTable({ columns, data }) {
  if (!data || data.length === 0)
    return (
      <div className="rounded-md bg-slate-800 p-4 mt-6 w-full text-center text-sm sm:text-base">
        Belum ada iterasi
      </div>
    );

  const headerMap = {
    iter: "Iterasi",
    x: "x",
    fx: "f(x)",
    error: "Error",
    status: "Status",
    "s0.1": "Status (0.1)",
    "s0.01": "Status (0.01)",
    "s0.001": "Status (0.001)",
    "s0.0001": "Status (0.0001)",
    a: "a",
    b: "b",
    fa: "f(a)",
    keterangan: "Keterangan",
    interval: "|b - a|",
  };

  return (
    <div className="rounded-md bg-slate-800 p-4 mt-6 w-full">
      <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">
        Riwayat Iterasi
      </h3>

      <div className="overflow-x-auto w-full">
        <table className="w-full mt-2 text-sm sm:text-base">
          <thead className="border-b border-slate-600">
            <tr>
              {columns.map((col) => (
                <th key={col} className="text-left px-2 py-1 text-slate-300">
                  {headerMap[col] ?? col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className="border-b border-slate-700 hover:bg-slate-700/40"
              >
                {columns.map((col) => (
                  <td key={col} className="px-2 py-1 text-white">
                    {row[col] ?? "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
