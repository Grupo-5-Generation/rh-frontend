import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./componentes/footer/Footer";
import DeletarFuncionario from "./componentes/funcionarios/deletarfuncionario/DeletarFuncionario";
import FormFuncionarios from "./componentes/funcionarios/formfuncionarios/FormFuncionarios";
import ListaFuncionarios from "./componentes/funcionarios/listarfuncionarios/ListarFuncionarios";
import Navbar from "./componentes/navbar/Navbar";
import NavbarLogin from "./componentes/navbar/NavbarLogin";
import DeletarSetor from "./componentes/setores/deletarsetor/DeletarSetor";
import FormSetores from "./componentes/setores/formsetores/FormSetores";
import ListaSetores from "./componentes/setores/listarsetores/ListarSetores";
import Cadastro from "./pages/cadastro/Cadastro";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  const location = useLocation();

  // Verifica se está na rota login
  const isLoginPage = location.pathname === "/" || location.pathname === "/login";

  return (
    <>
      {/* <BrowserRouter> */}
        {isLoginPage ? <NavbarLogin /> : <Navbar />}
        {/* <Navbar /> */}
        <div className="min-h-[80vh] bg-[#fffbf7]">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/funcionarios" element={<FormFuncionarios />} />
            <Route path="/setores" element={<FormSetores />} />
            <Route path="/editarsetores/:id" element={<FormSetores />} />
            <Route path="/deletarsetores/:id" element={<DeletarSetor />} />
            <Route path="/cadastrarfuncionarios" element={<FormFuncionarios />} />
            <Route path="/editarfuncionario/:id" element={<FormFuncionarios />} />
            <Route path="/deletarfuncionario/:id" element={<DeletarFuncionario />} />
            <Route path="/listarfuncionarios" element={<ListaFuncionarios />} />
            <Route path="/listarsetores" element={<ListaSetores />} />
          </Routes>
        </div>
        <Footer />
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;