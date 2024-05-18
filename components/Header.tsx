import Link from "next/link";

export const Header = () => {
  return (
    <header className={"p-3 flex justify-center bg-neutral-800 text-gray-50 "}>
      <Link href="/" className={" hover:text-orange-500"}> Home </Link>
      <Link href="/blog" className={"px-4  hover:text-orange-500"}> Blog </Link>
      <Link href="/about" className={" hover:text-orange-500"}> About </Link>
    </header>
  )
}