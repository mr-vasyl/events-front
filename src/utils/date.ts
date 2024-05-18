export const convertDate = (date: any) => {
	const dateString = date
	const dateObject = new Date(dateString)

	const year = dateObject.getFullYear()
	const month = dateObject.getMonth() + 1
	const day = dateObject.getDate()

	const formattedDateString = `${year}-${month
		.toString()
		.padStart(2, '0')}-${day.toString().padStart(2, '0')}`

	return formattedDateString
}
