interface ServerToClientEvents {
	// noArg: () => void;
	// basicEmit: (a: number, b: string, c: Buffer) => void;
	// withAck: (d: string, callback: (e: number) => void) => void;
	sendMessage: (a: SocketData) => void;
	receiveMessage: (a: SocketData) => void;
}

interface ClientToServerEvents {
	hello: () => void;
	sendMessage: (a: SocketData) => void;
	receiveMessage: (a: SocketData) => void;
}

interface InterServerEvents {
	ping: () => void;
}

interface SocketData {
	username: string;
	message: string;
}
