'use client'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { EventService } from '@/services/event.service'
import { BsSearch } from 'react-icons/bs'

const Search = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')

	const { data, isLoading, isError, refetch } = useQuery({
		queryKey: ['searchEvents', searchTerm],
		queryFn: () => EventService.searchEvents(searchTerm),
		enabled: !!searchTerm
	})

	const handleSearch = () => {
		refetch()
	}
	return (
		<div>
			<input
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				placeholder='Search events...'
			/>
			<button onClick={handleSearch}>
				<BsSearch />
			</button>
		</div>
	)
}

export default Search
