import Image from 'next/image'
import Link from 'next/link'
import logo from './images/logo.png'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'My Page Title',
  icons: './favicon.ico',
}

import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

export default function Home() {
  return (
    <main className="p-5">
      <header className='flex w-full justify-between px-4 items-center'>
        <p className='flex items-center text-lg'><IoIosArrowBack  className='text-2xl mr-2'/> senha iti</p>
        <AiOutlineQuestionCircle className='text-3xl'/>
      </header>
      <main>
        <form action="" className='flex w-10/12 mx-auto mt-20'>
          <div className='w-1/6 p-1'><input type="number" name="" id="" className='inputfocus aspect-square rounded-lg w-full bg-neutral-300'/></div>
          <div className='w-1/6 p-1'><input type="number" name="" id="" className='inputfocus aspect-square rounded-lg w-full bg-neutral-300'/></div>
          <div className='w-1/6 p-1'><input type="number" name="" id="" className='inputfocus aspect-square rounded-lg w-full bg-neutral-300'/></div>
          <div className='w-1/6 p-1'><input type="number" name="" id="" className='inputfocus aspect-square rounded-lg w-full bg-neutral-300'/></div>
          <div className='w-1/6 p-1'><input type="number" name="" id="" className='inputfocus aspect-square rounded-lg w-full bg-neutral-300'/></div>
          <div className='w-1/6 p-1'><input type="number" name="" id="" className='inputfocus aspect-square rounded-lg w-full bg-neutral-300'/></div>
        </form>
        <div className='color1 font-semibold mt-3 text-center'>esqueci minha senha</div>
        <Link href='/painel' className='w-10/12 h-12 gradient mx-auto text-white font-semibold flex justify-center items-center cursor-pointer rounded-full mt-10'>continuar</Link>
      </main>






      <div className='entry1-animate'>
        <Image src={logo} alt='' className='w-16 rounded-xl'/>
      </div>
    </main>
  )
}
