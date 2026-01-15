import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  Scatter,
} from "recharts";

const generateCurveData = (f, start = -1, end = 2, step = 0.02) => {
  const data = [];
  for (let x = start; x <= end; x += step) {
    data.push({ x, y: f(x) });
  }
  return data;
};

export default function FunctionGraph({
  f,
  points = [],
  root = null,
  method = "secant",
}) {
  const curveData = generateCurveData(f);

  const title =
    method === "biseksi"
      ? "Grafik Metode Biseksi"
      : method === "newton"
      ? "Grafik Metode Newton-Raphson"
      : "Grafik Metode Secant";

  return (
    <div className="bg-slate-900 rounded-md p-3 sm:p-4 w-full h-[300px] sm:h-[400px] md:h-[450px]">
      <h3 className="text-white text-base sm:text-lg md:text-xl mb-2">
        {title}
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={curveData}>
          <CartesianGrid stroke="#1f2a44" strokeDasharray="3 3" />
          <XAxis type="number" dataKey="x" domain={["auto", "auto"]} />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="y"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
          />

          {method === "biseksi" && points.length > 0 && (
            <>
              {points.map(
                (p, i) =>
                  p.a !== undefined && (
                    <ReferenceLine
                      key={`a-${i}`}
                      x={p.a}
                      stroke="#ef4444"
                      strokeDasharray="2 2"
                    />
                  )
              )}
              {points.map(
                (p, i) =>
                  p.b !== undefined && (
                    <ReferenceLine
                      key={`b-${i}`}
                      x={p.b}
                      stroke="#ef4444"
                      strokeDasharray="2 2"
                    />
                  )
              )}
              {points.map(
                (p, i) =>
                  p.mid !== undefined && (
                    <ReferenceLine
                      key={`mid-${i}`}
                      x={p.mid}
                      stroke="#22c55e"
                      strokeDasharray="3 3"
                    />
                  )
              )}
              <Scatter
                data={points
                  .filter((p) => p.mid !== undefined)
                  .map((p) => ({ x: p.mid, y: p.fmid }))}
                fill="#facc15"
              />
            </>
          )}

          {(method === "newton" || method === "secant") &&
            points.length > 0 && (
              <Scatter
                data={points.map((p) => ({ x: p.x, y: p.fx ?? p.y }))}
                fill="#facc15"
              />
            )}

          {root !== null && (
            <ReferenceLine
              x={root}
              stroke="#4ade80"
              strokeWidth={2}
              label={{ value: "root", position: "bottom", fill: "#4ade80" }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
