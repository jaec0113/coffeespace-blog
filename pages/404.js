import Link from "next/link"
import Image from "next/image"
import Layout from "@/components/Layout"

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className='flex flex-col items-center mt-20'>
        <Image
          src='/logo.png'
          width={70}
          height={70}
          className='bg-gray-800 rounded-2xl'
        />

        <h1 className='text-6xl my-5'>아이고! Uh oh!</h1>
        <br />
        <h2 className='text-4xl text-gray-400 mb-5'>
          이 커피스페이스는 없어 보입니다... <br />
          Sorry, that coffee space doesn't seem to exist...
        </h2>
        <br />
        <Link href='/'>Go Back Home</Link>
      </div>
    </Layout>
  )
}
