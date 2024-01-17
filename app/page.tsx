'use client';

import { useState } from 'react';

export default function Home() {
	const [count, setCount] = useState(0); // Counter, using useState from React

	return (
		<section className="flex flex-col items-center justify-center w-full h-screen gap-8 bg-slate-600">
			<h1 className="text-6xl text-blue-400">Counter</h1>

			{/* Counter */}
			<h1 className="mb-16 font-bold text-7xl">{count}</h1>

			<div className="flex flex-col items-center w-screen gap-10 sm:flex-row sm:gap-0">
				{/* Button 'Add' */}
				<button
					className="w-4/5 py-3 text-4xl font-bold border-4 border-green-700 shadow-md cursor-pointer sm:py-5 sm:hover:bg-green-300 rounded-xl sm:hover:shadow-2xl sm:hover:text-slate-800 sm:mx-12 sm:hover:bg-opacity-70"
					onClick={() => setCount(count + 1)}
				>
					Add
				</button>

				{/* Button 'Subtract' */}
				<button
					className="w-4/5 py-3 text-4xl font-bold border-4 border-red-700 shadow-md cursor-pointer sm:py-5 sm:hover:bg-red-300 rounded-xl sm:hover:shadow-2xl sm:hover:text-slate-800 sm:mx-12 sm:hover:bg-opacity-70"
					onClick={() => setCount(count - 1)}
				>
					Subtract
				</button>
			</div>

			{/* Button 'Reset' */}
			<button
				className="w-4/5 p-3 text-4xl font-bold border-4 border-yellow-400 shadow-md cursor-pointer sm:mt-7 sm:py-5 sm:hover:bg-yellow-300 rounded-xl sm:hover:shadow-2xl sm:hover:text-slate-800 sm:hover:bg-opacity-70"
				onClick={() => setCount(0)}
			>
				Reset
			</button>
		</section>
	);
}
