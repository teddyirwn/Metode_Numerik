import { useState } from "react";

// ubah string menjadi fungsi JS
const parseFunction = (fxStr) => new Function("x", `return ${fxStr};`);

// Turunan numerik (central difference)
const derivative =
  (f, h = 1e-6) =>
  (x) =>
    (f(x + h) - f(x - h)) / (2 * h);

// Status berdasarkan |f(x)| seperti Python
const getStatus = (fx, tol) => (Math.abs(fx) <= tol ? "Berhenti" : "Lanjut");

export function useNewtonRaph() {
  const [values, setValues] = useState({
    fx: "Math.exp(-x) - x", // f(x) = e^-x - x
    x0: 0,
    maxIter: 10,
  });

  const [history, setHistory] = useState([]);
  const [points, setPoints] = useState([]);
  const [root, setRoot] = useState(null);
  const [iteration, setIteration] = useState(0);

  const onChange = (key, value) =>
    setValues((v) => ({ ...v, [key]: Number(value) }));

  const iterate = () => {
    const f = parseFunction(values.fx);
    const fPrime = derivative(f);

    let x0 = values.x0;
    const newHistory = [];
    const newPoints = [];
    const tolerances = [0.1, 0.01, 0.001, 0.0001];

    for (let i = 1; i <= values.maxIter; i++) {
      const fxVal = f(x0);
      const fpxVal = fPrime(x0);

      if (fpxVal === 0) {
        alert("Turunan nol! Iterasi dihentikan.");
        break;
      }

      const x1 = x0 - fxVal / fpxVal;

      // Status tiap toleransi
      const statusCols = {};
      tolerances.forEach((t) => {
        statusCols[`s${t}`] = getStatus(fxVal, t);
      });

      // Push ke history (tabel)
      newHistory.push({
        iter: i,
        x: x0.toFixed(8),
        fx: fxVal.toFixed(8),
        fpx: fpxVal.toFixed(8),
        ...statusCols,
      });

      // Push ke points untuk FunctionGraph
      newPoints.push({ x: x0, fx: fxVal });

      x0 = x1;
      // **Jangan break** agar iterasi tetap sampai maxIter
    }

    setHistory(newHistory);
    setPoints(newPoints);
    setIteration(newHistory.length);
    setRoot(x0);
  };

  const reset = () => {
    setHistory([]);
    setPoints([]);
    setRoot(null);
    setIteration(0);
  };

  return {
    values,
    onChange,
    iterate,
    reset,
    history,
    points,
    root,
    status: { iteration, root },
    graph: parseFunction(values.fx),
    method: "newton",
  };
}

export default useNewtonRaph;
