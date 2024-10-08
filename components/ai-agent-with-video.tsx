"use client";

import { JSX, SVGProps, useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "./ui/scroll-area";
import { Textarea } from "./ui/textarea";
import { fetchResponse, useChatbot } from "@/hooks/useChatbot";

export default function AIAgentVideo() {
	const [showTexts, setShowTexts] = useState<boolean>(false);
	const [chatHistory, setChatHistory] = useChatbot();
	const [userMessage, setUserMessage] = useState<string>("");

	const handleSubmit = async (message: string) => {
		setChatHistory((prev) => {
			if (prev) {
				return [...prev, { user: message }];
			} else {
				return [{ user: message }];
			}
		});
		const response = await fetchResponse(message);
		if (response) {
			setChatHistory((prev) => {
				if (prev) {
					return [...prev, response];
				} else {
					return [{ user: message }];
				}
			});
		} else {
			setChatHistory((prev) => {
				if (prev) {
					return [...prev, { ai: "Sorry, I didn't understand that." }];
				} else {
					return [{ ai: "Sorry, I didn't understand that." }];
				}
			});
		}
		setUserMessage("");
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="rounded-full shadow-xl fixed right-12 bottom-12">
					<BotIcon />
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-4xl">
				<div
					className={`${
						showTexts === true
							? "grid grid-cols-2 gap-4 justify-center items-center"
							: "p-5"
					}`}>
					<div className="aspect-video flex flex-col items-center">
						<video
							src="/sithTalking.mp4"
							aria-label="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
							// If you want to download your own copy of the video, you can use the link above
							autoPlay
							controls
							// muted
							className="aspect-square h-full object-cover rounded-full">
							Your browser does not support the Tragedy of Darth Plageus the
							Wise.
						</video>
						<Button
							onClick={() => setShowTexts(!showTexts)}
							className="mt-4 w-fit">
							{showTexts ? "Hide Chats" : "Show Chats"}
						</Button>
					</div>
					{showTexts && (
						<div className="border rounded p-5 mr-4">
							<div className="flex items-center justify-between border-b pb-4">
								<div className="flex items-center gap-3">
									<Avatar className="w-10 h-10">
										<AvatarImage src="/download.jpeg" alt="Chatbot" />
										<AvatarFallback>CB</AvatarFallback>
									</Avatar>
									<div>
										<h4 className="text-lg font-medium">Sauron</h4>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											Online
										</p>
									</div>
								</div>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button
											variant="ghost"
											size="icon"
											className="rounded-full">
											<FlipVerticalIcon className="h-4 w-4" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuItem>
											<UserIcon className="mr-2 h-4 w-4" />
											View Profile
										</DropdownMenuItem>
										<DropdownMenuItem>
											<SettingsIcon className="mr-2 h-4 w-4" />
											Settings
										</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuItem>
											<PowerIcon className="mr-2 h-4 w-4" />
											Logout
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
							<ScrollArea className="h-[400px] mt-4">
								<div className="space-y-4 p-4">
									{chatHistory?.map((chat, index) => {
										if (chat.ai) {
											return <BotMessage key={index} message={chat.ai} />;
										} else {
											return <UserMessage key={index} message={chat.user!} />;
										}
									})}
								</div>
							</ScrollArea>
							<div className="mt-4 flex items-center gap-2">
								<Textarea
									placeholder="Type your message..."
									className="flex-1 resize-none rounded-lg border border-gray-200 dark:border-gray-800 px-4 py-2"
									value={userMessage}
									onChange={(e) => setUserMessage(e.target.value)}
								/>
								<Button type="submit" onClick={() => handleSubmit(userMessage)}>
									<SendIcon className="h-4 w-4" />
								</Button>
							</div>
						</div>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
}

function BotMessage({ message }: { message: string }) {
	return (
		<div className="flex items-start gap-3">
			<Avatar className="w-8 h-8">
				<AvatarImage src="/download.jpeg" alt="Chatbot" />
				<AvatarFallback>CB</AvatarFallback>
			</Avatar>
			<div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-[80%]">
				<p>{message}</p>
			</div>
		</div>
	);
}

function UserMessage({ message }: { message: string }) {
	return (
		<div className="flex items-start gap-3 justify-end">
			<div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-3 max-w-[80%]">
				<p>{message}</p>
			</div>
			<Avatar className="w-8 h-8">
				<AvatarImage src="/download1.jpeg" alt="You" />
				<AvatarFallback>YO</AvatarFallback>
			</Avatar>
		</div>
	);
}

function BotIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<Avatar className="w-12 h-12 shadow-xl">
			<AvatarImage src="/download.jpeg" alt="Chatbot" />
			<AvatarFallback>CB</AvatarFallback>
		</Avatar>
	);
}

function FlipVerticalIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
			<path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
			<path d="M4 12H2" />
			<path d="M10 12H8" />
			<path d="M16 12h-2" />
			<path d="M22 12h-2" />
		</svg>
	);
}

function PowerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M12 2v10" />
			<path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
		</svg>
	);
}

function SendIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="m22 2-7 20-4-9-9-4Z" />
			<path d="M22 2 11 13" />
		</svg>
	);
}

function SettingsIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
			<circle cx="12" cy="12" r="3" />
		</svg>
	);
}

function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
			<circle cx="12" cy="7" r="4" />
		</svg>
	);
}
