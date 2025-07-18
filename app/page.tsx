'use client';

import BackgroundBlobs from './components/BackgroundBlobs';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

export default function MinimalModernPortfolio() {
	return (
		<div className="relative min-h-screen bg-black text-white overflow-hidden">
			<BackgroundBlobs />
			<div className="relative z-10">
				<Navbar />
				<HeroSection />
				<ProjectsSection />
				<SkillsSection />
				<ContactSection />
			</div>
		</div>
	);
}
