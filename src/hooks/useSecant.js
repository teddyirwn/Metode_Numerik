import { useState } from "react";

export function useSecant() {
  const [values, setValues] = useState({
    x0: 0,
    x1: 0,
  maxIter: 0,
  });
const [points, setPoints] = useState([]);

  const f = (x) => x * Math.exp(-x) + Math.cos(2 * x);

  const [history, setHistory] = useState([]);

  const [status, setStatus] = useState({
    iteration: 0,
    error: 0,
    root: 0,
  });

  const tolerances = [0.1, 0.01, 0.001, 0.0001];

  const onChange = (key, val) => {
    setValues((p) => ({ ...p, [key]: val }));
  };


  function makeRow(iter, x, fx, stopFlags) {
    const row = {
      iter,
      x: Number(x.toFixed(6)),
      fx: Number(fx.toFixed(6)),
    };

    tolerances.forEach((tol) => {
      if (!stopFlags[tol]) {
        if (Math.abs(fx) < tol) {
          row[`s${tol}`] = "Berhenti";
          stopFlags[tol] = true;
        } else {
          row[`s${tol}`] = "Lanjut";
        }
      } else {
        row[`s${tol}`] = "Berhenti";
      }
    });

    return row;
  }

  // =============================
  // JALANKAN METODE SECANT
  // =============================
  const run = () => {
    let x0 = Number(values.x0);
    let x1 = Number(values.x1);
    const maxIter = Number(values.maxIter);

    if (isNaN(x0) || isNaN(x1) || isNaN(maxIter)) return;

    const stopFlags = {};
    tolerances.forEach((t) => (stopFlags[t] = false));

    const rows = [];

    let fx0 = f(x0);
    rows.push(makeRow(0, x0, fx0, stopFlags));

    let fx1 = f(x1);
    rows.push(makeRow(1, x1, fx1, stopFlags));

    let lastX = x1;
    let lastFx = fx1;
    let lastIter = 1;

    for (let i = 2; i <= maxIter; i++) {
      if (fx1 - fx0 === 0) break;

      const x2 = x1 - (fx1 * (x1 - x0)) / (fx1 - fx0);
      const fx2 = f(x2);

      rows.push(makeRow(i, x2, fx2, stopFlags));

      lastX = x2;
      lastFx = fx2;
      lastIter = i;

      if (Object.values(stopFlags).every((v) => v)) break;

      x0 = x1;
      fx0 = fx1;
      x1 = x2;
      fx1 = fx2;
    }

    const lastPoints = rows.slice(-2).map((r) => ({
      x: r.x,
      y: f(r.x),
    }));

    setPoints(lastPoints);

    setStatus({
      iteration: lastIter,
      error: Math.abs(lastFx),
      root: lastX,
    });

    setHistory(rows);
  };



  return {
    method: "secant",
    values,
    onChange,
    run,
    history,
    status,
    points
  };
}
