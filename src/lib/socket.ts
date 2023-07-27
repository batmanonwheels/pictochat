import { io } from 'socket.io-client/debug';

// "undefined" means the URL will be computed from the `window.location` object
const URL =
	process.env.NODE_ENV === 'production'
		? window.location
		: 'http://localhost:3000';

export const socket = io(URL);
