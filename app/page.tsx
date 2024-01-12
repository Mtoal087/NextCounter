'use client'

import { useState } from 'react';

export default function Home() {
    const [count, setCount] = useState(0); // Counter, using useState from React

    return (
        <section className="w-full flex h-screen justify-center items-center bg-slate-600 flex-col gap-8">


        <h1 className="text-6xl text-blue-400">Counter</h1>


        {/* Counter */}
        <h1 className='text-7xl mb-16 font-bold'>{ count }</h1>
    

        <div className="flex sm:flex-row flex-col w-screen items-center gap-10 sm:gap-0">


            {/* Button 'Add' */}
            <button className="w-4/5 cursor-pointer text-4xl  border-4 border-green-700 py-3 rounded-xl hover:bg-green-300 hover:text-slate-800 font-bold shadow-md hover:shadow-2xl sm:mx-12"
            onClick={() => setCount(count + 1)}
            >Add</button>


            {/* Button 'Subtract' */}
            <button className="w-4/5 cursor-pointer hover:bg-red-300 text-4xl border-4 border-red-700 py-3 rounded-xl font-bold shadow-md hover:shadow-2xl hover:text-slate-800 sm:mx-12"
            onClick={() => setCount(count - 1)}
            >Subtract</button>


        </div>


        </section>
    )
}
