export function calculateTimeDifference(lastEditedTime: string): string {
	const now = new Date()
	const lastEdited = new Date(lastEditedTime)
	const differenceInMilliseconds = now.getTime() - lastEdited.getTime()

	const seconds = Math.floor(differenceInMilliseconds / 1000)
	const minutes = Math.floor(seconds / 60)
	const hours = Math.floor(minutes / 60)
	const days = Math.floor(hours / 24)
	const months = Math.floor(days / 30)
	const years = Math.floor(months / 12)

	if (seconds < 60) {
		return `há ${seconds} ${seconds === 1 ? "segundo" : "segundos"}`
	}
	if (minutes < 60) {
		return `há ${minutes} ${minutes === 1 ? "minuto" : "minutos"}`
	}
	if (hours < 24) {
		return `há ${hours} ${hours === 1 ? "hora" : "horas"}`
	}
	if (days < 30) {
		return `há ${days} ${days === 1 ? "dia" : "dias"}`
	}
	if (months < 12) {
		return `há ${months} ${months === 1 ? "mês" : "meses"}`
	}
	return `há ${years} ${years === 1 ? "ano" : "anos"}`
}
