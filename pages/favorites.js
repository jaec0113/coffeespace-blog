import Layout from "@/components/Layout"

export default function FavoritesPage() {
  return (
    <Layout title='Coffeespace Favorites'>
      <h1 className='text-5xl border-b-4 pb-5 font-bold'>
        저의 제일 좋아하는 커피 것 <br /> My Coffee Favorites
      </h1>
      <div className='bg-white shadow-md rounded-lg px-10 py6 mt-6'>
        <h3 className='text-2xl mb-5'>Origins</h3>
        <ul className='mb-3 list-decimal'>
          <li>에티오피아 - Ethiopia</li>
          <li>콜롬비아 - Colombia</li>
          <li>케냐 - Kenya</li>
          <li>온두라스 - Honduras</li>
          <li>코스타리카 - Costa Rica</li>
        </ul>
        <h3 className='text-2xl mb-5'>Brewers</h3>
        <ul className='mb-3 list-decimal'>
          <li>V60 Decanter (plastic)</li>
          <li>April Brewer</li>
          <li>December</li>
          <li>Hario Cloth</li>
          <li>Kalita Wave</li>
        </ul>
        <h3 className='text-2xl mb-5'>Roasters</h3>
        <ul className='mb-3 list-disc'>
          <li>비브레이브 (한국) - Be Brave (South Korea)</li>
          <li>팀 웬들보 (노르웨이) - Tim Wendelboe (Norway)</li>
          <li>커피그래피티 (한국) - Coffee Graffiti (South Korea)</li>
          <li>오닉스커피 (미국) - Onyx Coffee (USA)</li>
          <li>
            베르크커피로스터스 (한국) - WERK Coffee Roasters (South Korea)
          </li>
        </ul>
        <h3 className='text-2xl mb-5'>Coffee Youtubers</h3>
        <ul className='mb-3 list-disc'>
          <li>James Hoffmann (English)</li>
          <li>Bunker Company (Korean)</li>
          <li>Namja Coffee (Korean)</li>
        </ul>
        <h3 className='text-2xl mb-5'>Coffee Blogs</h3>
        <ul className='mb-3 list-disc'>
          <li>BaristaHoon - Lee Jonghoon (Korean)</li>
          <li>Chris Baca (English)</li>
          <li>Coffee ad Astra - Jonathan Gagne (English)</li>
        </ul>
      </div>
    </Layout>
  )
}
