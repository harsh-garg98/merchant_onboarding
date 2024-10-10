"use client";

import PageTask from "@/components/page-task";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import UploadDocs from "./components/upload-docs";
import { useState } from "react";

const Page = () => {
	const [uploadedDocs, setUploadedDocs] = useState<(File | null)[]>(
		Array(9).fill(null)
	);

	const handleUpload = (index: number, file: File) => {
		const newUploadedDocs = [...uploadedDocs];
		newUploadedDocs[index] = file;
		setUploadedDocs(newUploadedDocs);
	};

	//The state management is useless is actually useless here since we are not using the submit button to submit the form

	return (
		<>
			<div className="flex flex-col justify-center items-center pt-3">
				<Progress value={33.3} className="w-3/4" />
				<PageTask task="Step 2: Upload Documents" />
				<div className="border rounded-xl w-3/4 mt-5 pb-5">
					<UploadDocs
						header="Business Registration Documents"
						label="Copies of the business’s registration documents, such as articles of association, certificates of incorporation, or other relevant documents that verify the legal existence of the business."
						description="PDF only, max 10MB"
						uploadedDocs={uploadedDocs}
						onUpload={(file) => handleUpload(0, file)}
					/>
					<UploadDocs
						header="Tax Identification Numbers"
						label="The business’s tax identification numbers, such as the Employer Identification Number (EIN) in the United States or the equivalent in other countries."
						description="PDF only, max 10MB"
						uploadedDocs={uploadedDocs}
						onUpload={(file) => handleUpload(1, file)}
					/>
					<UploadDocs
						header="Ownership Documents"
						label="Information about the business’s ownership structure, including details about the owners, partners, or directors. This may involve providing personal identification documents for key shareholders, such as government-issued IDs, passports, or driving licences."
						description="PDF only, max 10MB"
						uploadedDocs={uploadedDocs}
						onUpload={(file) => handleUpload(2, file)}
					/>
					<UploadDocs
						header="Financial Statements"
						label="Recent financial statements, such as balance sheets, income statements, and cash flow statements, to provide insight into the business’s financial health."
						description="PDF only, max 10MB"
						uploadedDocs={uploadedDocs}
						onUpload={(file) => handleUpload(3, file)}
					/>
					<UploadDocs
						header="Bank Account Information"
						label="Details about the business’s bank account, including the account number, routing number, and the name and address of the bank."
						description="PDF only, max 10MB"
						uploadedDocs={uploadedDocs}
						onUpload={(file) => handleUpload(4, file)}
					/>
					<UploadDocs
						header="Business Licences and Permits"
						label="Copies of any relevant business licences, permits, or certifications required to operate in your industry or jurisdiction."
						description="PDF only, max 10MB"
						uploadedDocs={uploadedDocs}
						onUpload={(file) => handleUpload(5, file)}
					/>
					<UploadDocs
						header="Payment Processing History"
						label="If the business has a prior payment processing history, provide statements or summaries of previous transaction volumes, chargeback rates, and other relevant information."
						description="PDF only, max 10MB"
						uploadedDocs={uploadedDocs}
						onUpload={(file) => handleUpload(6, file)}
					/>
					<UploadDocs
						header="Business Plan and Revenue Projections"
						label="A detailed business plan, including revenue projections and anticipated transaction volumes, may be requested – especially for startups or businesses with limited operating history."
						description="PDF only, max 10MB"
						uploadedDocs={uploadedDocs}
						onUpload={(file) => handleUpload(7, file)}
					/>
					<UploadDocs
						header="Compliance Documentation"
						label="Any documentation related to your business’s compliance with industry regulations or standards, such as Payment Card Industry Data Security Standard (PCI DSS), General Data Protection Regulation (GDPR), or other data protection and privacy policies."
						description="PDF only, max 10MB"
						uploadedDocs={uploadedDocs}
						onUpload={(file) => handleUpload(8, file)}
					/>
				</div>
				<div className="flex flex-row gap-x-5">
					<Button variant={"outline"} className="mt-4" asChild>
						<Link href="/">Back</Link>
					</Button>
					<Button variant={"outline"} className="mt-4" asChild>
						<Link href="/wait-for-verification">Save and Continue</Link>
					</Button>
				</div>
			</div>
		</>
	);
};

export default Page;
