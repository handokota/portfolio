import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

import { Navbar } from '~/components';
import { usePersistantState, useSeoProps } from '~/lib';

import type { WithChildren, WithProps } from '~/types';

const Background = dynamic(() =>
	import('~/components/Background/Standard.component').then(({ Standard }) => Standard),
);

interface DefaultLayoutProps extends WithChildren {
	background?: boolean;
	seo?: Partial<WithProps<typeof NextSeo>>;
}

export function DefaultLayout({
	background: overrideBackground,
	children,
	seo: customSeo,
}: DefaultLayoutProps): JSX.Element {
	const { animations: background } = usePersistantState().get();
	const showBackground = overrideBackground ?? background;

	const seo = useSeoProps(customSeo);

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Handoko Tejo Atmoko',
        url: 'https://handokota.com',
    };

	return (
		<>
			<NextSeo {...seo} />

            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                    key="website-jsonld"
                />
            </Head>

			<Navbar.Standard />
			<main className="flex flex-col justify-center px-8">
				{showBackground && <Background />}
				{children}
			</main>
		</>
	);
}
