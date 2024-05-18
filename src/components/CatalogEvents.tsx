'use client'

import { FC } from 'react'

import styles from 'styles/components/catalog.module.css'
import EventsItem from './EventsItem'
import { IEvent } from '@/types/event.interface'

interface ICatalog {
	events: IEvent[]
	title?: string
}
const CatalogEvents: FC<ICatalog> = ({ events, title }) => {
	return (
		<section className={styles.catalog}>
			{title && <div className={styles.catalogTitle}>{title}</div>}
			{events?.length ? (
				<div className={styles.catalogList}>
					{events.map(item => (
						<EventsItem key={item.id} data={item} />
					))}
				</div>
			) : (
				<div className={styles.empty}>Events are temporarily absent</div>
			)}
		</section>
	)
}

export default CatalogEvents
