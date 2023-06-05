import { Container, Text } from "@nextui-org/react";
import Link from 'next/link'

export function Header() {
  return <header className="flex justify-between items-center p-4 m-auto"  >
    <div className="">
      <h1 className="font-bold">next<span className="font-light">xkcd</span></h1>
    </div>
    <nav>
      <ul className="flex flex-row gap-2">
        <li><Link href='/' className="text-sm font-bold">Home</Link></li>
        <li><Link href='/about' className="text-sm font-bold">About</Link></li>
        <li><Link href='/search'className="text-sm font-bold">Search</Link></li>
      </ul>
    </nav>
  </header>
}
