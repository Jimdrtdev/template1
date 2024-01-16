
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Homepage from '@/components/homepage'
import About from '@/components/about'


export default function Home() {
  return (
    <main>
      <div>
      <Navbar></Navbar>
      <Homepage></Homepage>
      <About></About>
      </div>
    </main>
  )
}
