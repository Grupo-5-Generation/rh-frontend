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
                <i className="fa fa-briefcase pl-4" aria-hidden="true"></i>
            </header>
            
            <p className='p-8 text-2xl bg-white h-full'>{setor.nome}</p>

            <div className="flex">
                <Link to={`/editarsetores/${setor.id}`}
                                    className='w-full text-white bg-sky-900 hover:bg-sky-950
                                    flex items-center justify-center py-2 font-bold rounded-lg'>
                                        <i className="fa-solid fa-edit text-white text-1xl p-2"></i>
                                    Editar
                                </Link>

                <Link to={`/deletarsetores/${setor.id}`}
                    className='text-white bg-red-800 font-bold
                         hover:bg-red-900 w-full flex items-center justify-center rounded-lg'>
                            <i className="fa fa-eraser text-white text-1xl p-2"></i>
                    Deletar
                </Link>
            </div>
        </div>
    )
}

export default CardSetores