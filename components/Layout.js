import Head from "next/head"
import Header from "@/components/Header"
import Search from "@/components/Search"
import Footer from "@/components/Footer"

export default function Layout({ title, keywords, descriptions, children }) {
  return (
    <div>
      <Head>
        <title>Welcome to CoffeeSpace ☕️</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Search />
      <main className='container mx-auto my-7'>{children}</main>
      <Footer />
    </div>
  )
}
