import { useState } from "react";

const f = (x) => -Math.exp(-x) + x;
const fPrime = (x) => Math.exp(-x) + 1;

// status per toleransi
const getStatus = (fx, tol) => (Math.abs(fx) <= tol ? "Berhenti" : "Lanjut");

export function useNewtonRaph() {
  const [values, setValues] = useState({
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
    let x0 = values.x0;
    const newHistory = [];
    const newPoints = [];
    const visualTolerances = [0.1, 0.01, 0.001, 0.0001];

    for (let i = 1; i <= values.maxIter; i++) {
      const fxVal = f(x0);
      const fpxVal = fPrime(x0);

      if (fpxVal === 0) {
        alert("Turunan nol! Iterasi dihentikan.");
        break;
      }

      const x1 = x0 - fxVal / fpxVal;

      // status tiap toleransi
      const statusCols = {};
      visualTolerances.forEach((t) => {
        statusCols[`s${t}`] = getStatus(fxVal, t);
      });

      newHistory.push({
        iter: i,
        x: x0.toFixed(8),
        fx: fxVal.toFixed(8),
        "f'x": Number(fpxVal.toFixed(8)),
        ...statusCols,
        xNext: x1.toFixed(8),
      });

      newPoints.push({ x: x0, y: fxVal });

      x0 = x1; // update x
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
    graph: f,
    method: "newton",
  };
}

export default useNewtonRaph;
