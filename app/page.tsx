'use client'

import { useState } from 'react';

export default function Home() {
    const [count, setCount] = useState(0); // Counter, using useState from React

    return (
        <section className="w-full flex h-screen justify-center items-center bg-slate-600 flex-col gap-8">


        <h1 className="text-6xl text-blue-400">Counter</h1>


        {/* Counter */}
        <h1 className='text-7xl mb-16 font-bold'>{ count }</h1>
    

        <div className="flex md:flex-row flex-col w-screen items-center gap-10">


            {/* Button 'Add' */}
            <button className="w-4/5 cursor-pointer text-4xl  border-2 border-green-800 py-3 rounded-xl hover:bg-green-400 font-bold"
            onClick={() => setCount(count + 1)}
            >Add</button>


            {/* Button 'Subtract' */}
            <button className="w-4/5 cursor-pointer hover:bg-red-400 text-4xl border-2 border-red-800 py-3 rounded-xl font-bold"
            onClick={() => setCount(count - 1)}
            >Subtract</button>


        </div>


        </section>
    )
}
