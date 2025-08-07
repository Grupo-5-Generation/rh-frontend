

function Home() {
    return (
        <>
            <div className="bg-blue-800 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            NoWhereRH
                        </h2>
                        <p className='text-xl'>
                            De 'nenhum lugar' para o lugar certo.
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                        
                            </div>
                        </div>
                    </div>

                    <div className=" flex justify-center ">
                        <img
                            src="https:ik.imagekit.io/zddqh4rhi/Apresenta%C3%A7%C3%A3o%20Gest%C3%A3o%20de%20Recursos%20Humanos%20Ilustrado%20Azul%20e%20Bege.png?updatedAt=1754576450200"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home