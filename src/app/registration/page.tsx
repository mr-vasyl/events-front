'use client'
import { Suspense, useEffect } from 'react'
import SignUpForm from '@/components/SignUpForm'
import { useSearchParams, useRouter } from 'next/navigation'

export default function RegistrationPage() {
	const searchParams = useSearchParams()
	const eventId = searchParams.get('id')
	const router = useRouter()

	useEffect(() => {
		if (!eventId) {
			router.replace('/')
		}
	}, [eventId, router])

	if (!eventId) {
		return null
	}

	return (
		<Suspense fallback={<p>Loading...</p>}>
			<SignUpForm eventId={eventId} />
		</Suspense>
	)
}
