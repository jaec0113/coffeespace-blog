import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className='bg-yellow-800 text-gray-100 shadow w-full'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
            <Image
              src='/logo.png'
              width={75}
              height={75}
              alt='coffee aje logo'
            />
            <span className='ml-3 text-xl'>CoffeeSpace</span>
          </a>
        </Link>
        <nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>
          <Link href='/blog'>
            <a className='mx-5 cursor-pointer uppercase hover:text-black'>
              Blog
            </a>
          </Link>
          <Link href='/favorites'>
            <a className='mx-5 cursor-pointer uppercase hover:text-black'>
              Favorites
            </a>
          </Link>
          <Link href='/about'>
            <a className='mx-5 cursor-pointer uppercase hover:text-black'>
              About
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
