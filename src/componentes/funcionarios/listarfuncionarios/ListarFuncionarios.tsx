/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type Funcionarios from "../../../models/Funcionarios";
import { buscar } from "../../../services/Services";
import CardFuncionarios from "../cardfuncionarios/CardFuncionarios";

function ListaFuncionarios() {
    const [funcionarios, setFuncionarios] = useState<Funcionarios[]>([]);

    async function buscarFuncionarios() {
        await buscar("/funcionarios", setFuncionarios);
    }

    useEffect(() => {
        buscarFuncionarios();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-6 text-sky-900">
            <h1 className="text-4xl text-center my-8 text-sky-900 font-bold">
                Funcionários
            </h1>
            <div className="flex justify-between items-center mb-4">
                <Link to="/funcionarios" className="bg-sky-900 hover:bg-sky-950 text-white px-4 py-2 font-bold">
                <i className="fa fa-plus text-white text-base p-1"></i>
                Inserir funcionário
                </Link>
            </div>

            {/*Cabeçalho do Grid*/}
            <div className="overflow-x-auto bg-white shadow">
                <table className="min-w-full text-sm text-left text-gray-700">
                <thead className="bg-sky-900 text-white">
                    <tr>
                    <th scope="col" className="px-4 py-3">Ações</th>
                    <th scope="col" className="px-4 py-3">Funcionário</th>
                    <th scope="col" className="px-4 py-3">Data de admissão</th>
                    <th scope="col" className="px-4 py-3">Salário</th>
                    <th scope="col" className="px-4 py-3">Setor</th>
                    <th scope="col" className="px-4 py-3">Data de nascimento</th>
                    </tr>
                </thead>
                <tbody>
                    {funcionarios.map((funcionario) => (
                    <CardFuncionarios
                        key={funcionario.id}
                        funcionario={funcionario}
                    />
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListaFuncionarios;
