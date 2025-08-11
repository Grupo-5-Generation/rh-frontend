import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full bg-sky-900 text-white py-4'>
                <div className="container mx-auto flex justify-between text-lg px-8">
                    <Link to='/home' className="text-2xl font-bold px-2 hover:bg-[#275292]">NoWhereRH</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar