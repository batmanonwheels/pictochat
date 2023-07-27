'use client';

import axios from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface pageProps {
	params: { roomid: number };
}

let socket: Socket<ServerToClientEvents, ClientToServerEvents>;

const Page = ({ params }: pageProps) => {
	const [username, setUsername] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [allMessages, setAllMessages] = useState<object[]>([]);
	const { roomid } = params;

	const socketInitializer = async () => {
		await axios.get(`/api/socket/${roomid}`);

		socket = io();

		socket.on('connect', () => console.log('connected', socket.id));
		socket.on('receiveMessage', (obj) =>
			setAllMessages((prev) => [...prev, obj])
		);
	};

	const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
		if (!socket) return;
		e.preventDefault;
		socket.emit('sendMessage', {
			username,
			message,
		});
	};

	useEffect(() => {
		socketInitializer();
	});

	return (
		<div
			className='min-h-screen flex flex-col justify-between
		items-center px-2 py-3'
		>
			<ul>
				{allMessages.map((username, message) => (
					<li key={Date.now()}>{`${username} says ${message}`}</li>
				))}
			</ul>
			<form className='flex flex-col min-w-full items-center px-2 py-3 '>
				<label htmlFor='name'>Whats your name?</label>
				<input
					name='name'
					id='name'
					className='w-5/6 text-black'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				{!!username && (
					<>
						<label htmlFor='message'>Whats your message?</label>
						<input
							className='w-5/6 text-black'
							name='message'
							id='message'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							// onSubmit={setMessage('')}
						/>
						<button type='submit' onSubmit={(e) => handleSubmit(e)}></button>
					</>
				)}
			</form>
		</div>
	);
};

export default Page;
