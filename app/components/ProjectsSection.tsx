'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../data/projects';

export default function ProjectsSection() {
	return (
		<section id="projects" className="project-archive">
			<div className="project-grid-paper">
				<div className="project-objects" aria-label="Monica's projects">
					{projects.map((project, index) => (
						<motion.div
							key={project.slug}
							className={`project-object project-object-${index + 1}`}
							initial={{ opacity: 0, y: 24, rotate: index % 2 === 0 ? -3 : 3 }}
							whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -2 : 2 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Link href={`/projects/${project.slug}`} aria-label={`Read about ${project.title}`}>
								<span className="project-object-tape" aria-hidden="true" />
								<div className="project-object-image">
									{project.image ? (
										<Image src={project.image} alt="" fill sizes="(max-width: 768px) 76vw, 22vw" className="object-cover" />
									) : (
										<div className="project-placeholder" aria-hidden="true">
											<span>{project.number}</span>
											<small>your image here</small>
										</div>
									)}
								</div>
								<div className="project-object-caption">
									<span>{project.number}</span>
									<h3>{project.title}</h3>
									<p>{project.shortDescription}</p>
									<strong>open project ↗</strong>
								</div>
							</Link>
						</motion.div>
					))}
				</div>

				<div className="project-archive-copy">
					<p>A curated collection of projects, experiments, and ideas I’ve brought to life through code.</p>
					<h2>welcome to my <em>work.</em></h2>
				</div>
			</div>
		</section>
	);
}
