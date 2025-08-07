/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
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
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-2">
                    <div className='container mx-auto my-4 id grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {setores.map((setor) => (
                            <CardSetores key={setor.id} setor={setor} />
                        ))} 
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaSetores;