'use client';

import { motion } from 'framer-motion';

const experiences = [
	{
		number: '01',
		period: 'Jan 2026 — Present',
		role: 'Undergraduate Research Assistant',
		place: 'Case Western Reserve University · Cleveland, OH',
		description: 'Leading research that evaluates the safety of AI coding agents on real-world software development workflows. I engineered a scalable dataset pipeline from GitHub issues, benchmarked model behavior, and developed an AI safety evaluation framework connecting PR-level workflow data with coding-agent failure cases.',
		tags: ['Python', 'AI Safety', 'StarCoder2', 'LLaMA 3'],
		color: 'experience-card-yellow',
	},
	{
		number: '02',
		period: 'Sep 2025 — Present',
		role: 'Technical Office Assistant',
		place: 'Case Western Reserve University · Cleveland, OH',
		description: 'Streamlining daily operations for more than 25 students, faculty, and staff by standardizing request tracking, resource organization, and checklist-driven workflows. I use systematic task tracking and prioritization to reduce missed work and improve response time for departmental needs.',
		tags: ['Operations', 'Organization', 'Task Tracking', 'Communication'],
		color: 'experience-card-blue',
	},
];

export default function ExperienceSection() {
	return (
		<section id="experience" className="experience-section">
			<div className="experience-paper">
				<motion.header
					className="experience-heading"
					initial={{ opacity: 0, y: 22 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.55 }}
				>
					<div>
						<p>the path so far</p>
						<h2>my experience <em>log.</em></h2>
					</div>
					<span>A record of the research, technical work, and operational experience shaping how I solve problems.</span>
				</motion.header>

				<div className="experience-timeline">
					{experiences.map((experience, index) => (
						<motion.article
							key={experience.number}
							className={`experience-entry ${experience.color}`}
							initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.35 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div className="experience-marker">
								<span>{experience.number}</span>
							</div>
							<div className="experience-card">
								<span className="experience-tape" aria-hidden="true" />
								<div className="experience-card-topline">
									<strong>{experience.period}</strong>
									<span>experience_{experience.number}.txt</span>
								</div>
								<h3>{experience.role}</h3>
								<h4>{experience.place}</h4>
								<p>{experience.description}</p>
								<div className="experience-tags">
									{experience.tags.map((tag) => <span key={tag}>{tag}</span>)}
								</div>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
