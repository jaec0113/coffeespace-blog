import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <div className='flex flex-col mt-5 mb-5 items-center'>
      <footer>
        <Link href='/about'>
          <Image
            src='/images/coffee-aje-logo-2-v2.png'
            alt='coffee aje designs logo'
            width={300}
            height={70}
          />
        </Link>
        <p>Copyright &copy; coffeeAje Designs 2021</p>
      </footer>
    </div>
  )
}
