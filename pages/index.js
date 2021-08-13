import Link from "next/link"
import Head from "next/head"
import Layout from "@/components/Layout"
import Post from "@/components/Post"
import { getPosts } from "@/lib/posts"

export default function HomePage({ posts }) {
  return (
    <Layout>
      <Head>
        <meta
          name='descriptions'
          content='그냥 커피를 사랑하는 사람의 커피 블로그입니다. A blog about coffee from a coffee enthusiast.'
        />
        <meta
          name='keywords'
          content='blog, coffee blog, coffeespace, coffeespace blog, coffee, coffee aje, 블로그, 커피블로그, 커피스페이스, 커피스페이스블로그, 커피, 커피아제'
        />
      </Head>
      <h1 className='text-5xl border-b-4 p-5 font-bold text-gray-800 text-center'>
        Latest Posts
      </h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
      <Link href='/blog'>
        <a className='block text-center border border-yellow-800 text-yellow-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-yellow-800 focus:outline-none focus:shadow-outline w-full'>
          포스트 모두 보기 / See All Posts
        </a>
      </Link>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 6),
    },
  }
}
