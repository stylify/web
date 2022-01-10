export function formatDateTime(dateString: string): string {
	const monthNames = [
		"January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];
	const date = new Date(dateString);
	return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
