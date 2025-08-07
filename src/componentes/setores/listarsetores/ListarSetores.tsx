/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { buscar } from "../../../services/Services";
import type Setor from "../../../models/Setor";
import CardSetores from "../cardsetores/CardSetores";




function ListaSetores() {

    const [setor, setSetor] = useState<Setor>({} as Setor)

    async function buscarSetor() {
        await buscar('/setores', setSetor)
    }

    async function buscarPorId(id: string) {
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
                    <div className='container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                    >
                        {setor.map((setores) => (
                            <CardSetores key={setores.id} setor={setores} />
                        ))} 
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaSetores;