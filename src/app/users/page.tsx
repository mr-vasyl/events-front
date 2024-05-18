'use client'
import { Suspense, useState, useEffect } from 'react'
import { UserService } from '@/services/user.service'
import CatalogUsers from '@/components/CatalogUsers'
import { useRouter, useSearchParams } from 'next/navigation'
import { IUser } from '@/types/user.interface'
import { AxiosResponse } from 'axios'

export default function UsersPage() {
	const [users, setUsers] = useState<IUser[] | null>(null)
	const [loading, setLoading] = useState(true)

	const router = useRouter()
	const searchParams = useSearchParams()
	const eventId = searchParams.get('id')

	useEffect(() => {
		if (!eventId) {
			router.push('/')
			return
		}

		const fetchUsers = async () => {
			try {
				const response: AxiosResponse<IUser[]> = await UserService.getAllUsers(
					eventId
				)
				setUsers(response.data)
			} catch (error) {
				console.error('Error fetching users:', error)
			} finally {
				setLoading(false)
			}
		}

		fetchUsers()
	}, [eventId, router])

	if (loading) {
		return <p>Loading...</p>
	}

	return (
		<Suspense fallback={<p>Loading feed...</p>}>
			<CatalogUsers title='Event participants' users={users} />
		</Suspense>
	)
}
