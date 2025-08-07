/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type Funcionarios from "../../../models/Funcionarios"
import { buscar, deletar } from "../../../services/Services"

function DeletarFuncionario() {

    const navigate = useNavigate()

    const [funcionarios, setFuncionarios] = useState<Funcionarios>({} as Funcionarios)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        await buscar(`/funcionarios/${id}`, setFuncionarios)
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/funcionarios")
    }

    async function deletarFuncionario() {
        try {
            await deletar(`/funcionarios/${id}`)
            alert('Funcionário deletado com sucesso!')
        } catch (error: any) {
            alert('Erro ao deletar o Funcionário.')
        }
        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto font-raleway'>
            <h1 className='text-4xl text-center my-4'>Deletar Funcionário</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o funcionário a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header
                    className='py-2 px-6 bg-linear-to-r/srgb from-teal-500 to-teal-700 text-white font-bold text-2xl'>
                    {funcionarios.nome}
                </header>
                <p className='p-8 text-3xl bg-slate-100 h-full'>{funcionarios.cpf}</p>
                <div className="flex">
                    <button
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>
                        Não
                    </button>
                    <button
                        className='w-full bg-slate-200 hover:bg-teal-700 
                        flex items-center justify-center py-2' onClick={deletarFuncionario}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarFuncionario