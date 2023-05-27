"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import background from './assets/pillars.png'
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isInvalid, setIsInvalid] = useState([]);
  
  const router = useRouter();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(email.length < 6){
      setIsInvalid('email')
      return;
    }

    if(!password){
      setIsInvalid('password')
      return;
    }

    
    router.push('/dashboard')
  }

  return (
    <main className="flex items-center justify-center sm:justify-between h-screen w-full overflow-hidden ">
      <form className="flex flex-col gap-4 sm:p-8 lg:p-16 xl:p-48 sm:w-1/2 justify-center h-full" onSubmit={handleSubmit}>
      <h1 className="text-3xl sm:text-6xl font-bold w-full text-center">Faça seu login<span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-orange-400 bg-clip-text text-transparent text-4xl sm:text-8xl">.</span></h1>
        <label htmlFor="email">Email *
        {isInvalid === 'email' && <small className="text-red-400 font-bold"> Campo inválido.</small>}
        </label>
        <input className="bg-zinc-900  outline-blue-400 focus:outline-offset-2" type="email" id="email"  onChange={ ({target}) => setEmail(target.value)}/>

        <label htmlFor="password">Password *</label>
        <input className="bg-zinc-900  outline-blue-400 focus:outline-offset-2" type="password" id="password" onChange={ ({target}) => setPassword(target.value)}/>
        {isInvalid === 'password' && <small className="text-red-400 font-bold">Campo inválido.</small>}
        
        <Link href="#" className="underline text-blue-700 hover:text-blue-900 transition text-right">Esqueci minha senha</Link>
        <button type="submit" className="bg-gradient-to-tr from-blue-400 via-indigo-400 to-orange-400 text-white p-2 rounded hover:from-orange-400 hover:via-indigo-400 hover:to-blue-400 transition">Entrar</button>

        <Link href="#" className="underline text-blue-700 hover:text-blue-900 transition text-center">Ainda não tenho uma conta</Link>
      </form>
      <div className="sm:w-1/2 h-screen shadow-custom bg-[url('./assets/pillars.png')] bg-auto bg-center opacity-60">
      {/* <Image src={background} alt="pillars of creation" className="hidden  sm:block h-screen  z-10 opacity-100  shadow-custom"></Image> */}

      </div>
    </main>
  )
}
