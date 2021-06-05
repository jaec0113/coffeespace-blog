import Link from "next/link"

export default function CategoryLabel({ children }) {
  const colorKey = {
    커피책: "yellow",
    원두: "brown",
    카페: "blue",
    커피도구: "purple",
    레시피: "green",
    기타: "orange",
    음료: "red",
  }

  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}
