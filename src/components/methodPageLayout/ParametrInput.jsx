import { PARAMETER_CONFIG } from "../../utils/parameterConfig";

export default function ParameterInput({ method, values, onChange }) {
  const fields = PARAMETER_CONFIG[method];

  if (!fields) {
    return (
      <div className="bg-red-800 text-white p-3 rounded">
        Config parameter <b>{method}</b> tidak ditemukan
      </div>
    );
  }

  return (
    <div className="bg-slate-800 p-4 rounded-md w-80 sm:w-72 flex flex-col gap-3">
      <h3 className="text-lg sm:text-base md:text-lg font-bold border-b pb-1">
        Parameter
      </h3>

      {fields.map((f) => (
        <div key={f.key} className="flex flex-col gap-1">
          <label className="text-sm sm:text-base">{f.label}</label>
          <input
            type="number"
            step={f.step}
            value={values?.[f.key] ?? ""}
            onChange={(e) => onChange(f.key, e.target.value)}
            className="p-2 sm:p-2.5 bg-slate-900 rounded text-sm sm:text-base"
          />
        </div>
      ))}
    </div>
  );
}
