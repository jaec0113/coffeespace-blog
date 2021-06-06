import Link from "next/link"
import Layout from "@/components/Layout"
import { FaInstagramSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa"

export default function AboutPage() {
  return (
    <Layout title='About CoffeeSpace'>
      <h1 className='text-5xl border-b-4 pb-5 font-bold text-center'>
        About CoffeeSpace
      </h1>
      <div className='bg-white shadow-md rounded-lg px-10 py-6 mt-6'>
        <h3 className='text-2xl mb-5'>커피스페이스블로그</h3>
        <p className='mb-3'>
          이 블로그는 커피에 대한 블로그예요. 저는 커피 일을 한적이 없는데
          커피를 너무 즐거워서 많이 마시고 '연구'도 좀 해요. 이 블로그는 그냥
          제가 좀 공유하고 싶어서 만들었어요. 이 블로그에 대한 희망은 커피의
          넓은 세상을 탐험하면서 그냥 재미있는 SNS보다 길고 책보다 짧은 포스트를
          올릴 거예요. 포스트 스케줄이 없고 그냥 신기한 것이나 재미있는 것이
          찾으면 올릴 거예요. 이 블로그는 한국어와 영어로 쓸 것 같아요. 위에
          부분은 한국어, 밑에 부분은 영어로 할 거예요~
        </p>
        <br />
        <h4 className='text-xl mb-5'>커피아재에 대해</h4>
        <p className='mb-3'>
          안녕하세요~ 커피아재예요. 저는 미국에 사는 한국에 태어난 커피를 너무
          좋아하는 아저씨예요. 제가 이 블로그 만든 이유가 여러 가지 있어요. 일단
          그냥 저의 커피 사랑을 공유하고 싶었어요. 그리고 제가 최근에 교육에서
          코딩으로 직업을 바꿨어요. 코딩을 배우면서 이런 사이트와 블로그를
          만들었어요. 마지막으로 저는 한국어와 한글을 잘 못했지만 (저는 어렸을
          때 입양 됐어요) 미국에 살면서 할 수 있는 만큼 좀 지키기 위해 계속
          연습하고 싶어요. 그래서 아마도 말실순나 이상한 표현을 쓴다면 좀 봐
          주세요~ 미리 사과 드릴게요!
        </p>
        <br />
        <div className='flex content-between'>
          <Link href='https://instagram.com/jaehyuk_tedd0113'>
            <a>
              <FaInstagramSquare size={42} />
            </a>
          </Link>
          <Link href='https://twitter.com/jaec0113'>
            <a>
              <FaTwitterSquare size={42} />
            </a>
          </Link>
          <Link href='https://www.linkedin.com/in/tedd-chee-0113'>
            <a>
              <FaLinkedin size={42} />
            </a>
          </Link>
        </div>
        <br />
        <h3 className='text-2xl mb-5'>Coffeespace Blog</h3>
        <p className='mb-3'>
          This is a blog about coffee. I don't have any experience working in
          the coffee industry, but I do enjoy coffee a lot and of course drink
          quite a bit and do some 'research' into it. I created this blog
          primarily just because I wanted to share. My hope for this blog is to
          write fun posts (longer than social media, but certainly not a book)
          as I explore the wide world of coffee. I don't intend to have any sort
          of schedule for posting, but rather just whenever I find something fun
          or interesting to share. I will write every post in both Korean and
          English. The top part will be in Korean and the bottom in English.
        </p>
        <br />
        <h4 className='text-xl mb-5'>About Coffee Aje</h4>
        <p className='mb-3'>
          Hello, I am the Coffee Aje (pronounced 'ah-je' and is a Korean word
          that just means 'man'). I currently live in the US (Texas), but was
          born and lived in Korea. I made this blog for a few reasons. First,
          like I wrote above, I just wanted to share my love of coffee
          somewhere. Also, I recently changed careers from education to coding,
          and as part of the learning process I had an opportunity to make this
          site and blog. Finally, even though my Korean is still poor (was
          adopted when I was a child) I wanted to make a place where I could at
          least maintain what I can do. If you happen to read the Korean part
          and there are mistakes or odd phrases, please forgive me (I apologize
          in advance).{" "}
        </p>
        <p>
          <span className='font-bold'>버전 1.0.0</span>
        </p>
      </div>
    </Layout>
  )
}
