import { useState } from "react";

function f(x) {
  return 0.34 - 26.97 * x + 16.3 * x ** 3 - 6 * x ** 5;
}

export function useBiseksi() {
  const [values, setValues] = useState({
    a: 0,
    b: 1,
    tol: 0.001,
    maxIter: 20,
  });

  const [history, setHistory] = useState([]);
  const [points, setPoints] = useState([]);
  const [status, setStatus] = useState({
    iteration: 0,
    error: null,
    root: null,
    fx: null,
    stopped: false,
  });


  const onChange = (key, value) => {
    setValues((v) => ({ ...v, [key]: Number(value) }));
  };

  const run = () => {
    let { a, b, tol, maxIter } = values;

    let fa = f(a);
    let fb = f(b);

    if (fa * fb > 0) {
      alert("Interval tidak mengurung akar");
      return;
    }

    let rows = [];
    let graphData = [];

    let iter = 0;
    let mid = null;
    let error = Math.abs(b - a);
    let stopped = false;

    while (iter < maxIter) {
      iter++;

      mid = (a + b) / 2;
      const fmid = f(mid);
      error = Math.abs(b - a);

      const berhenti = error <= tol;
      if (berhenti) stopped = true;

      rows.push({
        iter,
        a: +a.toFixed(7),
        b: +b.toFixed(7),
        x: +mid.toFixed(7),
        fx: +fmid.toFixed(7),
        fa: +fa.toFixed(7),
        keterangan: fa * fmid < 0 ? "Berlawanan Tanda" : "",
        interval: +error.toFixed(7),
        status: berhenti ? "Berhenti" : "Lanjut",
      });

      graphData.push({
        a,
        b,
        mid,
        fmid,
      });

      if (stopped) continue;

      if (fa * fmid < 0) {
        b = mid;
        fb = fmid;
      } else {
        a = mid;
        fa = fmid;
      }
    }

    setHistory(rows);
    setPoints(graphData);
    setStatus({
      iteration: iter,
      error: +error.toFixed(8),
      root: +mid.toFixed(8),
      fx: +f(mid).toFixed(8),
      stopped: stopped,
    });

  };

  return {
    method: "biseksi",
    values,
    onChange,
    run,
    history,
    points,
    status,
  };
}
