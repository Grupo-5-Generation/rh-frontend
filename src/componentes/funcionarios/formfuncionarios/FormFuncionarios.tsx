/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Services";
import type Funcionarios from "../../../models/Funcionarios";
import ListaSetores from "../../setores/listarsetores/ListarSetores";
import type Setor from "../../../models/Setor";


function FormFuncionarios() {

    const navigate = useNavigate();

    const [funcionarios, setFuncionarios] = useState<Funcionarios>({} as Funcionarios)

    const [setor, setSetor] = useState<Setor>({} as Setor)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        await buscar(`/funcionarios/${id}`, setFuncionarios)
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setFuncionarios({
            ...funcionarios,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/funcionarios")
    }


    async function gerarNovoFuncionario(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try {
                await atualizar(`/funcionarios`, funcionarios, setFuncionarios)
                alert('O funcionário foi atualizado com sucesso!')
            } catch (error: any) {
                alert('Erro ao atualizar o funcionário.')
            }

            retornar()

        } else {
            try {
                await cadastrar(`/funcionarios`, funcionarios, setFuncionarios)
                alert('O funcionário foi cadastrado com sucesso!')
            } catch (error: any) {
                alert('Erro ao cadastrar o funcionário.')
            }

            retornar()
        }
    }

    async function buscarSetorPorId(id: string) {
        try {
            await buscar(`/setores/${id}`, setSetor)
        } catch (error: any) {
            
        }
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto font-raleway">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Funcionário' : 'Editar Funcionário'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoFuncionario} >
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome do Funcionário</label>
                    <input
                        type="text"
                        placeholder="Escreva o Nome do Funcionário"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={funcionarios.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />

                    <label htmlFor="cpf">Digite o CPF do Funcionário</label>
                    <input
                        type="text"
                        placeholder="Digite o CPF do Funcionário"
                        name='cpf'
                        className="border-2 border-slate-700 rounded p-2"
                        value={funcionarios.cpf}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="salario">Digite o salário do Funcionário</label>
                    <input
                        type="number"
                        placeholder="Digite o salário do Funcionário"
                        name='salario'
                        className="border-2 border-slate-700 rounded p-2"
                        value={funcionarios.salario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="data_nascimento">Digite a Data de Nascimento do Funcionário</label>
                    <input
                        type="date"
                        placeholder="Digite a Data de Nascimento do Funcionário"
                        name='data_nascimento'
                        className="border-2 border-slate-700 rounded p-2"
                        value={funcionarios.data_nascimento}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="data_nascimento">Digite a Data de Admissão do Funcionário</label> 
                    <input
                        type="date"
                        placeholder="Digite a Data de Admissão do Funcionário"
                        name='data_admissao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={funcionarios.data_admissao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    /> 
                    <select name="" id="" className="border-2 px-2 py-1 rounded">
                        <option value="">Escolha o Setor</option>
                        {ListaSetores.map(setor => (
                            <option value="">{setor.nome}</option>
                        ))}
                    </select>
                    
                </div>
                <button
                    className="rounded text-slate-100 bg-teal-600 
                               hover:bg-teal-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                </button>
            </form>
        </div>
    );
}

export default FormFuncionarios;