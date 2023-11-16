import Image from 'next/image'
import mainImage from '../../images/mainImage.png'
import userImage from '../../images/userImage.png'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { IoNotificationsOutline } from 'react-icons/io5'
import { BsPiggyBank } from 'react-icons/bs'
import { CiMoneyBill } from 'react-icons/ci'
import { MdOutlineInput } from 'react-icons/md'
import { FaBarcode } from 'react-icons/fa'
import { BsCreditCard } from 'react-icons/bs'
import { AiOutlineRight } from 'react-icons/ai'
import { BsCoin } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'

import logoFundo from '../../images/logo-fundo.png'
import flower from '../../images/flower.png'

export default function Painel(){
    return(
        <main className="gradient">
            <div className='p-6 pb-60 relative'>
                <header className='flex justify-between mb-12'>
                    <div className='flex items-center'>
                        <Image src={userImage} alt='' className='w-8 rounded-full mr-3 text-lg'/>
                        <div className='font-semibold text-white'>Diovani</div>
                    </div>
                    <div className='flex items-center'>
                        <AiOutlineQuestionCircle className='text-3xl text-white mr-3'/>
                        <IoNotificationsOutline className='text-3xl text-white'/>
                    </div>
                </header>
                <p className='text-2xl text-white'>Volte a usar o cartão da conta e tenha mais praticidade pagando por aproximação.</p>
                <Image src={mainImage} alt='' className='bottom-0 right-8 h-56 w-fit absolute'/>
            </div>
            <main className='relative'>
                <div className='flex rounded-t-3xl bg-neutral-100 p-4'>
                    <div className='aspect-square w-1/5 p-1'>
                        <div className='aspect-square rounded-lg p-2 bg-white'>
                            <BsPiggyBank className='text-2xl'/>
                            <p className='text-sm font-semibold'>metas</p>
                        </div>
                    </div>
                    <div className='aspect-square w-1/5 p-1'>
                        <div className='aspect-square rounded-lg p-2 bg-white'>
                            <CiMoneyBill className='text-2xl'/>
                            <p className='text-sm font-semibold'>transferir pix</p>
                        </div>
                    </div>
                    <div className='aspect-square w-1/5 p-1'>
                        <div className='aspect-square rounded-lg p-2 bg-white'>
                            <MdOutlineInput className='text-2xl'/>
                            <p className='text-sm font-semibold'>colocar dinheiro</p>
                        </div>
                    </div>
                    <div className='aspect-square w-1/5 p-1'>
                        <div className='aspect-square rounded-lg p-2 bg-white'>
                            <FaBarcode className='text-2xl'/>
                            <p className='text-sm font-semibold'>pagar conta</p>
                        </div>
                    </div>
                    <div className='aspect-square w-1/5 p-1'>
                        <div className='aspect-square rounded-lg p-2 bg-white'>
                            <BsCreditCard className='text-2xl'/>
                            <p className='text-sm font-semibold'>cartão da conta</p>
                        </div>
                    </div>
                </div>
                <div className='bg-neutral-100 px-4 py-2'>
                    <div className='flex justify-between'>
                        <p className='font-semibold'>seus produtos</p>
                        <AiOutlineEye className='text-2xl'/>
                    </div>
                    <div className='p-2'>
                        <div className='p-3 bg-white rounded-xl'>
                            <Image src={logoFundo} alt='' className='rounded-full w-9'/>
                            <div className='flex items-center justify-between my-3'>
                                <p>saldo iti</p>
                                <p className='font-semibold'>R$ 11.026.849,23</p>
                            </div>
                            <div className='border border-neutral-200'></div>
                            <div className='flex items-center justify-between text-neutral-500 mt-3'>
                                <p>acessar extrato</p>
                                <AiOutlineRight />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-neutral-100 px-4 py-2 pt-6'>
                    <p className='font-semibold'>soluções para você</p>
                    <div className='p-3 bg-white rounded-xl flex mt-2'>
                        <div className='w-2/12 flex items-center'>
                            <Image src={flower} alt='' className='w-8'/>
                        </div>
                        <div className='w-9/12'>
                            <div>benefícios iti</div>
                            <div className='font-semibold'>aproveite descontos</div>
                        </div>
                        <div className='1/12 flex items-center relative'>
                            <AiOutlineRight className='text-neutral-500 text-2xl'/>
                        </div>
                    </div>
                </div>
                <div className='bg-neutral-100 p-6'>
                    <div className='font-bold'>o que você deseja fazer?</div>
                    <div className='flex flex-wrap text-white'>
                        <div className='w-6/12 aspect-square p-2'>
                            <div className='bg-slate-900 aspect-square rounded-xl p-4 relative'>
                                <CiMoneyBill className='text-4xl'/>
                                <p className='absolute bottom-4'>área pix</p>
                            </div>
                        </div>
                        <div className='w-6/12 aspect-square p-2'>
                            <div className='bg-slate-900 aspect-square rounded-xl p-4 relative'>
                                <BsCoin className='text-4xl'/>
                                <p className='absolute bottom-4'>seus saldos</p>
                            </div>
                        </div>
                        <div className='w-6/12 aspect-square p-2'>
                            <div className='bg-slate-900 aspect-square rounded-xl p-4 relative'>
                                <BsCreditCard className='text-4xl'/>
                                <p className='absolute bottom-4'>seus cartões</p>
                            </div>
                        </div>
                        <div className='w-6/12 aspect-square p-2'>
                            <div className='bg-slate-900 aspect-square rounded-xl p-4 relative'>
                                <HiOutlineSquares2X2 className='text-4xl'/>
                                <p className='absolute bottom-4'>ver todos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </main>
    )
}
