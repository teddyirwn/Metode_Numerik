export default function ActionButtons({ run }) {
  return (
    <div className="bg-slate-800 p-4 rounded-md mt-4">
      <button
        className="bg-blue-600 px-4 py-2 rounded-md w-full"
        onClick={run}
        type="button"
      >
        ▶ Proses Otomatis
      </button>
    </div>
  );
}
