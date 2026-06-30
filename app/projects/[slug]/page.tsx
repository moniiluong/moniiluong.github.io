import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '../../data/projects';

type ProjectPageProps = {
	params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
	return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
	const { slug } = await params;
	const project = getProject(slug);

	return {
		title: project ? `${project.title} — Monica Luong` : 'Project — Monica Luong',
		description: project?.shortDescription,
	};
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { slug } = await params;
	const project = getProject(slug);

	if (!project) notFound();

	return (
		<div className="project-detail-page">
			<div className="project-detail-paper">
				<nav className="project-detail-nav" aria-label="Project navigation">
					<Link href="/#projects">← all projects</Link>
					<Link href="/">Monica Luong</Link>
				</nav>

				<header className="project-detail-hero">
					<div className="project-detail-title">
						<span>project {project.number}</span>
						<h1>{project.title}</h1>
						<p>{project.shortDescription}</p>
						<div className="project-detail-actions">
							{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
							{project.website && <a href={project.website} target="_blank" rel="noopener noreferrer">Live project ↗</a>}
							{!project.github && !project.website && <span>links coming soon</span>}
						</div>
					</div>

					<div className="project-detail-cover">
						<span className="project-object-tape" aria-hidden="true" />
						{project.image ? (
							<Image src={project.image} alt={`${project.title} preview`} fill priority sizes="(max-width: 768px) 90vw, 48vw" className="object-cover" />
						) : (
							<div className="project-placeholder"><span>{project.number}</span><small>project image coming soon</small></div>
						)}
					</div>
				</header>

				<section className="project-detail-content">
					<article>
						<p className="detail-label">the story</p>
						<h2>What this project is about</h2>
						<p>{project.summary}</p>
					</article>

					<aside>
						<p className="detail-label">built with</p>
						<div className="technology-list">
							{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
						</div>
						<p className="detail-label">highlights</p>
						<ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
					</aside>
				</section>

				<section className="project-gallery">
					<p className="detail-label">project gallery</p>
					<h2>A closer look</h2>
					{project.gallery.length > 0 ? (
						<div className="project-gallery-grid">
							{project.gallery.map((image, index) => (
								<div className="project-gallery-image" key={`${image}-${index}`}>
									<Image src={image} alt={`${project.title} screenshot ${index + 1}`} fill sizes="(max-width: 768px) 90vw, 70vw" className="object-cover" />
								</div>
							))}
						</div>
					) : (
						<div className="project-gallery-empty">Your future project pictures will go here.</div>
					)}
				</section>
			</div>
		</div>
	);
}
