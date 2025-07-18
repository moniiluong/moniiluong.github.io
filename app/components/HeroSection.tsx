'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// ✅ Typewriter effect component
type TypewriterTextProps = {
	text: string;
	delay?: number;
	className?: string;
};

export function TypewriterText({ text = '', delay = 50, className = '' }: TypewriterTextProps) {
	const [displayedText, setDisplayedText] = useState('');
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (!text || index >= text.length) return;

		const timeout = setTimeout(() => {
			setDisplayedText((prev) => prev + text.charAt(index));
			setIndex((prev) => prev + 1);
		}, delay);

		return () => clearTimeout(timeout);
	}, [index, text, delay]);

	return (
		<motion.h1
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className={className}
		>
			{displayedText}
			<span className="animate-pulse">|</span>
		</motion.h1>
	);
}

// ✅ Motion variants
const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ✅ Hero Section
export default function HeroSection() {
	return (
		<motion.section
			initial="hidden"
			animate="show"
			variants={containerVariants}
			className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-28 gap-12 md:gap-24 text-white relative overflow-hidden"
		>
			{/* Main content */}
			<motion.div
				variants={containerVariants}
				className="relative z-10 flex flex-col justify-center gap-8 max-w-2xl"
			>
				<motion.p
					variants={itemVariants}
					className="text-base uppercase tracking-widest text-purple-300"
				>
					Software Engineer
				</motion.p>

				<TypewriterText
					text="Hello I'm Monica Luong"
					className="text-4xl md:text-7xl font-extrabold leading-tight text-purple-400"
				/>

				<motion.p
					variants={itemVariants}
					className="text-lg md:text-xl text-gray-300 max-w-2xl"
				>
					{`I’m currently a sophomore at Case Western Reserve University in Cleveland, Ohio. I aspire to be a software engineer and am seeking opportunities to learn, grow my skills, and demonstrate my capabilities through impactful projects. I’d love to connect with you. Please see the 'Contact Me' section for more information.`}
				</motion.p>

				<motion.div
					variants={itemVariants}
					className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-4"
				>
					<motion.button
						whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(168,85,247,0.6)' }}
						className="border border-purple-400 text-purple-400 px-8 py-3 text-base rounded-full hover:bg-purple-400 hover:text-black transition"
					>
						Download CV
					</motion.button>

					<div className="flex gap-5 text-purple-400 text-3xl">
						<motion.i
							whileHover={{ scale: 1.2, color: '#fff' }}
							className="fab fa-github transition cursor-pointer"
						/>
						<motion.i
							whileHover={{ scale: 1.2, color: '#fff' }}
							className="fab fa-linkedin transition cursor-pointer"
						/>
						<motion.i
							whileHover={{ scale: 1.2, color: '#fff' }}
							className="fab fa-instagram transition cursor-pointer"
						/>
					</div>
				</motion.div>
			</motion.div>

			{/* Profile Picture */}
			<motion.div
				className="relative z-10 rounded-full border-4 border-purple-400 p-3"
				animate={{ y: [0, -15, 0] }}
				transition={{ duration: 6, repeat: Infinity }}
			>
				<Image
					src="/IMG_2513.jpg"
					alt="Monica Luong"
					width={420}
					height={420}
					className="rounded-full object-cover"
				/>
			</motion.div>
		</motion.section>
	);
}
