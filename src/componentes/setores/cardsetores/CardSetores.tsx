import { Link } from "react-router-dom"
import type Setor from "../../../models/Setor"

interface CardSetoresProps {
    setor: Setor
}

function CardSetores({ setor }: CardSetoresProps) {
    return (
        <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
            
            <div>
            <div className="flex w-full text-2xl bg-sky-900 pl-4 p-2 items-center gap-4 text-white">
                {setor.nome}
                <i className="fas fa-briefcase"></i>
            </div>
            
            <p className='p-6 text-xl bg-white h-full'>{setor.nome}</p>
            </div>
            <div className="flex p-4 gap-4 justify-center">
                <Link
                    to={`/editarsetores/${setor.id}`}
                    className='w-26 text-sm text-white bg-sky-900 hover:bg-sky-950 flex items-center justify-center py-1 font-bold rounded-lg'
                >
                    <i className="fa-solid fa-edit text-white text-base p-1"></i>
                    Editar
                </Link>

                <Link
                    to={`/deletarsetores/${setor.id}`}
                    className='w-26 text-sm text-white bg-[#4172bd] hover:bg-[#275292] font-bold flex items-center justify-center py-1 rounded-lg'
                >
                    <i className="fa fa-eraser text-white text-base p-1"></i>
                    Deletar
                </Link>
            </div>
        </div>
    )
}

export default CardSetores
