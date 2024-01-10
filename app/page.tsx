'use client'
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <section className="w-full flex h-screen justify-center items-center bg-slate-600 flex-col gap-8">
      <h1 className="text-4xl text-blue-400">
        Counter
      </h1>
      <div className="button flex gap-20 sm:flex-col">
        <button className="btn cursor-pointer hover:bg-red-400 absolute left-20 sm:w-100"
        onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <h1>{ count }</h1>
        <button className="btn cursor-pointer hover:bg-green-400 absolute right-20"
        onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </section>
  )
}
