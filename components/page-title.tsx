import { Separator } from "./ui/separator";

const PageTitle = ({
	header,
	subtitle,
}: {
	header: string;
	subtitle: string;
}) => {
	return (
		<>
			<div className="space-y-1 mt-6 ml-6 text-center">
				<h1 className="text-xl font-bold leading-none pb-3">{header}</h1>
				<p className="text-m text-muted-foreground">{subtitle}</p>
			</div>
			<Separator className="my-4" />
		</>
	);
};

export default PageTitle;
