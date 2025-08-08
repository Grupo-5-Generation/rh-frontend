import ModalFuncionario from "../../componentes/funcionarios/modalfuncionario/ModalFuncionario"


function Home() {
    return (
        <>
            <div className="bg-[url(https://ik.imagekit.io/vtdzeofuq/fotofundoRH.png?updatedAt=1754662426803)] 
             bg-no-repeat bg-cover  p-30">
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

            <div className="grid grid-cols-2 gap-4 bg-[#6186BF]">
                <div className="text-sky-900 text-3xl p-25 text-center text-shadow-xs font-bold">
                    <p>Otimize a gestão de pessoas da sua empresa com o Sistema de RH completo</p>
                    </div>
                    <div className="">
                        <img src="https://ik.imagekit.io/vtdzeofuq/imagemfundoazulclaro.png?updatedAt=1754664518621"
                            alt="Foto da div" className="w-[500px] h-[300px] justify-end py-5 px-12 mx-20">
                        </img>
                    </div>
            </div>
        </>
    )
}

export default Home