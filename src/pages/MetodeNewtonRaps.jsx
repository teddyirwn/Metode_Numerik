import useNewtonRaph from "../hooks/useNewtonRaps";
import PageHeader from "../components/methodPageLayout/PageHeader";
import ActionButtons from "../components/methodPageLayout/ActionButtons";
import FunctionGraph from "../components/methodPageLayout/FunctionGraph";
import IterationTable from "../components/methodPageLayout/IterationTable";
import ParameterInput from "../components/methodPageLayout/ParametrInput";

export default function MetodeNewton() {
  const solver = useNewtonRaph();

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
      <PageHeader
        title="Metode Newton-Raphson"
        description="Pendekatan akar dengan interpolasi linear"
      />

      {/* Panel Input + Tombol + Grafik */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Input + Tombol */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <ParameterInput
            method="newton"
            values={solver.values}
            onChange={solver.onChange}
          />
          <ActionButtons run={solver.iterate} />
        </div>

        {/* Grafik */}
        <div className="w-full lg:w-2/3">
          <FunctionGraph
            f={solver.graph}
            points={solver.points}
            root={solver.root}
            method="newton"
          />
        </div>
      </div>

      {/* Tabel Iterasi */}
      <div className="mt-6 w-full overflow-x-auto">
        <IterationTable
          columns={[
            "iter",
            "x",
            "fx",
            "f'x",
            "s0.1",
            "s0.01",
            "s0.001",
            "s0.0001",
          ]}
          data={solver.history}
        />
      </div>
    </div>
  );
}
