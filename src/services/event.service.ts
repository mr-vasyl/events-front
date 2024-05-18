import {} from '@/types/user.interface'

import { instance } from '@/api/api.interceptor'
import { IEvent } from '@/types/event.interface'

export const EventService = {
	async getAllEvents() {
		return instance<IEvent[]>({
			method: 'GET'
		})
	},
	async searchEvents(title: string) {
		return instance({
			url: `/search?title=${title}`,
			method: 'GET'
		})
	}
}
