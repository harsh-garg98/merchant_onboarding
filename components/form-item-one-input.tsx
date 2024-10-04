import { HTMLInputTypeAttribute } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const FormItem = ({
	label,
	inputId,
	inputType,
	inputPlaceholder,
	description,
}: {
	label: string;
	inputId: string;
	inputType: HTMLInputTypeAttribute;
	inputPlaceholder: string;
	description?: string;
}) => {
	return (
		<div className="pl-10 pr-10 pt-5">
			<Label htmlFor={inputId}>{label}</Label>
			<Input
				type={inputType}
				id={inputId}
				placeholder={inputPlaceholder}
				className="mt-2"
			/>
			{description ? (
				<p className="text-sm text-slate-500 mt-2">{description}</p>
			) : (
				""
			)}
		</div>
	);
};

export default FormItem;
