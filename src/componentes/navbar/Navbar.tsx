import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-sky-900
                            text-white'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">NoWhereRH</Link>

                    <div className='flex gap-4'>
                        <Link to='/funcionarios' className='hover:bg-amber-500'>Funcionários</Link>
                        <Link to='/setores' className='hover:bg-amber-500'>Setores</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar