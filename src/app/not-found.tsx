import Link from 'next/link'
import styles from '@/styles/pages/not-found.module.css'

export default function NotFound() {
	return (
		<main className={styles.container}>
			<section className={styles.content}>
				<h1 className={styles.heading}>404 - Page Not Found</h1>
				<p className={styles.message}>
					Sorry, but the page you are looking for does not exist.
				</p>
				<Link href='/' className={styles.homeLink}>
					Go to Homepage
				</Link>
			</section>
		</main>
	)
}
