import Image from "next/image"

export default function AboutNote() {
  return (
    <div>
      <h4 className='text-gray-500 mt-10'>
        커피아재에 대해 / About Coffee Aje
      </h4>
      <div className='flex'>
        <Image src='/logo.png' alt='coffee aje logo' width={50} height={50} />
        <p className='ml-10 text-gray-600'>
          미국에 살고 한국에 태어난 커피를 좋아하는 아저씨 커피아재입니다.{" "}
          <br />
          Korean-born, living in the US, coffee loving guy - coffee aje.
        </p>
      </div>
    </div>
  )
}
