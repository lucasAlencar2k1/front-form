import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "../App";
import Sucesso from "../Pages/Sucesso";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sucesso" element={<Sucesso/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;