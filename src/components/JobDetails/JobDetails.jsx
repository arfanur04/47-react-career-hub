import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
	const jobs = useLoaderData();
	const { id } = useParams();

	const job = jobs?.find((job) => +job.id === +id);
	console.log(`job:`, job);

	return (
		<div>
			<div className="grid gap-4 md:grid-cols-4">
				<div className="border md:col-span-3">
					<h2 className="text-4xl">Details coming here</h2>
					<h2>
						Job Details id {id}: {job.job_title}
					</h2>
					<p>{job.company_name}</p>
				</div>
				<div className="border">
					<h2 className="text-2xl">Side thing</h2>
					<button className="w-full btn btn-primary">Apply Now</button>
				</div>
			</div>
		</div>
	);
};

export default JobDetails;
