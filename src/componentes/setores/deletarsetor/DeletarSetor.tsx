/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type Setor from "../../../models/Setor"
import { buscar, deletar } from "../../../services/Services"

function DeletarSetor() {

    const navigate = useNavigate()

    const [setor, setSetor] = useState<Setor>({} as Setor)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        await buscar(`/setores/${id}`, setSetor)
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/setores")
    }

    async function deletarSetor() {
        try {
            await deletar(`/setores/${id}`)
            alert('Setor deletado com sucesso!')
        } catch (error: any) {
            alert('Erro ao deletar o Setor.')
        }
        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto font-raleway'>
            <h1 className='text-4xl text-center my-4'>Deletar Setor</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o setor a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header
                    className='py-2 px-6 bg-linear-to-r/srgb from-teal-500 to-teal-700 text-white font-bold text-2xl'>
                    {setor.nome}
                </header>
                <div className="flex">
                    <button
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>
                        Não
                    </button>
                    <button
                        className='w-full bg-slate-200 hover:bg-teal-700 
                        flex items-center justify-center py-2' onClick={deletarSetor}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarSetor