import Layout from "@/components/Layout"

export default function AboutPage() {
  return (
    <Layout title='About CoffeeSpace'>
      <h1 className='text-5xl border-b-4 pb-5 font-bold'>About CoffeeSpace</h1>
      <div className='bg-white shadow-md rounded-lg px-10 py-6 mt-6'>
        <h3 className='text-2xl mb-5'>커피스페이스블로그</h3>
        <p className='mb-3'>이 블로그는 넥스트JS으로 만들었습니다.</p>
        <p>
          <span className='font-bold'>버전 1.0.0</span>
        </p>
      </div>
    </Layout>
  )
}
