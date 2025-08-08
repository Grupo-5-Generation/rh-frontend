/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type Funcionarios from '../../../models/Funcionarios';
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
                <div className="flex w-full bg-sky-900 px-2 items-center gap-4 text-white">
                    <img
                        src='https://ik.imagekit.io/zddqh4rhi/397057724_11539820.png?updatedAt=1754672123040'
                        className='h-16'
                        alt="Foto do usuário"
                    />
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {funcionario.nome || 'Nome do Usuário'}
                    </h3>
                </div>
                <div className='p-4 bg-white '>
                    <h4 className='text-lg font-semibold uppercase'>Informações</h4>
                    <p><strong>Salário:</strong> {funcionario.salario}</p>
                    <p><strong>Data de início:</strong> {funcionario.data_admissao}</p>
                    <p><strong>Aniversário:</strong> {funcionario.data_nascimento}</p>

                </div>
            </div>
            <div className="flex p-4 gap-2">
                <Link to={`/editarfuncionario/${funcionario.id}`}
                    className='w-full text-white bg-sky-900 hover:bg-sky-950
                    flex items-center justify-center py-2 font-bold rounded-lg'>
                        <i className="fa-solid fa-edit text-white text-1xl p-2"></i>
                    Editar
                </Link>
                <button onClick={darAumento} className='font-bold text-white bg-green-700
                     hover:bg-green-900 w-full flex items-center justify-center rounded-lg cursor-pointer'>
                        <i className="fa fa-plus text-white text-1xl p-1"></i>
                        Dar aumento</button>


                <Link to={`/deletarfuncionario/${funcionario.id}`}
                    className='text-white bg-red-800 font-bold
                         hover:bg-red-900 w-full flex items-center justify-center rounded-lg'>
                            <i className="fa fa-eraser text-white text-1xl p-2"></i>
                    Deletar
                </Link>

            </div>
        </div>
    )
}

export default CardFuncionarios