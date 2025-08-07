import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-gradient-to-r from-stone-400 via-stone-600 to-stone-950
                            text-white font-joti'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">NoWhereRH</Link>

                    <div className='flex gap-4'>
                        <Link to='/home' className='hover:bg-stone-600 hover:text-stone-900'>Home</Link>
                        <Link to='/cadastro' className='hover:bg-stone-600 hover:text-stone-900'>Cadastro</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar