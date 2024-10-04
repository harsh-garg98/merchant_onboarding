const PageTask = ({ task }: { task: string }) => {
	return (
		<div className="space-y-1 mt-6 ml-6 text-center">
			<p className="text-xl font-bold leading-none pb-3">{task}</p>
		</div>
	);
};

export default PageTask;
