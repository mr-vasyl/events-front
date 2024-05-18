import { IUser } from '@/types/user.interface'
import { FC } from 'react'
import styles from '@/styles/components/usersItem.module.css'
import { convertDate } from '@/utils/date'

const UsersItem: FC<{ data: IUser }> = ({ data }) => {
	return (
		<div className={styles.userItem}>
			<h2>{data.fullName}</h2>
			<p>{data.email}</p>
			<div className={styles.date}>
				<time dateTime={data.dateOfBirth}>{convertDate(data.dateOfBirth)}</time>
			</div>
			<p>{data.howDidYouHearAboutEvent}</p>
		</div>
	)
}

export default UsersItem
