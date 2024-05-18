import Link from 'next/link'
import { FC } from 'react'

import { IEvent } from '@/types/event.interface'
import styles from '@/styles/components/eventsItem.module.css'
import { convertDate } from '@/utils/date'

const EventsItem: FC<{ data: IEvent }> = ({ data }) => {
	return (
		<article className={styles.eventItem}>
			<div className={styles.wrapper}>
				<h2>{data.title}</h2>
				<p className={styles.desc}>{data.description}</p>
				<div className={styles.date}>
					<time dateTime={data.eventDate}>{convertDate(data.eventDate)}</time>
				</div>

				<p className={styles.organizer}>{data.organizer}</p>
			</div>

			<footer className={styles.footerEvents}>
				<Link href={`/registration?id=${data.id}`} className={styles.link}>
					Sign Up
				</Link>
				<Link href={`/users?id=${data.id}`} className={styles.link}>
					View
				</Link>
			</footer>
		</article>
	)
}

export default EventsItem
