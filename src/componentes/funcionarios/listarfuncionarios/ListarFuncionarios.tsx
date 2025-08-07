/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { buscar } from "../../../services/Services";
import type Funcionarios from "../../../models/Funcionarios";



function ListaFuncionarios() {

    const [funcionarios, setFuncionarios] = useState<Funcionarios>({} as Funcionarios)

    async function buscarFuncionarios() {
        await buscar('/funcionarios', setFuncionarios)
    }

    async function buscarPorId(id: string) {
        await buscar(`/funcionarios/${id}`, setFuncionarios)
    }

    async function buscarPorNome(nome: string) {
        await buscar(`/funcionarios/${nome}`, setFuncionarios)
    }

    useEffect(() => {
        buscarFuncionarios()
    }, [])

    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-2">
                    <div className='container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                    >
                        {/* {funcionarios.map((funcionario) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))} */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaFuncionarios;