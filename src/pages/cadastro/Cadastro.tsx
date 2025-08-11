import { Link } from 'react-router-dom'
import './Cadastro.css'

function Cadastro() {

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen 
            place-items-center font-bold">
        <div className="fundoCadastro hidden lg:block"></div>
        <form className='flex justify-center items-center flex-col w-2/3 gap-3' >
          <h2 className='text-sky-900 text-5xl'>Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 border-sky-900 bg-white rounded p-2"

            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-sky-900 bg-white rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border-2 border-sky-900 bg-white rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-sky-900 bg-white rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-2 border-sky-900 bg-white rounded p-2"
            />
          </div>
          <div className="flex justify-around w-full gap-8">
            <button
              type='reset'
              className='rounded text-white bg-[#4172bd] hover:bg-[#275292] w-1/2 py-2'

            >
              <Link to='/login' className=''>Cancelar</Link>
            </button>
            <button
              type='submit'
              className='rounded text-white bg-sky-900 hover:bg-sky-950 w-1/2 py-2 flex justify-center'>
              <Link to='/home' className=''>Cadastrar</Link>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Cadastro