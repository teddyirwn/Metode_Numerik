import { MoveLeft } from "lucide-react";

export default function PageHeader({ title, description }) {
  return (
    <div className="mb-6 px-2 sm:px-0">
      <a
        href="/"
        className="text-blue-400 text-xs sm:text-sm hover:underline inline-flex gap-2"
      >
        <MoveLeft /> Kembali ke Home
      </a>

      <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mt-2 leading-tight">
        {title}
      </h1>

      <p className="text-slate-400 font-mono text-xs sm:text-sm mt-1">
        {description}
      </p>
    </div>
  );
}
