import { instance } from '@/api/api.interceptor'
import { IUser } from '@/types/user.interface'

const USERS = 'users'

export const UserService = {
	async getAllUsers(eventId: string | number) {
		return instance<IUser[]>({
			url: `${USERS}?eventId=${eventId}`,
			method: 'GET'
		})
	},

	async registerForEvent(data: any) {
		return instance<IUser>({
			url: `${USERS}/register`,
			method: 'POST',
			data
		})
	}
}
