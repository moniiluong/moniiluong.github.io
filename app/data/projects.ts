export type Project = {
	slug: string;
	number: string;
	title: string;
	shortDescription: string;
	summary: string;
	image: string | null;
	gallery: string[];
	github: string | null;
	website: string | null;
	technologies: string[];
	highlights: string[];
	status?: 'complete' | 'coming-soon';
};

export const projects: Project[] = [
	{
		slug: 'spoton',
		number: '01',
		title: 'SpotOn',
		shortDescription: 'A mobile-first tool for finding available campus study spaces.',
		summary: 'SpotOn helps students find available study spaces around campus in real time. I built an interactive Leaflet map with color-coded availability, useful location details, and a mobile-first interface designed for quick decisions between classes.',
		image: '/Spoton.jpg',
		gallery: ['/Spoton.jpg'],
		github: 'https://github.com/moniiluong/SpotOn',
		website: 'https://spoton-tau.vercel.app/',
		technologies: ['React', 'Vite', 'Leaflet', 'LocalStorage'],
		highlights: [
			'Interactive map with dynamic availability indicators',
			'Mobile-first experience for students on the go',
			'LocalStorage caching for faster repeat visits',
		],
		status: 'complete',
	},
	{
		slug: 'outfit-recommendation-system',
		number: '02',
		title: 'Outfit Recommendation System',
		shortDescription: 'Smart wardrobe organization and personalized outfit planning.',
		summary: 'This web application makes planning outfits simpler through wardrobe cataloging, personalized recommendations, and calendar-based attire suggestions. It brings everyday clothing decisions into one organized digital experience.',
		image: '/Outfit.jpg',
		gallery: ['/Outfit.jpg'],
		github: 'https://github.com/moniiluong/Outfit-Recommendation-System-',
		website: 'https://outfit-recommendation-system-nlqjmc6kl-moniiluongs-projects.vercel.app/',
		technologies: ['React', 'JavaScript', 'CSS', 'Web APIs'],
		highlights: [
			'Digital wardrobe cataloging',
			'Personalized outfit recommendations',
			'Calendar-based attire planning',
		],
		status: 'complete',
	},
	{
		slug: 'project-three',
		number: '03',
		title: 'Project Three',
		shortDescription: 'A new project story is coming soon.',
		summary: 'This space is reserved for the next project in my portfolio. I’ll add the project story, technical decisions, links, and imagery here when it is ready.',
		image: null,
		gallery: [],
		github: null,
		website: null,
		technologies: ['Details coming soon'],
		highlights: ['Summary coming soon', 'Project images coming soon', 'Links coming soon'],
		status: 'coming-soon',
	},
	{
		slug: 'project-four',
		number: '04',
		title: 'Project Four',
		shortDescription: 'Another idea is currently taking shape.',
		summary: 'This space is reserved for a future project. Its purpose, development process, technologies, and final results will live here.',
		image: null,
		gallery: [],
		github: null,
		website: null,
		technologies: ['Details coming soon'],
		highlights: ['Summary coming soon', 'Project images coming soon', 'Links coming soon'],
		status: 'coming-soon',
	},
];

export function getProject(slug: string) {
	return projects.find((project) => project.slug === slug);
}
