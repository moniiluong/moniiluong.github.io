'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
	{
		id: 1,
		title: 'Gomoku Game',
		description: 'A JavaFX Gomoku game with win detection and rule enforcement.',
		image: '/GomokuPicture.jpg',
		github: 'https://github.com/moniiluong/Gomoku',
	},
	{
		id: 2,
		title: 'X',
		description: 'Empty',
		image: '/laptop.jpg',
	},
];

export default function ProjectsSection() {
	return (
		<section id="projects" className="scroll-mt-28 py-12 md:py-20 px-4 max-w-7xl mx-auto">

			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
			>
				Featured Projects
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: project.id * 0.1 }}
						whileHover={{ scale: 1.02 }}
						className="group relative aspect-video rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10"
					>
						<Image
							src={project.image}
							alt={project.title}
							fill
							className="object-cover transition-transform group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
						<div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
							<h3 className="text-xl font-bold mb-2">{project.title}</h3>
							<p className="text-gray-300 mb-4">{project.description}</p>
							<div className="flex gap-4">
								<Link
									href="#"
									className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
								>
									View Project
								</Link>
								{project.github && (
									<Link
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
									>
										GitHub
									</Link>
								)}
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
