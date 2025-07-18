'use client';

import { motion } from 'framer-motion';
import {
	FaJava,
	FaPython,
	FaReact,
	FaGoogle,
	FaGitAlt,
	FaApple,
	FaLinux,
	FaWindows
} from 'react-icons/fa';

const highlightedSkills = ['Agile', 'Collaborate', 'Design', 'Adaptability', 'Open'];

const highlightedTechnologies = [
	{
		name: 'Java',
		icon: <FaJava className="text-white text-2xl" />,
		bg: 'bg-gradient-to-br from-orange-400 to-red-500'
	},
	{
		name: 'Python',
		icon: <FaPython className="text-black text-2xl" />,
		bg: 'bg-gradient-to-br from-yellow-300 to-lime-300'
	},
	{
		name: 'React',
		icon: <FaReact className="text-white text-2xl" />,
		bg: 'bg-gradient-to-br from-cyan-400 to-blue-500'
	},
	{
		name: 'Google Cloud',
		icon: <FaGoogle className="text-white text-2xl" />,
		bg: 'bg-gradient-to-br from-blue-400 to-purple-500'
	},
	{
		name: 'Git',
		icon: <FaGitAlt className="text-white text-2xl" />,
		bg: 'bg-gradient-to-br from-red-400 to-orange-500'
	}
];

const highlightedPlatforms = [
	{
		name: 'MacOS',
		icon: <FaApple className="text-white text-2xl" />,
		bg: 'bg-gradient-to-br from-gray-400 to-gray-700'
	},
	{
		name: 'Linux',
		icon: <FaLinux className="text-black text-2xl" />,
		bg: 'bg-gradient-to-br from-yellow-200 to-amber-400'
	},
	{
		name: 'Windows',
		icon: <FaWindows className="text-white text-2xl" />,
		bg: 'bg-gradient-to-br from-blue-300 to-blue-600'
	}
];

export default function SkillsSection() {
	return (
		<section id="skills" className="scroll-mt-28 py-12 md:py-20">
			<div className="max-w-7xl mx-auto px-4 space-y-16">
				{/* Header */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold text-center mb-4"
				>
					Highlighted Skills & Technologies
				</motion.h2>

				{/* Skills */}
				<div>
					<h3 className="text-2xl font-semibold mb-6 text-center text-purple-300">Skills</h3>
					<div className="flex flex-wrap justify-center gap-6">
						{highlightedSkills.map((skill, index) => (
							<motion.div
								key={skill}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								whileHover={{ scale: 1.05 }}
								className="bg-white/5 rounded-xl px-6 py-3 text-center hover:bg-white/10 transition-all shadow-md hover:shadow-purple-500/30 hover:shadow-lg min-w-[180px]"
							>
								<p className="text-lg font-medium">{skill}</p>
							</motion.div>
						))}
					</div>
				</div>

				{/* Technologies */}
				<div>
					<h3 className="text-2xl font-semibold mb-6 text-center text-purple-300">Technologies</h3>
					<div className="flex flex-wrap justify-center gap-6">
						{highlightedTechnologies.map((tech, index) => (
							<motion.div
								key={tech.name}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								whileHover={{ scale: 1.05 }}
								className="bg-white/5 rounded-xl px-6 py-3 text-center hover:bg-white/10 transition-all shadow-md hover:shadow-purple-500/30 hover:shadow-lg min-w-[180px]"
							>
								<div className="flex flex-col items-center gap-2">
									<div className={`${tech.bg} px-4 py-2 rounded-md shadow-lg`}>
										{tech.icon}
									</div>
									<p className="text-lg font-medium">{tech.name}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Platforms */}
				<div>
					<h3 className="text-2xl font-semibold mb-6 text-center text-purple-300">Platforms</h3>
					<div className="flex flex-wrap justify-center gap-6">
						{highlightedPlatforms.map((platform, index) => (
							<motion.div
								key={platform.name}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								whileHover={{ scale: 1.05 }}
								className="bg-white/5 rounded-xl px-6 py-3 text-center hover:bg-white/10 transition-all shadow-md hover:shadow-purple-500/30 hover:shadow-lg min-w-[180px]"
							>
								<div className="flex flex-col items-center gap-2">
									<div className={`${platform.bg} px-4 py-2 rounded-md shadow-lg`}>
										{platform.icon}
									</div>
									<p className="text-lg font-medium">{platform.name}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
