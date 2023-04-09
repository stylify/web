export const domReady = (callback: CallableFunction) => {
	if (document.readyState !== 'loading') {
		callback();
	} else {
		document.addEventListener('DOMContentLoaded', () => callback());
	}

}

type EventTypesType = '';

export const dispatchEvent = (event: EventTypesType, data: any) => {
	const customEvent = typeof data !== 'undefined'
		? new window.CustomEvent(event, {detail: data})
		: new window.CustomEvent(event);

	document.dispatchEvent(customEvent);
}
