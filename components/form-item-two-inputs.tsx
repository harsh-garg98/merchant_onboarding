import { HTMLInputTypeAttribute } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const FormItem2 = ({
	label,
	inputId,
	inputType,
	inputPlaceholder,
	description,
}: {
	label: string;
	inputId: [string, string];
	inputType: [HTMLInputTypeAttribute, HTMLInputTypeAttribute];
	inputPlaceholder: [string, string];
	description?: [string, string];
}) => {
	return (
		<div className="pl-10 pr-10 pt-5">
			<Label htmlFor={inputId[0]}>{label}</Label>
			<div className="mt-2 flex flex-row justify-between">
				<div className="w-[48%]">
					<Input
						type={inputType[0]}
						id={inputId[0]}
						placeholder={inputPlaceholder[0]}
					/>
					{description ? (
						<p className="text-sm text-slate-500 mt-2">{description[0]}</p>
					) : (
						""
					)}
				</div>
				<div className="w-[48%]">
					<Input
						type={inputType[1]}
						id={inputId[1]}
						placeholder={inputPlaceholder[1]}
					/>
					{description ? (
						<p className="text-sm text-slate-500 mt-2">{description[1]}</p>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
};

export default FormItem2;
