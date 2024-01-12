import { promises as fs } from 'fs';
import { Message } from './types';

const path = './messages';
const ignore = '.gitignore';

export const createMessage = async (message: string) => {
	const dateTime = new Date().toISOString();
	await fs.writeFile(`${path}/${dateTime}.txt`, message);
	return {
		message: message,
		datetime: dateTime,
	};
};

export const getMessages = async () => {
	const files = await fs.readdir(path);
	const result: Message[] = [];

	for (let i = (files.length - 1); i > 0; i--) {
		if (files[i] !== ignore && result.length < 5) {
			const message = await fs.readFile(`${path}/${files[i]}`);

			result.push({
				message: message.toString(),
				datetime: files[i].slice(0, -4),
			});
		}
	}
	return result;
};