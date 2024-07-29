export default function Body() {
	return (
		<section>
			<div className='flex justify-around md:max-w-screen-xl md:m-auto gap-2'>
				<div className='flex flex-col justify-center text-gradient h-screen'>
					<p className='text-gradient text-xl opacity-50 font-bold'>NewChance</p>
					<p className='text-8xl 2xl:text-9xl'>Bankowość</p>
					<p className='text-6xl 2xl:text-8xl whitespace-nowrap'>w nowoczesnym</p>
					<p className='text-4xl 2xl:text-7xl'>wydaniu</p>
				</div>
				<div className='hidden xl:flex xl:items-center '>
					<img
						className='bg-none'
						src='../src/assets/cards.png'
						alt=''
					/>
				</div>
			</div>
		</section>
	)
}
