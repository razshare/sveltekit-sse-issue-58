import { produce } from 'sveltekit-sse';

/**
 *
 * @param {number} milliseconds
 * @returns
 */
function delay(milliseconds) {
	return new Promise(function start(stop) {
		setTimeout(stop, milliseconds);
	});
}

export function POST() {
	return produce(
		async function start({ emit }) {
			while (true) {
				emit('message', `Date: ${Date.now()}`);
				await delay(1000);
			}
		},
		{
			ping: 4000,
			stop() {
				console.log('Client disconnected.');
			}
		}
	);
}
