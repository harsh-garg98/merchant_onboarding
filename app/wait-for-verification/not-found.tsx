"use client";

import Image from "next/image";

export default function Error() {
	return (
		<Image
			src="/not-found.jpeg"
			alt="404 - Page Not Found"
			width={500}
			height={500}
		/>
	);
}
