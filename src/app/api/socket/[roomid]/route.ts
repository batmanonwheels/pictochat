import { Server, Socket } from 'socket.io';
import { createServer } from 'http';

export const GET = async (req: any, res: any) => {
	const { roomid } = await res.params;

	const httpServer = createServer();

	// if (httpServer) {
	// 	console.log('Server already running');
	// 	// res.end();
	// 	return;
	// }

	const io = new Server<
		ClientToServerEvents,
		ServerToClientEvents,
		InterServerEvents,
		SocketData
	>(httpServer, {
		path: `/api/socket?roomid=${roomid}`,
	});

	// res.socket.server.io = io;

	io.on('connection', (socket: Socket) => {
		console.log('Listening....');
		socket.on('sendMessage', (obj) => {
			io.emit('receiveMessage', obj);
		});
	});

	console.log('Setting Socket');
	// res.end();
};
