export default function Header() {
    return (
      <header className="flex items-center gap-5 justify-center p-4  border-b border-slate-700 mb-6">
        <img
          src="/image/fx.png"
          alt=""
          className="w-10 text-white invert sepia saturate-200 hue-rotate-180"
        />
        <h1 className="text-xl font-semibold">Metode Numerik</h1>
      </header>
    );
}