import type { Metadata } from 'next'
import { EventService } from '@/services/event.service'
import Home from './Home'

export const metadata: Metadata = {
	description:
		'In todays dynamic world, staying connected with our communities and engaging in enriching experiences is more important than ever. '
}
export const revalidate = 60

async function getEvents() {
	const data = await EventService.getAllEvents()
	return data
}

export default async function HomePage() {
	const { data } = await getEvents()
	return <Home events={data} />
}
