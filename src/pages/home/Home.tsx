import { FaBuilding, FaMoneyBillWave, FaUser } from "react-icons/fa";
import ModalFuncionario from "../../componentes/funcionarios/modalfuncionario/ModalFuncionario";

function Home() {
    return (
        <>
            <div className="bg-[url(https://ik.imagekit.io/vtdzeofuq/fotofundoRH.png?updatedAt=1754662426803)] bg-no-repeat bg-cover p-60">
                <div className="flex flex-col gap-5 text-right">
                    <h2 className='text-5xl font-bold text-sky-900 mx-6'>
                        NoWhereRH
                    </h2>
                    <p className='text-xl text-sky-900'>
                        De 'nenhum lugar' para o lugar certo.
                    </p>

                    <div className="flex justify-end mx-15 p-4 text-orange-400 font-bold">
                        <div className="flex">
                            <ModalFuncionario />
                        </div>
                    </div>
                </div>
            </div>

            {/* Seção 2 - Cards */}
            <div className="bg-white p-24">
                <h1 className="text-4xl text-center my-10 text-sky-900 font-bold pb-8">
                    Funcionalidades
                </h1>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-26">
                    
                    {/* Card 1 */}
                    <div className="bg-sky-900 rounded-lg shadow-lg p-6 text-white flex flex-col items-center">
                        <div className="w-24 h-24 bg-[#f0a382] rounded-md mb-4 flex items-center justify-center">
                            <FaUser size={40}/>
                        </div>
                        <h2 className="text-lg font-semibold mb-2">Cadastro de funcionários</h2>
                        <p className="text-sm text-gray-200 text-center">
                            Corpo de texto para adicionar mais informações, além do subtítulo.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-sky-900 rounded-lg shadow-lg p-6 text-white flex flex-col items-center">
                        <div className="w-24 h-24 bg-[#f0a382] rounded-md mb-4 flex items-center justify-center">
                            <FaBuilding size={40} />
                        </div>
                        <h2 className="text-lg font-semibold mb-2">Cadastro de setores</h2>
                        <p className="text-sm text-gray-200 text-center">
                            Corpo de texto para outras informações que você queira compartilhar.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-sky-900 rounded-lg shadow-lg p-6 text-white flex flex-col items-center">
                        <div className="w-24 h-24 bg-[#f0a382] rounded-md mb-4 flex items-center justify-center">
                            <FaMoneyBillWave size={40} />
                        </div>
                        <h2 className="text-lg font-semibold mb-2">Função de aumento salarial</h2>
                        <p className="text-sm text-gray-200 text-center">
                            Corpo de texto para explicar melhor o ponto principal.
                        </p>
                    </div>

                </div>
            </div>

            {/* Seção 3 - Texto e imagem */}
            <div className="grid grid-cols-2 gap-4 bg-[#c9d8f5] pt-26">
                <div className="text-sky-900 text-3xl p-25 text-center text-shadow-xs font-bold flex items-center justify-center">
                    <p>Otimize a gestão de pessoas da sua empresa com o Sistema de RH completo</p>
                </div>
                <div className="flex justify-center items-center">
                    <img
                        src="https://ik.imagekit.io/vtdzeofuq/imagemfundoazulclaro.png?updatedAt=1754664518621"
                        alt="Foto da div"
                        className="w-[500px] h-[300px] object-contain"
                    />
                </div>
            </div>
        </>
    )
}

export default Home;
