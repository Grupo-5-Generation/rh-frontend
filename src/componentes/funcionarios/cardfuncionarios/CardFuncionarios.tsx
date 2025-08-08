import { Link,  useNavigate } from 'react-router-dom'
import type Funcionarios from '../../../models/Funcionarios'
import { useState } from 'react';
import { calcularSalario } from '../../../services/Services';

interface CardFuncionariosProps {
    funcionario: Funcionarios
}

function CardFuncionarios({ funcionario }: CardFuncionariosProps) {

    const [funcionarioAumento, setFuncionarioAumento] = useState<Funcionarios>({} as Funcionarios) 
    const navigate = useNavigate();


  async function darAumento() {
    try {
     await calcularSalario(`/funcionarios/${funcionario.id}`, setFuncionarioAumento);
      alert("Salário atualizado com sucesso!");
        navigate("/home");
    } catch (error) {
      console.error(error);
      alert("Erro ao calcular salário.");
    }
  }


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
                    <button onClick={darAumento} className='text-white bg-purple-400
                     hover:bg-purple-700 w-full flex items-center justify-center'>Dar aumento</button>
                
            </div>
        </div>
    )
}

export default CardFuncionarios