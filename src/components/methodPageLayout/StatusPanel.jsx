export default function StatusPanel({
  iteration,
  error,
  root,
  fx,
  stopped,
  statusText,
}) {
  const safeNumber = (val) =>
    typeof val === "number" && !isNaN(val) ? val.toFixed(6) : "-";

  return (
    <div className="rounded-md bg-slate-800 p-4 mt-6 lg:max-w-72 w-full">
      <h3 className="card-title text-white">Status</h3>

      <div className="flex flex-col gap-4 mt-3">
        <div className="flex gap-4">
          <div className="bg-slate-700 p-2 rounded-md w-full">
            <p className="text-sm text-gray-400">Iterasi</p>
            <p className="text-xl font-bold">{iteration ?? "-"}</p>
          </div>

          <div className="bg-slate-700 p-2 rounded-md w-full">
            <p className="text-sm text-gray-400">Error</p>
            <p className="text-xl font-bold text-yellow-400">
              {safeNumber(error)}
            </p>
          </div>
        </div>

        <div className="bg-slate-700 p-2 rounded-md w-full">
          <p className="text-sm text-gray-400">x (Akar Aproksimasi)</p>
          <p className="text-xl font-bold text-green-400">{safeNumber(root)}</p>
        </div>

        <div className="bg-slate-700 p-2 rounded-md w-full">
          <p className="text-sm text-gray-400">f(x)</p>
          <p className="text-xl font-bold text-blue-400">{safeNumber(fx)}</p>
        </div>

        <div
          className={`p-2 rounded-md w-full ${
            stopped ? "bg-green-700" : "bg-slate-700"
          }`}
        >
          <p className="text-sm text-gray-200">Status</p>
          <p className="text-lg font-bold">
            {stopped ? "Berhenti (Konvergen)" : statusText ?? "Menunggu"}
          </p>
        </div>
      </div>
    </div>
  );
}
