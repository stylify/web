export const dispatchEvent = (event: string, data: any) => {
	const customEvent = typeof data !== 'undefined'
		? new window.CustomEvent(event, {detail: data})
		: new window.CustomEvent(event);

	document.dispatchEvent(customEvent);
}
