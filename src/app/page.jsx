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
    if (email.length < 6) {
      setIsInvalid('email')
      return;
    }

    if (!password) {
      setIsInvalid('password')
      return;
    }


    router.push('/dashboard')
  }

  return (
    <main className="flex items-center justify-center sm:justify-between h-screen w-full overflow-hidden ">
      <form className="flex flex-col space-y-11 m-auto justify-center h-full" onSubmit={ handleSubmit }>
        <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold w-full text-center">Faça seu login<span className="bg-gradient-to-tr from-indigo-400 via-purple-400 to-orange-300 bg-clip-text text-transparent text-4xl sm:text-8xl">.</span></h1>
        <section className="flex flex-col gap-4">

          <label htmlFor="email">Email
            { isInvalid === 'email' && <small className="text-red-400 font-bold"> Campo inválido.</small> }
          </label>
          <div className="bg-gradient-to-r from-indigo-400 via-purple-400 to-orange-300 p-0.5 rounded-lg">
            <input className="bg-zinc-900 w-full p-2 rounded-lg appearance-none outline-none shadow-lg focus:shadow-indigo-400" type="email" id="email" onChange={ ({ target }) => {
              setEmail(target.value);
              setIsInvalid([])
            } } />
          </div>

          <label htmlFor="password">Password
            { isInvalid === 'password' && <small className="text-red-400 font-bold"> Campo inválido.</small> }
          </label>
          <div className="bg-gradient-to-r from-indigo-400 via-purple-400 to-orange-300 p-0.5 rounded-lg">

          <input className="bg-zinc-900 w-full p-2 rounded-lg appearance-none outline-none shadow-lg focus:shadow-indigo-400" type="password" id="password" onChange={ ({ target }) => {
            setPassword(target.value);
            setIsInvalid([])
          } } />
          </div>

          <Link href="#" className="underline text-blue-900 hover:text-blue-950 transition text-right">Esqueci minha senha</Link>
        </section>

        <section className="flex flex-col gap-4">

          <button type="submit" className="bg-gradient-to-tr from-indigo-400 via-purple-400 to-orange-300 text-white p-2 rounded hover:from-orange-300 hover:via-purple-400 hover:to-indigo-400 transition">Entrar</button>

          <Link href="#" className="underline text-blue-900 hover:text-blue-950 transition text-center">Ainda não tenho uma conta</Link>
        </section>
      </form>
      <div className="sm:w-1/2 h-screen shadow-custom bg-[url('./assets/pillars.png')] bg-auto bg-center opacity-60">
      </div>
    </main>
  )
}
