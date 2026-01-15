import { AppWindow, ArrowRight, Move3d, NonBinary } from "lucide-react";
import { Link } from "react-router-dom";

export default function Features() {
  const dataCard = [
    {
      icon: AppWindow,
      title: "Metode Secant",
      link: "metode-secant",
      description:
        "Pendekatan sederhana yang membagi area menjadi beberapa bagian grid untuk menemukan perkiraan lokasi akar persamaan.",
    },
    {
      icon: Move3d,
      title: "Metode Biseksi",
      link: "metode-biseki",
      description:
        "Algoritma pencarian akar yang handal dengan membagi interval menjadi dua bagian secara berulang hingga akar ditemukan dengan presisi yang diinginkan.",
    },
    {
      icon: NonBinary,
      title: "Metode Newton-Raphson",
      link: "metode-newton-raphson",
      description:
        "Metode iteratif yang menggunakan turunan fungsi untuk menemukan akar dengan cepat dan presisi tinggi dibanding metode biseksi atau secant.",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 px-4 sm:px-6 lg:px-8 mt-10">
      {dataCard.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className="
              w-full sm:w-[48%] lg:w-[30%]
              group relative flex flex-col h-full p-6 rounded-2xl
              bg-gradient-to-b from-slate-800/80 via-slate-900/90 to-slate-950
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

              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {card.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-400">
                {card.description}
              </p>

              <Link
                to={`/${card.link}`}
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
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
