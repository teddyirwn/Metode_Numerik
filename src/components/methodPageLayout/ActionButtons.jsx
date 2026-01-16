export default function ActionButtons({ run }) {
  return (
    <div className="bg-slate-800 p-4 rounded-md mt-4 lg:w-72 w-full">
      <button
        type="button"
        onClick={run}
        className="
          w-full 
          px-4 py-4
          bg-blue-600 text-white font-semibold
          rounded-md
          hover:bg-blue-500
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1
          transition-colors
        "
      >
        ▶ Proses Otomatis
      </button>
    </div>
  );
}
