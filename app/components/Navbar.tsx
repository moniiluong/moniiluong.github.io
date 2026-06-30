import Link from 'next/link';

const navItems = [
	{ label: 'Home', href: '/#home' },
	{ label: 'About', href: '/#about' },
	{ label: 'Experience', href: '/#experience' },
	{ label: 'Projects', href: '/#projects' },
	{ label: 'Skills', href: '/#skills' },
	{ label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
	return (
		<header className="mac-navbar">
			<div className="mac-nav-lights" aria-hidden="true">
				<span className="traffic-light traffic-light-red" />
				<span className="traffic-light traffic-light-yellow" />
				<span className="traffic-light traffic-light-green" />
			</div>

			<nav className="mac-nav-address" aria-label="Main navigation">
				{navItems.map((item) => (
					<Link key={item.href} href={item.href}>{item.label}</Link>
				))}
			</nav>

			<div className="mac-nav-actions">
				<a href="/resume.pdf" target="_blank">Resume</a>
				<a href="https://github.com/moniiluong" target="_blank" rel="noopener noreferrer">GitHub</a>
			</div>
		</header>
	);
}
