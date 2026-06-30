'use client';

import BackgroundBlobs from './components/BackgroundBlobs';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

export default function MinimalModernPortfolio() {
	return (
		<div className="relative min-h-screen bg-black text-white overflow-hidden">
			<div className="portfolio-background"><BackgroundBlobs /></div>
			<div className="relative z-10">
				<HeroSection />
				<ExperienceSection />
				<ProjectsSection />
				<SkillsSection />
				<ContactSection />
			</div>
		</div>
	);
}
