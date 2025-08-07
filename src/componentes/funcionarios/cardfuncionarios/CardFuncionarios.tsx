import { Link } from 'react-router-dom'
import type Funcionarios from '../../../models/Funcionarios'

interface CardFuncionariosProps {
    funcionario: Funcionarios
}

function CardFuncionarios({ funcionario }: CardFuncionariosProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>

            <div>
                <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                    <img 
                        src='https://i.imgur.com/pK6vSCy.png'
                        className='h-12 rounded-full' 
                        alt="Foto do usuário" 
                    />
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {funcionario.nome || 'Nome do Usuário'}
                    </h3>
                </div>
                <div className='p-4'>
                    <h4 className='text-lg font-semibold uppercase'>Informações</h4>
                    <p><strong>Salário:</strong> {funcionario.salario}</p>
                    <p><strong>Data de início:</strong> {funcionario.data_admissao}</p>
                    <p><strong>Aniversário:</strong> {funcionario.data_nascimento}</p>
                    {/* <p><strong>Setor:</strong> {funcionario.setor?setor}</p> */}
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarfuncionario/${funcionario.id}`}
                    className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                    flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarfuncionario/${funcionario.id}`} 
                    className='text-white bg-red-400 
                    hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardFuncionarios