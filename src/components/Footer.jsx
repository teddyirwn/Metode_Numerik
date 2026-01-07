import { BookText } from "lucide-react";

export default function Footer() {
    return (
      <footer className="flex justify-between  mt-10 border-t pt-5 px-10 pb-5 text-sm text-slate-500">
        <div className="flex items-center gap-3">
          <BookText className="w-5 h-5" />
          <div>
            <h3>Teddy Irawan</h3>
            <p>Nim : 3202416060</p>
          </div>
        </div>
        <div>
          <h3>Teknik Informatika</h3>
          <p>@ 2026 Mata Kuliah Metode Numerik</p>
        </div>
        <div>
          <h3>Choky Ananta</h3>
          <p>Nim : 3202416060</p>
        </div>
      </footer>
    );
}