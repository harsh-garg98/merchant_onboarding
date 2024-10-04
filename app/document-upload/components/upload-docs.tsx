import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

const UploadDocs = ({
	header,
	label,
	description,
}: {
	header?: string;
	label: string;
	description?: string;
}) => {
	return (
		<div className="pl-10 pr-10 pt-5 flex flex-col">
			{header ? <h1 className="text-2xl font-bold">{header}</h1> : ""}
			<Label className="mt-4 leading-5">{label}</Label>
			<Button variant="outline" className="mt-3 w-fit">
				<Upload className="pr-2" />
				Upload Doc
			</Button>
			{description ? (
				<p className="text-sm text-slate-500 mt-2">{description}</p>
			) : (
				""
			)}
		</div>
	);
};

export default UploadDocs;
