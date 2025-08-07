import { GithubLogoIcon } from '@phosphor-icons/react'
function Footer() {

    const data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-gradient-to-r from-stone-400 via-stone-600 to-stone-950 text-white font-joti">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Grupo 5 | {data}
                    </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://github.com/Grupo-5-Generation" target="_blank">
                            <GithubLogoIcon size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer