import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FiX, FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function Header(){
  return(
    <div className="w-full flex justify-center">
      <div className="container h-16 flex items-center justify-between border-b-2 px-10 md:px-0">
        <Link to="/">
          <h1 className='hover:text-orange-500 cursor-pointer transition-colors text-2xl'>Logo</h1>
        </Link>

        <span className='gap-5 hidden sm:flex'>
          <Link to="/">
            <a className='hover:text-orange-500 cursor-pointer transition-colors'>Home</a>
          </Link>
          <Link to="/about-us">
            <a className='hover:text-orange-500 cursor-pointer transition-colors'>Sobre nos</a>
          </Link>
          <Link to="/contact-us">
            <a className='hover:text-orange-500 cursor-pointer transition-colors'>Contato</a>
          </Link>
        </span>

        <span className='flex gap-3'>
          <a href="https://github.com/higoraln">
            <AiFillGithub className='hover:text-orange-500 cursor-pointer transition-colors text-2xl'/>
          </a>
          <a href="https://www.linkedin.com/in/higor-allan-a9192b219/">
            <AiFillLinkedin className='hover:text-orange-500 cursor-pointer transition-colors text-2xl'/>
          </a>
        </span>


        <FiMenu className="flex sm:hidden"/>
      </div>
    </div>
  )
}