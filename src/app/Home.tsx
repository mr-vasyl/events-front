import { FC, Suspense } from 'react'
import CatalogEvents from '@/components/CatalogEvents'
import { TypeEvents } from '@/types/event.interface'

const Home: FC<TypeEvents> = ({ events }) => {
	return (
		<Suspense fallback={<p>Loading feed...</p>}>
			<CatalogEvents title='Events in the world' events={events} />
		</Suspense>
	)
}

export default Home
