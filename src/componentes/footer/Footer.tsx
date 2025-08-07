import { LinkedinLogoIcon, InstagramLogoIcon, FacebookLogoIcon } from '@phosphor-icons/react';

function Footer() {
  return (
    <div className="w-full bg-[#708090] text-white py-8 mt-auto">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center mb-6">
          <p className='text-xl font-bold mb-2'>Cadastre-se</p>
          <p className='hover:underline cursor-pointer'>Já é cliente? Clique aqui</p>
        </div>

        <div className="text-center">
          <p className='text-lg font-semibold mb-4'>Acesse nossas redes sociais</p>
          <div className='flex justify-center gap-6'>
            <a 
              href="https://www.linkedin.com/school/generationbrasil" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5D0C5] transition-colors"
            >
              <LinkedinLogoIcon size={32} weight='bold' />
            </a>
            <a 
              href="https://www.instagram.com/generationbrasil" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5D0C5] transition-colors"
            >
              <InstagramLogoIcon size={32} weight='bold' />
            </a>
            <a 
              href="https://www.facebook.com/generationbrasil" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5D0C5] transition-colors"
            >
              <FacebookLogoIcon size={32} weight='bold' />
            </a>
          </div>
        </div>

        <p className="text-sm mt-8 text-[#F5D0C5]">
          © {new Date().getFullYear()} FarmaHub - Todos os direitos reservados
        </p>
      </div>
    </div>
  );
}

export default Footer;