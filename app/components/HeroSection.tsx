'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const photos = [
	{
		src: '/IMG_2513.jpg',
		alt: 'Monica Luong',
		className: 'hero-photo hero-photo-profile',
		label: 'monica.jpg',
		priority: true,
	},
	{
		src: '/GomokuPicture.jpg',
		alt: 'Gomoku project',
		className: 'hero-photo hero-photo-gomoku',
		label: 'gomoku.jpg',
	},
	{
		src: '/classiccar.JPG',
		alt: 'Classic car',
		className: 'hero-photo hero-photo-car',
		label: 'classiccar.jpg',
	},
	{
		src: '/Spoton.jpg',
		alt: 'SpotOn project',
		className: 'hero-photo hero-photo-spoton',
		label: 'spoton.jpg',
	},
	{
		src: '/Outfit.jpg',
		alt: 'Outfit recommendation project',
		className: 'hero-photo hero-photo-outfit',
		label: 'outfit.jpg',
	},
];

export default function HeroSection() {
	return (
		<section id="home" className="mac-hero" aria-label="Introduction">
			<div className="desktop-area">
				<div className="photo-collage" aria-label="Photos of Monica and her projects">
					{photos.map((photo, index) => (
						<motion.figure
							key={photo.src}
							className={photo.className}
							initial={{ opacity: 0, y: 18, rotate: index % 2 ? 2 : -2 }}
							animate={{ opacity: 1, y: 0, rotate: 0 }}
							transition={{ duration: 0.55, delay: 0.15 + index * 0.08 }}
						>
							<figcaption>{photo.label}</figcaption>
							<div className="photo-image-wrap">
								<Image
									src={photo.src}
									alt={photo.alt}
									fill
									priority={photo.priority}
									sizes="(max-width: 768px) 42vw, 24vw"
									className="object-cover"
								/>
							</div>
						</motion.figure>
					))}
				</div>

				<motion.div
					id="about"
					className="hero-copy"
					initial={{ opacity: 0, scale: 0.97 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.7, delay: 0.1 }}
				>
					<p className="hero-eyebrow">software engineer in progress</p>
					<h1>
						<span className="name-first">Monica</span>
						<span className="name-last">Luong</span>
					</h1>
				</motion.div>

				<motion.div
					className="hero-summary"
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.45 }}
				>
					<p className="hero-intro">
						I’m currently a sophomore at Case Western Reserve University in Cleveland, Ohio. I aspire to be a software engineer and am seeking opportunities to learn, grow my skills, and demonstrate my capabilities through impactful projects.
					</p>
					<Link className="hero-cta" href="#projects">explore my work ↓</Link>
				</motion.div>
			</div>
		</section>
	);
}
