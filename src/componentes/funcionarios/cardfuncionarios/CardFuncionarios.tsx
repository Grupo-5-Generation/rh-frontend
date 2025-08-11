/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type Funcionarios from "../../../models/Funcionarios";
import { calcularSalario } from "../../../services/Services";

interface CardFuncionariosProps {
    funcionario: Funcionarios;
}

function CardFuncionarios({ funcionario }: CardFuncionariosProps) {
    const [funcionarioAumento, setFuncionarioAumento] = useState<Funcionarios>(
        {} as Funcionarios
    );
    const navigate = useNavigate();
    function formatarData(data: string) {
        if (!data) return "";
        const dt = new Date(data);
        return dt.toLocaleDateString("pt-BR", { timeZone: "UTC" });
    }
    function formatarSalario(valor: number) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }

    async function darAumento() {
        try {
            await calcularSalario(
            `/funcionarios/${funcionario.id}`,
            setFuncionarioAumento
            );
            alert("Salário atualizado com sucesso!");
            navigate("/listarfuncionarios");
        } catch (error) {
            console.error(error);
            alert("Erro ao calcular salário.");
        }
    }

    return (
        <tr className="border-b hover:bg-gray-50">
        {/* Coluna Ações */}
        <td className="px-4 py-3">
            <div className="relative inline-block text-left text-sky-900">
            <details className="group">
                <summary className="list-none cursor-pointer p-2 rounded-lg hover:bg-gray-300">
                ☰
                </summary>
                <div className="absolute mt-1 bg-white border rounded-lg shadow-lg w-40 z-10">
                <Link to={`/editarfuncionario/${funcionario.id}`} className="block px-4 py-2 hover:bg-gray-100">
                    <i className="fa-solid fa-edit text-1xl p-2"></i>
                    Alterar
                </Link>
                <button onClick={darAumento} className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    <i className="fa-solid fa-usd text-1xl p-2"></i>
                    Dar aumento
                </button>
                <Link to={`/deletarfuncionario/${funcionario.id}`} className="block px-4 py-2 hover:bg-gray-100">
                <i className="fa-solid fa-trash text-1xl p-2"></i>
                    Deletar
                </Link>
                </div>
            </details>
            </div>
        </td>

        {/* Coluna Funcionário */}
        <td className="px-4 py-3 flex items-center gap-2">
            <img src="https://ik.imagekit.io/zddqh4rhi/397057724_11539820.png?updatedAt=1754672123040" alt="Foto" className="w-8 h-8 rounded-full"/>
            <span className="font-medium">{funcionario.nome}</span>
        </td>
            
        {/* Coluna Data de Admissão */}
        <td className="px-4 py-3">{formatarData(funcionario.data_admissao)}</td>

        {/* Coluna Salário */}
        <td className="px-4 py-3">{formatarSalario(funcionario.salario)}</td>

        {/* Coluna Setor */}
        <td className="px-4 py-3">{funcionario.setor?.nome || "—"}</td>

        {/* Coluna Data de Nascimento */}
        <td className="px-4 py-3">{formatarData(funcionario.data_nascimento)}</td>
        </tr>
    );
}

export default CardFuncionarios;
