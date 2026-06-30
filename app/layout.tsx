import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
	metadataBase: new URL('https://moniiluong.github.io'),
	title: 'Monica Luong — Aspiring Software Engineer',
	description:
		"I'm a sophomore at Case Western Reserve University aspiring to be a software engineer. Explore my projects, skills, and experience.",
	keywords: [
		'Software Developer',
		'Clean Code',
		'Minimal Design',
		'Modern Development',
		'Web Development',
		'User Experience',
		'Design Systems',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'Performance',
		'Accessibility',
		'Minimalist Portfolio',
	],
	authors: [{ name: 'Monica Luong' }],
	creator: 'Monica Luong',
	openGraph: {
		title: 'Monica Luong — Software Developer Portfolio',
		description: 'Passionate software developer creating clean, minimal, and effective digital solutions. Explore my work and development philosophy.',
		url: 'https://monicaluong.vercel.app',
		siteName: 'Monica Luong — Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Monica Luong portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Monica Luong — Software Developer',
		description: 'Passionate software developer creating clean, minimal, and effective digital solutions. Explore my work and development philosophy.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased relative bg-black text-white overflow-x-hidden">
				<Navbar />
				<main className="relative z-10">{children}</main>
			</body>
		</html>
	);
}
