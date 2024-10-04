"use client";

import FormItemAddress from "@/components/form-item-address";
import FormItem from "@/components/form-item-one-input";
import FormItem2 from "@/components/form-item-two-inputs";
import PageTask from "@/components/page-task";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="flex flex-col justify-center items-center pt-3">
				<Progress value={0} className="w-3/4" />
				<PageTask task="Step 1: Basic Information" />
				<div className="border rounded-xl w-3/4 mt-5 pb-5">
					<FormItem2
						label="Name"
						inputId={["name", "surname"]}
						inputType={["text", "text"]}
						inputPlaceholder={["First Name", "Last Name"]}
						description={[
							"Enter your full name as it appears on your passport",
							"",
						]}
					/>
					<FormItem
						label="Company Name"
						inputId="company"
						inputType="text"
						inputPlaceholder="Enter your official company name"
					/>
					<FormItem
						label="Email"
						inputId="email"
						inputType="email"
						inputPlaceholder="ex: johndoe@example.com"
					/>
					<FormItemAddress
						label="Address"
						inputId={["street1", "street2", "city", "state", "zip", "country"]}
						inputType={["text", "text", "text", "text", "text", "text"]}
						inputPlaceholder={["", "", "", "", "", ""]}
						description={[
							"Street Address",
							"Street Address 2",
							"City",
							"State",
							"Zip Code",
							"Country",
						]}
					/>
					<FormItem2
						label="Office Phone Number"
						inputId={["areaCode", "number"]}
						inputType={["number", "number"]}
						inputPlaceholder={["+44", ""]}
						description={["Area Code", "Phone Number"]}
					/>
					<FormItem2
						label="Cell Phone Number"
						inputId={["areaCode", "number"]}
						inputType={["number", "number"]}
						inputPlaceholder={["+44", ""]}
						description={["Area Code", "Phone Number"]}
					/>
				</div>
				<Button variant={"outline"} className="mt-4" asChild>
					<Link href="/document-upload/">Save and Continue</Link>
				</Button>
			</div>
		</>
	);
}
