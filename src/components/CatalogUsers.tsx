import { FC } from 'react'

import styles from 'styles/components/catalog.module.css'
import UsersItem from './UsersItem'
import { IUser } from '@/types/user.interface'

interface ICatalog {
	users: IUser[] | null
	title?: string
}
const CatalogUsers: FC<ICatalog> = ({ users, title }) => {
	return (
		<section className={styles.catalog}>
			<div className={styles.catalogTitle}>{title}</div>
			{users?.length ? (
				<div className={styles.catalogList}>
					{users.map(item => (
						<UsersItem key={item.id} data={item} />
					))}
				</div>
			) : (
				<div className={styles.empty}>Users are temporarily absent</div>
			)}
		</section>
	)
}

export default CatalogUsers
