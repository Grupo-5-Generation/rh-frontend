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
        navigate("/listarfuncionarios")
    }

    async function deletarFuncionario() {
        try {
            await deletar(`/funcionarios/${id}`)
            alert('Funcionário deletado com sucesso!')
            retornar()
        } catch (error: any) {
            alert('Erro ao deletar o Funcionário.')
        }
    }

    return (
        <div className="container mx-auto w-1/3 font-raleway text-sky-900">
            <h1 className="text-4xl text-center my-8 font-bold ">Deletar Funcionário</h1>
            <p className="text-center font-semibold mb-6">
                Você tem certeza de que deseja apagar o funcionário a seguir?
            </p>

            <div className="border border-slate-900 rounded-2xl shadow-md overflow-hidden">
                <header className="bg-sky-900 text-white text-3xl font-bold py-3 px-6 flex items-center gap-3">
                    {funcionarios.nome}
                    <i className="fas fa-user-circle text-xl"></i>
                </header>
                <div className="bg-white p-8 text-xl text-slate-700">
                    <p><strong>CPF:</strong> {funcionarios.cpf}</p>
                </div>
                <div className="flex gap-4 p-4 bg-slate-100">
                    <button onClick={deletarFuncionario} className="flex-1 rounded text-slate-100 font-bold bg-sky-900 hover:bg-sky-950 w-1/4 py-2 mx-auto my-5 flex justify-center">
                        Sim
                    </button>
                    <button onClick={retornar} className="flex-1 rounded text-slate-100 font-bold bg-[#4172bd] hover:bg-[#275292] w-1/4 py-2 mx-auto my-5 flex justify-center">
                        Não
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarFuncionario
