export interface IEvent {
	id: number
	title: string
	description: string
	eventDate: string
	organizer: string
}
export type TypeEvents = {
	events: IEvent[]
}
