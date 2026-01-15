import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MetodeBiseksi from "../pages/MetodeBiseksi";
import MetodeSecant from "../pages/MetodeSecant";
import MetodeNewtonRaps from "../pages/MetodeNewtonRaps";

export default function AppRoutes() { 

    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/metode-biseki" element={<MetodeBiseksi />} />
        <Route path="/metode-newton-raphson" element={<MetodeNewtonRaps />} />
        <Route path="/metode-secant" element={<MetodeSecant />} />
      </Routes>
    );
}