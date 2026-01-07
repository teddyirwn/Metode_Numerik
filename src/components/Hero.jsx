export default function Hero() {
    return (
      <div className="flex flex-col items-center justify-center w-full  mt-5">
        <p className="px-2 py-1 rounded-full border bg-gray-500  text-sm"> <span className="p-7rounded-full  bg-blue-900"> a</span> Aplikasi Pembelajaran</p>
        <h1 className="text-7xl font-bold">Visualisasi Metode Numerik</h1>
        <h2 className="text-7xl font-bold text-blue-500">
          Pencarian Akar Persamaan{" "}
        </h2>
        <div className="text-slate-500 text-center mt-5 font-mono">
          <p >
            Pelajari dan Simulasikan algoritma Pencarian akar dengan Visualisasi
            interaktif.
          </p>
          <span>Pilih salah satu untuk Memulai.</span>
        </div>
      </div>
    );
 }