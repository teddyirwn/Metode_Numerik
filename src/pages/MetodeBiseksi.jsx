import PageHeader from "../components/methodPageLayout/PageHeader";
import ActionButtons from "../components/methodPageLayout/ActionButtons";
import FunctionGraph from "../components/methodPageLayout/FunctionGraph";
import StatusPanel from "../components/methodPageLayout/StatusPanel";
import IterationTable from "../components/methodPageLayout/IterationTable";
import ParameterInput from "../components/methodPageLayout/ParametrInput";
import { useBiseksi } from "../hooks/useBisection";

export default function MetodeBiseksi() {
  const solver = useBiseksi();

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
      <PageHeader
        title="Metode Biseksi"
        description="Pencarian akar dengan pembagian interval"
      />

      {/* Panel Input + Tombol + Grafik */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Input + Tombol */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <ParameterInput {...solver} />
          <ActionButtons {...solver} />
        </div>

        {/* Grafik */}
        <div className="w-full lg:w-2/3">
          <FunctionGraph
            f={(x) => 0.34 - 26.97 * x + 16.3 * x ** 3 - 6 * x ** 5}
            points={solver.points}
            root={solver.status.root}
            method="biseksi"
          />
        </div>
      </div>

      {/* Status + Tabel */}
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        <div className="w-full lg:w-1/3">
          <StatusPanel {...solver.status} />
        </div>
        <div className="w-full lg:w-2/3 overflow-x-auto">
          <IterationTable
            columns={[
              "iter",
              "a",
              "b",
              "x",
              "fx",
              "fa",
              "keterangan",
              "interval",
              "status",
            ]}
            data={solver.history}
          />
        </div>
      </div>
    </div>
  );
}
