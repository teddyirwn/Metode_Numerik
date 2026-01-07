import { AppWindow, ArrowRight, Move3d, NonBinary } from "lucide-react";

export default function Features() {
  const dataCard = [
    {
      icon: AppWindow,
      title: "Metode Tabel",
      description:
        "Pendekatan sederhana dengan membagi area menjadi beberapa bagian grid untuk menemukan lokasi akar persamaan secara kasar",
    },
    {
      icon: Move3d,
      title: "Metode Biseksi",
      description:
        "Algoritma pencarian akar yang robust dengan membagi interval menjadi dua bagian hingga akar ditemukan dengan presisi yang diinginkan",
    },
    {
      icon: NonBinary,
      title: "Metode Regula Falsi",
      description:
        "Metode posisi palsu yang memanfaatkan interpolasi linear antara dua titik untuk estimasi akar yang lebih cepat dari biseksi",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 px-9 mt-10">
      {dataCard.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className=" w-3/5
              group relative flex flex-col h-full p-6 rounded-2xl
              bg-linear-to-b from-slate-800/80 via-slate-900/90 to-slate-950
              border border-white/10
              shadow-xl
              hover:-translate-y-1 hover:shadow-2xl 
              transition
            "
          >
            <div
              className="
              absolute inset-0 rounded-2xl
              bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.15)_1px,transparent_0)]
              bg-size-[18px_18px]
              opacity-20
            "
            />

            <div className="relative z-10 flex flex-col h-full gap-4 mt-7">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Icon className="w-6 h-6 text-blue-400" />
              </div>

              <h3 className="text-lg font-semibold text-white">{card.title}</h3>

              <p className="text-sm text-slate-400">{card.description}</p>

              <button
                className="
                  mt-auto flex items-center justify-center gap-2
                  py-3 rounded-xl
                  bg-white/5 border border-white/10
                  hover:bg-white/10
                  transition
                "
              >
                Pilih Metode
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
