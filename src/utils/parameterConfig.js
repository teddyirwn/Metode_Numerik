export const PARAMETER_CONFIG = {
  biseksi: [
    { key: "a", label: "a", type: "number" },
    { key: "b", label: "b", type: "number" },
    { key: "tol", label: "Toleransi", type: "number", step: 0.0001 },
    { key: "maxIter", label: "Max Iterasi", type: "number" },
  ],

  secant: [
    { key: "x0", label: "x₀", type: "number" },
    { key: "x1", label: "x₁", type: "number" },
    { key: "maxIter", label: "Max Iterasi", type: "number" },
  ],

  newton: [
    { key: "x0", label: "Tebakan Awal", step: 0.01 },
    { key: "maxIter", label: "Max Iterasi", step: 1 },
  ],
};
