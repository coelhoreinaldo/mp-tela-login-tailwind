"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <main className="flex flex-col items-center justify-center min-h-screen sm:p-24 w-full">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <h1 className="text-3xl sm:text-6xl font-bold w-full text-center">Faça seu login<span className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-500 bg-clip-text text-transparent text-4xl sm:text-8xl">.</span></h1>
        <label htmlFor="email">Email *
        {isInvalid === 'email' && <small className="text-red-400 font-bold"> Campo inválido.</small>}
        </label>
        <input className="bg-zinc-900  outline-blue-400 focus:outline-offset-2" type="email" id="email"  onChange={ ({target}) => setEmail(target.value)}/>

        <label htmlFor="password">Password *</label>
        <input className="bg-zinc-900  outline-blue-400 focus:outline-offset-2" type="password" id="password" onChange={ ({target}) => setPassword(target.value)}/>
        {isInvalid === 'password' && <small className="text-red-400 font-bold">Campo inválido.</small>}
        
        <Link href="#" className=" underline text-blue-700 text-right">Esqueci minha senha</Link>
        <button type="submit" className="bg-gradient-to-tr from-blue-400 via-purple-400 to-orange-400 text-white p-2 rounded">Entrar</button>

        <Link href="#" className="underline text-blue-700 text-center">Ainda não tenho uma conta</Link>
      </form>
    </main>
  )
}
