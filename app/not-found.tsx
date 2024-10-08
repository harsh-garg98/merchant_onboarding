"use client";

import Image from "next/image";

export default function Error() {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<Image
				src="/not-found.jpeg"
				alt="404 - Page Not Found"
				width={500}
				height={500}
			/>
		</div>
	);
}
