import { useEffect, useState } from "react";

type ChatMessage = {
	ai?: string;
	user?: string;
};

type ChatHistory = ChatMessage[];

export function useChatbot(): [
	ChatHistory | undefined,
	React.Dispatch<React.SetStateAction<ChatHistory | undefined>>
] {
	const [chatHistory, setChatHistory] = useState<ChatHistory>();

	useEffect(() => {
		const fetchHistory = async () => {
			try {
				const response = await fetch("http://localhost:8000/chats");
				const data: ChatHistory = await response.json();
				setChatHistory(data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchHistory();
	}, []);
	return [chatHistory, setChatHistory];
}

export const fetchResponse = async (message: string) => {
	try {
		const response = await fetch("http://localhost:8000/chats", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ user: message }),
		});
		const data: ChatMessage = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};
