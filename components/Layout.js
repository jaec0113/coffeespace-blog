import Head from "next/head"
import Header from "../components/Header"

export default function Layout({ title, keywords, descriptions, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='descriptions' content={descriptions} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='container mx-auto my-7'>{children}</main>
    </div>
  )

  Layout.default.props = {
    title: "Welcome to CoffeeSpace",
    keywords: "coffee, brewing, espresso, recipes, grinders",
    descriptions: "News and thoughts on all things coffee",
  }
}
