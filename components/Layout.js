import Head from "next/head"
import Header from "@/components/Header"
import Search from "@/components/Search"
import Footer from "@/components/Footer"

export default function Layout({ title, keywords, descriptions, children }) {
  return (
    <div>
      <Head>
        <title>Welcome to CoffeeSpace ☕️</title>
        <meta
          name='descriptions'
          content='그냥 커피를 사랑하는 사람의 커피 블로그입니다. A blog about coffee from a coffee enthusiast.'
        />
        <meta
          name='keywords'
          content='blog, coffee blog, coffeespace, coffeespace blog, coffee, coffee aje, 블로그, 커피블로그, 커피스페이스, 커피스페이스블로그, 커피, 커피아제'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Search />
      <main className='container mx-auto my-7'>{children}</main>
      <Footer />
    </div>
  )
}
