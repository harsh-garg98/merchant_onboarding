import { CircleAlert, CircleCheckBigIcon, CircleX } from "lucide-react";

const VerificationStatus = ({
	documentType,
	status,
	description,
}: {
	documentType: string;
	status: "pending" | "approved" | "rejected";
	description?: string;
}) => {
	function capitalizeFirstLetter(str: string): string {
		if (str.length === 0) return str;
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	return (
		<div className="pl-10 pr-10 pt-5 flex flex-col">
			<p className="mt-4 leading-5 font-bold">{documentType}</p>
			<p className="mt-2 flex flex-row">
				Uploaded
				<CircleCheckBigIcon color="green" className="ml-5" size={20} />
			</p>
			<p className="mt-2 flex flex-row">
				{capitalizeFirstLetter(status)}
				{status === "approved" ? (
					<CircleCheckBigIcon color="green" className="ml-5" size={20} />
				) : (
					""
				)}
				{status === "rejected" ? (
					<CircleX color="red" className="ml-5" size={20} />
				) : (
					""
				)}
				{status === "pending" ? (
					<CircleAlert color="orange" className="ml-5" size={20} />
				) : (
					""
				)}
			</p>

			{description ? (
				<p className="text-sm text-slate-500 mt-2">{description}</p>
			) : (
				""
			)}
		</div>
	);
};

export default VerificationStatus;
