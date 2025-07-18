'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function BackgroundBlobs() {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

	// Scroll-based motion for top/mid blobs
	const yBlob1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
	const yBlob2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
	const yBlob3 = useTransform(scrollYProgress, [0, 1], [-50, 150]);

	// Static or lightly reactive blobs near the end
	const yBlob4 = useTransform(scrollYProgress, [0, 1], [200, 400]);
	const yBlob5 = useTransform(scrollYProgress, [0, 1], [300, 500]);

	return (
		<div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
			{/* Background gradient base */}
			<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,1))]" />

			{/* Blobs */}
			<motion.div
				style={{ y: yBlob1 }}
				className="absolute top-[10vh] right-[10vw] w-[300px] h-[300px] bg-purple-600 opacity-30 rounded-full blur-3xl animate-blob"
			/>
			<motion.div
				style={{ y: yBlob2 }}
				className="absolute top-[90vh] left-[5vw] w-[250px] h-[250px] bg-blue-500 opacity-20 rounded-full blur-3xl animate-blob"
			/>
			<motion.div
				style={{ y: yBlob3 }}
				className="absolute top-[160vh] left-[50vw] w-[200px] h-[200px] bg-pink-400 opacity-20 rounded-full blur-3xl animate-blob"
			/>

			{/* New blobs near bottom */}
			<motion.div
				style={{ y: yBlob4 }}
				className="absolute top-[240vh] left-[20vw] w-[250px] h-[250px] bg-blue-400 opacity-20 rounded-full blur-3xl animate-blob"
			/>
			<motion.div
				style={{ y: yBlob5 }}
				className="absolute top-[280vh] right-[10vw] w-[300px] h-[300px] bg-green-400 opacity-25 rounded-full blur-3xl animate-blob"
			/>
		</div>
	);
}
