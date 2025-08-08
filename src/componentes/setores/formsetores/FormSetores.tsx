/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, type ChangeEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type Setor from "../../../models/Setor";
import { atualizar, buscar, cadastrar } from "../../../services/Services";


function FormSetores() {

    const navigate = useNavigate();

    const [setor, setSetor] = useState<Setor>({} as Setor)


    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        await buscar(`/setores/${id}`, setSetor)
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setSetor({
            ...setor,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/listarsetores")
    }


    async function gerarNovoSetor(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try {
                await atualizar(`/setores`, setor, setSetor)
                alert('O setor foi atualizado com sucesso!')
            } catch (error: any) {
                alert('Erro ao atualizar o setor.')
            }

            retornar()

        } else {
            try {
                await cadastrar(`/setores`, setor, setSetor)
                alert('O setor foi cadastrado com sucesso!')
            } catch (error: any) {
                alert('Erro ao cadastrar o setor.')
            }

            retornar()
        }
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto font-raleway">
            <h1 className="text-4xl text-center my-8 text-sky-900 font-bold">
                {id === undefined ? 'Cadastrar Setor' : 'Editar Setor'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4 text-sky-900 font-bold" onSubmit={gerarNovoSetor} >
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome do Setor</label>
                    <input
                        type="text"
                        placeholder="Escreva o Nome do Setor"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2 bg-white"
                        value={setor.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex gap-6 p-6 justify-center">
                    <button className="rounded text-slate-100 font-bold bg-sky-900 hover:bg-sky-950 px-6 py-2" type="submit" >
                        {id === undefined ? 'Cadastrar' : 'Atualizar'}
                    </button>
                    <Link to={`/listarsetores/`} className="rounded text-slate-100 font-bold bg-[#4172bd] hover:bg-[#275292] px-6 py-2">
                        Cancelar
                    </Link>
                </div>
            </form>
            
        </div>
    );
}

export default FormSetores;