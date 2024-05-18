import { FC } from 'react'
import Link from 'next/link'
import styles from '@/styles/layouts/header.module.css'

const Header: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Link href='/'>
				<span className={styles.logo}>Events</span>
			</Link>
		</div>
	)
}

export default Header
