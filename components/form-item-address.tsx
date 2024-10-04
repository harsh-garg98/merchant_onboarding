import { HTMLInputTypeAttribute } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const FormItemAddress = ({
	label,
	inputId,
	inputType,
	inputPlaceholder,
	description,
}: {
	label: string;
	inputId: [string, string, string, string, string, string];
	inputType: [
		HTMLInputTypeAttribute,
		HTMLInputTypeAttribute,
		HTMLInputTypeAttribute,
		HTMLInputTypeAttribute,
		HTMLInputTypeAttribute,
		HTMLInputTypeAttribute
	];
	inputPlaceholder: [string, string, string, string, string, string];
	description?: [string, string, string, string, string, string];
}) => {
	return (
		<div className="pl-10 pr-10 pt-5">
			<Label htmlFor={inputId[0]}>{label}</Label>
			<div className="flex flex-col justify-center">
				<Input
					type={inputType[0]}
					id={inputId[0]}
					placeholder={inputPlaceholder[0]}
					className="mt-2"
				/>
				{description ? (
					<p className="text-sm text-slate-500 mt-2">{description[0]}</p>
				) : (
					""
				)}
				<Input
					type={inputType[1]}
					id={inputId[1]}
					placeholder={inputPlaceholder[1]}
					className="mt-2"
				/>
				{description ? (
					<p className="text-sm text-slate-500 mt-2">{description[1]}</p>
				) : (
					""
				)}
				<div className="flex flex-row justify-between mt-2">
					<div className="w-[48%]">
						<Input
							type={inputType[2]}
							id={inputId[2]}
							placeholder={inputPlaceholder[2]}
						/>
						{description ? (
							<p className="text-sm text-slate-500 mt-2">{description[2]}</p>
						) : (
							""
						)}
					</div>
					<div className="w-[48%]">
						<Input
							type={inputType[3]}
							id={inputId[3]}
							placeholder={inputPlaceholder[3]}
						/>
						{description ? (
							<p className="text-sm text-slate-500 mt-2">{description[3]}</p>
						) : (
							""
						)}
					</div>
				</div>
				<div className="flex flex-row justify-between mt-2">
					<div className="w-[48%]">
						<Input
							type={inputType[4]}
							id={inputId[4]}
							placeholder={inputPlaceholder[4]}
						/>
						{description ? (
							<p className="text-sm text-slate-500 mt-2">{description[4]}</p>
						) : (
							""
						)}
					</div>
					<div className="w-[48%]">
						<Input
							type={inputType[5]}
							id={inputId[5]}
							placeholder={inputPlaceholder[5]}
						/>
						{description ? (
							<p className="text-sm text-slate-500 mt-2">{description[5]}</p>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormItemAddress;
