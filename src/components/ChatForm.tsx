'use client';

import { useState } from 'react';
import { Socket } from 'socket.io-client/debug';

useState;

interface ChatFormProps {
	socket: Socket<ServerToClientEvents, ClientToServerEvents>;
}

const ChatForm = ({ socket }: ChatFormProps) => {
	const [username, setUsername] = useState<string>('');
	const [message, setMessage] = useState<string>('');

	const handleSubmit = (e) => {
		e.preventDefault;
		socket.emit('sendMessage', {
			username,
			message,
		});
	};

	return (
		<form>
			<label htmlFor='name'>Whats your username?</label>
			<input
				name='name'
				id='name'
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			{!!username && (
				<>
					<label htmlFor='message'>Whats your message?</label>
					<input
						name='message'
						id='message'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button type='submit' onSubmit={(e) => handleSubmit(e)}></button>
				</>
			)}
		</form>
	);
};

export default ChatForm;
