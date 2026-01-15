import { Shell } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-5 px-4 sm:px-6 lg:px-8">
      <p className="px-3 py-1 rounded-full border bg-gray-500 text-sm flex items-center mb-3">
        <Shell className="text-blue-400 inline mr-2" />
        Aplikasi Pembelajaran
      </p>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-tight">
        Visualisasi Metode Numerik
      </h1>

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-blue-500 text-center leading-tight mt-2">
        Pencarian Akar Persamaan
      </h2>

      <div className="text-slate-500 text-center mt-5 font-mono max-w-2xl">
        <p className="text-sm sm:text-base md:text-lg">
          Pelajari dan simulasikan algoritma pencarian akar dengan visualisasi
          interaktif.
        </p>
        <span className="text-sm sm:text-base mt-2 inline-block">
          Pilih salah satu untuk memulai.
        </span>
      </div>
    </div>
  );
}
