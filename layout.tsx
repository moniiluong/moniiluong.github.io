import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import BackgroundBlobs from './components/BackgroundBlobs'; // ✅ Replace Aurora with this

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: '[Monica Luong] - Aspiring Software Engineer',
	description:
		"Hi! I'm a rising sophomore at Case Western Reserve University majoring in Computer Science. I enjoy building simple, thoughtful web applications and love learning new tools and technologies along the way.",
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
	authors: [{ name: '[Monica Luong]' }],
	creator: '[Monica Luong]',
	openGraph: {
		title: '[Monica Luong] - Software Developer Portfolio',
		description: 'Passionate software developer creating clean, minimal, and effective digital solutions. Explore my work and development philosophy.',
		url: 'https://monicaluong.vercel.app',
		siteName: '[Monica Luong] - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: '[Monica Luong] - Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: '[Monica Luong] - Software Developer',
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
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-black text-white overflow-x-hidden`}
			>
				<BackgroundBlobs /> {/* ✅ This is now the animated moving background */}
				<main className="relative z-10">{children}</main>
			</body>
		</html>
	);
}
