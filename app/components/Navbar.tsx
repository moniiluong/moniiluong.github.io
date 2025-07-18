import Link from 'next/link';

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full bg-black/50 backdrop-blur-md text-white px-6 md:px-20 py-4 flex items-center justify-between font-sans">
			{/* Logo */}
			<div className="text-xl font-bold">
				<span className="text-white">Monica</span>
				<span className="text-white"> Luong</span>
			</div>

			{/* Navigation Links */}
			<nav className="flex items-center gap-6 text-sm md:text-base">
				<Link href="#about" className="hover:text-purple-400 transition">About</Link>
				<Link href="#projects" className="hover:text-purple-400 transition">Projects</Link>
				<Link href="#skills" className="hover:text-purple-400 transition">Skills</Link>
				<Link href="#contact">
					<span className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition text-sm md:text-base">
						Contact Me
					</span>
				</Link>
			</nav>
		</header>
	);
}
