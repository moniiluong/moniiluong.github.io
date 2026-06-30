'use client';

import { motion } from 'framer-motion';
import {
	FaApple,
	FaGitAlt,
	FaGoogle,
	FaJava,
	FaLinux,
	FaPython,
	FaReact,
	FaWindows,
} from 'react-icons/fa';

const highlightedSkills = ['Agile', 'Collaboration', 'Design', 'Adaptability', 'Open-minded'];

const highlightedTechnologies = [
	{ name: 'Java', icon: <FaJava />, color: 'skill-tool-orange' },
	{ name: 'Python', icon: <FaPython />, color: 'skill-tool-yellow' },
	{ name: 'React', icon: <FaReact />, color: 'skill-tool-blue' },
	{ name: 'Google Cloud', icon: <FaGoogle />, color: 'skill-tool-purple' },
	{ name: 'Git', icon: <FaGitAlt />, color: 'skill-tool-red' },
];

const highlightedPlatforms = [
	{ name: 'macOS', icon: <FaApple /> },
	{ name: 'Linux', icon: <FaLinux /> },
	{ name: 'Windows', icon: <FaWindows /> },
];

export default function SkillsSection() {
	return (
		<section id="skills" className="skills-workbench">
			<div className="skills-grid-paper">
				<motion.header
					className="skills-heading"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.55 }}
				>
					<div>
						<p>currently in my toolbox</p>
						<h2>skills, tools &amp; <em>ways I work.</em></h2>
					</div>
					<span>A growing collection of the technologies I use and the habits I bring to every project.</span>
				</motion.header>

				<div className="skills-desk">
					<motion.article
						className="skills-note"
						initial={{ opacity: 0, x: -30, rotate: -6 }}
						whileInView={{ opacity: 1, x: 0, rotate: -3 }}
						viewport={{ once: true, amount: 0.35 }}
						transition={{ duration: 0.55 }}
					>
						<span className="skills-pin" aria-hidden="true" />
						<p className="skills-card-label">how I work</p>
						<h3>More than code</h3>
						<ul>
							{highlightedSkills.map((skill) => (
								<li key={skill}><span>✓</span>{skill}</li>
							))}
						</ul>
						<p className="skills-note-signoff">ideas → iteration → impact</p>
					</motion.article>

					<motion.article
						className="skills-tool-window"
						initial={{ opacity: 0, y: 35 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ duration: 0.6, delay: 0.12 }}
					>
						<div className="skills-window-bar">
							<span>toolbox.exe</span>
							<div><i /><i /><i /></div>
						</div>
						<div className="skills-window-content">
							<p className="skills-card-label">technologies</p>
							<h3>Things I build with</h3>
							<div className="skills-tool-grid">
								{highlightedTechnologies.map((technology, index) => (
									<motion.div
										key={technology.name}
										className={`skill-tool-sticker ${technology.color}`}
										whileHover={{ y: -7, rotate: index % 2 === 0 ? -2 : 2 }}
									>
										<span>{technology.icon}</span>
										<strong>{technology.name}</strong>
									</motion.div>
								))}
							</div>
						</div>
					</motion.article>

					<motion.article
						className="skills-platform-card"
						initial={{ opacity: 0, x: 30, rotate: 5 }}
						whileInView={{ opacity: 1, x: 0, rotate: 2 }}
						viewport={{ once: true, amount: 0.35 }}
						transition={{ duration: 0.55, delay: 0.2 }}
					>
						<span className="project-object-tape" aria-hidden="true" />
						<p className="skills-card-label">platforms</p>
						<h3>Where I work</h3>
						<div className="platform-tickets">
							{highlightedPlatforms.map((platform) => (
								<div key={platform.name}>
									<span>{platform.icon}</span>
									<strong>{platform.name}</strong>
								</div>
							))}
						</div>
					</motion.article>
				</div>

				<div className="skills-learning-strip" aria-label="Always learning">
					<span>always learning</span><i>✦</i><span>always building</span><i>✦</i><span>always improving</span>
				</div>
			</div>
		</section>
	);
}
