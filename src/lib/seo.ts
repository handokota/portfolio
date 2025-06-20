import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'Handoko Tejo Atmoko';
	const description = "Hey 👋 I'm Handoko, a system administrator";

	return {
		title,
		description,
		canonical: `https://handokota.com/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'handokota',
			url: `https://handokota.com/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://handokota.com/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@nurodev',
			site: '@nurodev',
		},
		...props,
	};
}
