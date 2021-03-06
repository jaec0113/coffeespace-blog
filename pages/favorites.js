import Link from "next/link"
import Head from "next/head"
import Layout from "@/components/Layout"

export default function FavoritesPage() {
  return (
    <Layout title='Coffeespace Favorites'>
      <Head>
        <meta
          name='descriptions'
          content="커피스페이스의 지금 가장 좋아하는 것입니다. Coffeespace's current coffee favorites."
        />
        <meta
          name='keywords'
          content='favorites, coffee favorites, coffeespace, blog, coffee blog, coffee aje, 커피스페이스, 블로그, 커피블로그, 커피아제, 가장 좋아하는 커피 것들'
        />
      </Head>
      <h1 className='text-5xl border-b-4 pb-5 font-bold text-center'>
        제일 좋아하는 커피 것 <br /> My Coffee Favorites
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
          <Link href='https://instagram.com/watocoffee'>
            <a>
              <li>비브레이브 (한국) - Be Brave (South Korea)</li>
            </a>
          </Link>

          <Link href='https://instagram.com/be_brave_korea'>
            <a>
              <li>와토커피 (한국) - Wato Coffee (South Korea)</li>
            </a>
          </Link>

          <Link href='https://instagram.com/timwendelboe'>
            <a>
              <li>팀 웬들보 (노르웨이) - Tim Wendelboe (Norway)</li>
            </a>
          </Link>

          <Link href='https://instagram.com/coffeegraffiti'>
            <a>
              <li>커피그래피티 (한국) - Coffee Graffiti (South Korea)</li>
            </a>
          </Link>

          <Link href='https://instagram.com/onyxcoffeelab'>
            <a>
              <li>오닉스커피 (미국) - Onyx Coffee (USA)</li>
            </a>
          </Link>

          <Link href='https://instagram.com/werk.roasters'>
            <a>
              <li>
                베르크커피로스터스 (한국) - WERK Coffee Roasters (South Korea)
              </li>
            </a>
          </Link>
        </ul>
        <h3 className='text-2xl mb-5'>Coffee Youtubers</h3>
        <ul className='mb-3 list-disc'>
          <Link href='https://www.youtube.com/channel/UCMb0O2CdPBNi-QqPk5T3gsQ'>
            <a>
              <li>제임스 호프맨 (영어) - James Hoffmann (English)</li>
            </a>
          </Link>

          <Link href='https://www.youtube.com/channel/UCLQsFXDyyTWqqB8XlW-vqbQ'>
            <a>
              <li>벙커컴퍼니 (한국어) - Bunker Company (Korean)</li>
            </a>
          </Link>

          <Link href='https://www.youtube.com/channel/UC85mXeWRaycnlFmrhBdaAlg'>
            <a>
              <li>남자커피 (한국어) - Namja Coffee (Korean)</li>
            </a>
          </Link>

          <Link href='https://www.youtube.com/channel/UCDPpzXAYvwJifbfKYxdjZUA'>
            <a>
              <li>박근하 (한국어) - Park Geun-ha (Korean)</li>
            </a>
          </Link>

          <Link href='https://www.youtube.com/channel/UC5Oq6jxwXcIHMAnKvOluWcg'>
            <a>
              <li>안스타 (한국어) - Ahn Star (Korean)</li>
            </a>
          </Link>
        </ul>
        <h3 className='text-2xl mb-5'>Coffee Blogs</h3>
        <ul className='mb-3 list-disc'>
          <Link href='https://blog.naver.com/baristahoon'>
            <a>
              <li>이종훈 (한국어) - BaristaHoon, Lee Jonghoon (Korean)</li>
            </a>
          </Link>

          <Link href='https://realchrisbaca.com'>
            <a>
              <li>크리스 바카 (영어) - Chris Baca (English)</li>
            </a>
          </Link>

          <Link href='https://coffeeadastra.com'>
            <a>
              <li>
                커피 앋 아스트라 (영어) - Coffee ad Astra - Jonathan Gagne
                (English)
              </li>
            </a>
          </Link>
        </ul>
      </div>
    </Layout>
  )
}
