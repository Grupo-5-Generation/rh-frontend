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
                        <Link to='/home' className='hover:bg-amber-500'>Home</Link>
                        <Link to='/cadastro' className='hover:bg-amber-500'>Cadastro</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar