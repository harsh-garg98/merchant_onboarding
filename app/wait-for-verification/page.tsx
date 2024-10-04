import PageTask from "@/components/page-task";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import VerificationStatus from "./components/verification-status";

const Page = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center pt-3">
				<Progress value={66.6} className="w-3/4" />
				<PageTask task="Step 3: Wait for Verification" />
				<div className="border rounded-xl w-3/4 mt-5 pb-5">
					<VerificationStatus
						documentType="Business Registration Documents"
						status="rejected"
					/>
					<VerificationStatus
						documentType="Tax Identification Numbers"
						status="pending"
					/>
					<VerificationStatus
						documentType="Ownership Documents"
						status="pending"
					/>
					<VerificationStatus
						documentType="Financial Statements"
						status="approved"
					/>
					<VerificationStatus
						documentType="Bank Account Information"
						status="pending"
					/>
					<VerificationStatus
						documentType="Business Licences and Permits"
						status="pending"
					/>
					<VerificationStatus
						documentType="Payment Processing History"
						status="pending"
					/>
					<VerificationStatus
						documentType="Business Plan and Revenue Projections"
						status="pending"
					/>
					<VerificationStatus
						documentType="Compliance Documentation"
						status="pending"
					/>
				</div>
				<div className="flex flex-row gap-x-5">
					<Button variant={"outline"} className="mt-4" asChild>
						<Link href="/document-upload">Back</Link>
					</Button>
					<Button variant={"outline"} className="mt-4" disabled>
						{/* <Link href="">Save and Continue</Link> */}
						Save and Continue
					</Button>
				</div>
			</div>
		</>
	);
};

export default Page;
