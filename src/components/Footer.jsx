import { BookText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-0 mt-10 border-t pt-5 px-4 sm:px-10 pb-5 text-sm sm:text-base text-slate-500">
      <div className="flex items-center gap-3">
        <BookText className="w-5 h-5" />
        <div>
          <h3 className="font-semibold">Teddy Irawan</h3>
          <p>Nim : 3202416060</p>
        </div>
      </div>

      <div className="text-center sm:text-left">
        <h3 className="font-semibold">Teknik Informatika</h3>
        <p>@ 2026 Mata Kuliah Metode Numerik</p>
      </div>

      <div className="text-center sm:text-left">
        <h3 className="font-semibold">Choky Ananta</h3>
        <p>Nim : 3202416060</p>
      </div>
    </footer>
  );
}
