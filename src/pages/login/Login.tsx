import { Link } from 'react-router-dom';
import './Login.css';

function Login() {

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold ">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4" >
                    <h2 className="text-sky-900 text-5xl ">Entrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuario"
                            className="border-2 border-sky-900 bg-white rounded p-2"

                        />
                    </div>
                    <div className="flex flex-col w-full ">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2  border-sky-900 bg-white rounded p-2"

                        />
                    </div>
                    <button
                        type='submit'
                        className="rounded bg-orange-300 flex justify-center
                                    hover:bg-orange-400 text-sky-950 w-1/2 py-2">
                        <Link to='/home' className=''>Entrar</Link>
                    </button>

                    <hr className="border-sky-900 w-full" />

                    <p className='text-center text-sky-900'>
            
                        Ainda não tem uma conta?{' '}
                        <Link to='/cadastro' className=''>Cadastre-se</Link>
                    </p>
                </form>
                <div className="fundoLogin hidden lg:block"></div>
            </div>
        </>
    );
}

export default Login;