import { Link } from "react-router-dom"
import type Setor from "../../../models/Setor"

interface CardSetoresProps {
    setor: Setor
}

function CardSetores({ setor }: CardSetoresProps) {
    return (
        <div className='flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-sky-900 text-white text-3xl font-bold'>
                {setor.nome}
            </header>
            <p className='p-8 text-2xl bg-white h-full'>{setor.nome}</p>

            <div className="flex">
                <Link to={`/editarsetores/${setor.id}`}
                    className='w-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center py-2 text-white font-bold'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarsetores/${setor.id}`}
                    className='text-white bg-red-800 hover:bg-red-900 w-full items-center justify-center font-bold py-2 flex'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardSetores