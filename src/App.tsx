import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./componentes/footer/Footer";
import FormFuncionarios from "./componentes/funcionarios/formfuncionarios/FormFuncionarios";
import Navbar from "./componentes/navbar/Navbar";
import FormSetor from "./componentes/setores/formsetores/FormSetores";
import Cadastro from "./pages/cadastro/Cadastro";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/funcionarios" element={<FormFuncionarios />} />
            <Route path="/setores" element={<FormSetor />} />
            <Route path="/cadastrarfuncionarios" element={<FormFuncionarios />} />
            <Route path="/editarfuncionarios/:id" element={<FormFuncionarios />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;