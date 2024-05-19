import { Navigation } from "./Navigation";

type LinkType = {
  title: string
  href: string
}

const links: LinkType[] = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Blog",
    href: "/blog"
  },
  {
    title: "About",
    href: "/about"
  }
]

export const Header = () => {
  return (
    <header className={"p-3 flex justify-center bg-neutral-800 text-gray-50 "}>
      <Navigation navLinks={links}/>
    </header>
  )
}