/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Funcionarios from "../../../models/Funcionarios";
import type Setor from "../../../models/Setor";
import { atualizar, buscar, cadastrar, calcularSalario } from "../../../services/Services";


function FormFuncionarios() {

    const navigate = useNavigate();

    const [funcionario, setFuncionario] = useState<Funcionarios>({} as Funcionarios)

    const [setores, setSetores] = useState<Setor[]>([])

    const [setor, setSetor] = useState<Setor>({ id: 0, nome: '', })

    const { id } = useParams<{ id: string }>();


    async function buscarFuncionarioPorId(id: string) {
        await buscar(`/funcionarios/${id}`, setFuncionario)
    }

    async function buscarSetorPorId(id: string) {
        await buscar(`/setores/${id}`, setSetor)
    }

    async function buscarSetores() {
        await buscar(`/setores/`, setSetores)
    }

    useEffect(() => {
        buscarSetores()

        if (id !== undefined) {
            buscarFuncionarioPorId(id)
        }
    }, [id])

    useEffect(() => {
        setFuncionario({
            ...funcionario,
            setor: setor,
        })
    }, [setor])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setFuncionario({
            ...funcionario,
            [e.target.name]: e.target.value,
            setor: setor,
           /* usuario:{id:1},*/
        })
    }


    function retornar() {
        navigate("/funcionarios")
    }


    async function gerarNovoFuncionario(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try {
                await atualizar(`/funcionarios`, funcionario, setFuncionario)
                alert('O funcionário foi atualizado com sucesso!')
            } catch (error: any) {
                alert('Erro ao atualizar o funcionário.')
            }

            retornar()

        } else {
            try {
                await cadastrar(`/funcionarios`, funcionario, setFuncionario)
                alert('O funcionário foi cadastrado com sucesso!')
            } catch (error: any) {
                alert('Erro ao cadastrar o funcionário.')
            }

            retornar()
        }
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto font-raleway">
            <h1 className="text-4xl text-center my-8 text-sky-900 font-bold">
                {id === undefined ? 'Cadastrar Funcionário' : 'Editar Funcionário'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoFuncionario} >
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome do Funcionário</label>
                    <input
                        type="text"
                        placeholder="Escreva o Nome do Funcionário"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2 bg-white"
                        value={funcionario.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />

                    <label htmlFor="cpf">Digite o CPF do Funcionário</label>
                    <input
                        type="text"
                        placeholder="Digite o CPF do Funcionário"
                        name='cpf'
                        className="border-2 border-slate-700 rounded p-2 bg-white"
                        value={funcionario.cpf}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="salario">Digite o Salário do Funcionário</label>
                    <input
                        type="number"
                        placeholder="Digite o salário do Funcionário"
                        name='salario'
                        className="border-2 border-slate-700 rounded p-2 bg-white"
                        value={funcionario.salario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="data_nascimento">Digite a Data de Nascimento do Funcionário</label>
                    <input
                        type="date"
                        placeholder="Digite a Data de Nascimento do Funcionário"
                        name='data_nascimento'
                        className="border-2 border-slate-700 rounded p-2 bg-white"
                        value={funcionario.data_nascimento}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="data_nascimento">Digite a Data de Admissão do Funcionário</label> 
                    <input
                        type="date"
                        placeholder="Digite a Data de Admissão do Funcionário"
                        name='data_admissao'
                        className="border-2 border-slate-700 rounded p-2 bg-white"
                        value={funcionario.data_admissao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    /> 
                    <select name="" id="" className='border-2 p-2 border-slate-800 rounded bg-white my-5'
                        onChange={(e) => buscarSetorPorId(e.currentTarget.value)}
                        >
                        <option value="">Selecione um Setor</option>
                        {setores.map(setor => (
                            <option value="">{setor.nome}</option>
                        ))}
                    </select>
                    
                </div>
                <button
                    className="rounded text-slate-100 bg-sky-900 
                            hover:bg-sky-950 w-1/2 py-2 mx-auto my-5 flex justify-center"
                    type="submit">
                    <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                </button>
            </form>
        </div>
    );
}

export default FormFuncionarios;