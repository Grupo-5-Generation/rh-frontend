/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type Setor from "../../../models/Setor";
import { buscar } from "../../../services/Services";
import CardSetores from "../cardsetores/CardSetores";

function ListaSetores() {

    const [setores, setSetor] = useState<Setor[]>([])

    async function buscarSetor() {
        await buscar('/setores', setSetor)
    }

    async function buscarSetorPorId(id: string) {
        await buscar(`/setores/${id}`, setSetor)
    }

    async function buscarPorNome(nome: string) {
        await buscar(`/setores/${nome}`, setSetor)
    }

    useEffect(() => {
        buscarSetor()
    }, [])

    return (
        <div className="max-w-7xl mx-auto px-4 py-6 text-sky-900">
            <h1 className="text-4xl text-center my-8 text-sky-900 font-bold">
                Setores
            </h1>
            <div className="justify-center w-full my-4">
                <div className="flex justify-between items-center mb-4">
                <Link to="/setores" className="bg-sky-900 hover:bg-sky-950 text-white px-4 py-2 font-bold">
                    <i className="fa fa-plus text-white text-base p-1"></i>
                    Inserir setor
                </Link>
                </div>
                <div className="container flex flex-col mx-2">
                    <div className='container mx-auto my-4 id grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {setores.map((setor) => (
                            <CardSetores key={setor.id} setor={setor} />
                        ))} 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListaSetores;