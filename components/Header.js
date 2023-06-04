import { Container, Text } from "@nextui-org/react";
import Link from 'next/link'

export function Header() {
  return <Container
    as="header"
    responsive
    display="flex"
    justify="space-between"
  >
    <div>
      <Text small>next<Text>xkcd</Text></Text>
    </div>
    <nav>
      <Container 
      display="flex" 
      direction="row" 
      gap={4} responsive
      >
        <Link href='/'>Home</Link>
        <Link href='/'>About</Link>
        <Link href='/'>Search</Link>
      </Container>
    </nav>
  </Container>
}