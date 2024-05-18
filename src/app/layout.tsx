import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import type { PropsWithChildren } from 'react'

import 'styles/global.css'

import { getSiteUrl } from '@/config/url.config'

import Header from '@/app/layout/Header'

import { SITE_NAME } from '@/constants/seo.constants'
import Providers from '@/providers/Providers'

export const metadata: Metadata = {
	icons: {
		icon: ''
	},
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	metadataBase: new URL(getSiteUrl()),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: ['info@events.com']
	}
}

const inter = Inter({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
	style: ['normal'],
	variable: '--inter'
})

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<html lang='en' className={inter.variable}>
			<body>
				<Providers>
					<div className='wrapper'>
						<div className='container'>
							<header className='header'>
								<Header />
							</header>

							<main className='main'>
								<div className='content'>
									<main className='catalog'>{children}</main>
								</div>
							</main>

							<footer className='footer'>
								<span>© 2015–2024 Events Lviv</span>
								<span>Privacy policy</span>
							</footer>
						</div>
					</div>
				</Providers>
			</body>
		</html>
	)
}
