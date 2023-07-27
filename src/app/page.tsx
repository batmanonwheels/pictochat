'use client';
import { useState } from 'react';

export default function Home() {
	// const socket = io();

	// 	const [message, setMessage] = useState<string>('');
	// 	console.log(message);
	// 	const [chatLog, setChatLog] = useState<string[]>([]);

	// 	let messageHistory = [];
	// //
	// 	const newMessage = (msg: string) => {
	// 		const item = document.createElement('li');
	// 		item.textContent = msg;
	// 		setChatLog([...chatLog, msg]);
	// 		window.scrollTo(0, document.body.scrollHeight);
	// 	};

	// 	// input.addEventListener('keydown', (e) =>
	// 	// 	socket.emit('chat message', 'user is typing...')
	// 	// );

	// 	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
	// 		e.preventDefault();
	// 		if (e.target.value) {
	// 			// socket.emit('chat message', e.target.value);
	// 			e.target.value = '';
	// 			newMessage(e.target.value);
	// 		}
	// 	};

	// socket.on('chat message', function (msg: string) {
	// 	newMessage(msg);
	// });

	// socket.on('connection', function (msgs: string[]) {
	// 	messageHistory = msgs;
	// 	messageHistory.forEach((msg) => newMessage(msg));
	// });
	return (
		<main className='flex min-h-screen flex-col items-center justify-between  pb-2 '>
			{/* <ul id='messages'>
				{chatLog.map((msg) => (
					<li key={msg}>{msg}</li>
				))}
			</ul>
			<form id='form' className='flex justify-between'>
				<input
					// placeholder='Type your message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				{message.length > 0 ? (
					<button onSubmit={(e) => handleSubmit(e)}>Send</button>
				) : null}
			</form> */}
		</main>
	);
}
