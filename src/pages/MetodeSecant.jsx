import ActionButtons from "../components/methodPageLayout/ActionButtons";
import FunctionGraph from "../components/methodPageLayout/FunctionGraph";
import IterationTable from "../components/methodPageLayout/IterationTable";
import PageHeader from "../components/methodPageLayout/PageHeader";
import ParameterInput from "../components/methodPageLayout/ParametrInput";
import StatusPanel from "../components/methodPageLayout/StatusPanel";
import { useSecant } from "../hooks/useSecant";

export default function MetodeSecant() {
  const solver = useSecant();

  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-16 py-8">
      <PageHeader
        title="Metode Secant"
        description="Pendekatan akar dengan interpolasi linear"
      />

      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        <div className="flex flex-col gap-4 w-full lg:w-1/3">
          <div className="z-50">
            <ParameterInput {...solver} />
          </div>
          <ActionButtons {...solver} />
        </div>

        <div className="w-full">
          <FunctionGraph
            f={(x) => x * Math.exp(-x) + Math.cos(2 * x)}
            points={solver.points}
            root={solver.status.root}
          />
        </div>
      </div>

      {/* Tabel Iterasi */}
      <div className="mt-6 w-full overflow-x-auto">
        <IterationTable
          columns={["iter", "x", "fx", "s0.1", "s0.01", "s0.001", "s0.0001"]}
          data={solver.history}
        />
      </div>
    </div>
  );
}
