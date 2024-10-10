import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UploadDocs = ({
	header,
	label,
	description,
	uploadedDocs,
	onUpload,
}: {
	header?: string;
	label: string;
	description?: string;
	uploadedDocs: (File | null)[];
	onUpload: (file: File) => void;
}) => {
	const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const files = e.target.files;
		if (!files) return;
		const file = files[0];
		onUpload(file);
	};

	return (
		<div className="pl-10 pr-10 pt-5 flex flex-col">
			{header ? <h1 className="text-2xl font-bold">{header}</h1> : ""}
			<Label className="mt-4 leading-5" htmlFor="uploadDoc">
				{label}
			</Label>
			<Input
				type="file"
				className="mt-4"
				id="uploadDoc"
				onChange={(e) => handleSubmit(e)}
			/>
			{/* <Button variant="outline" className="mt-3 w-fit">
				<Upload className="pr-2" />
				Upload Doc
			</Button> */}
			{description ? (
				<p className="text-sm text-slate-500 mt-2">{description}</p>
			) : (
				""
			)}
		</div>
	);
};

export default UploadDocs;
