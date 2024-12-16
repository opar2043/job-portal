import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const JobDetail = () => {
  const { id } = useParams();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, []);

  const job = jobs.find((j) => j._id === id);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-lg font-semibold text-red-600">Job not found!</p>
      </div>
    );
  }

  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    _id,
    description,
    company,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
  } = job;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <figure className="relative bg-gray-200">
          <img
            src={company_logo || "https://via.placeholder.com/150"}
            alt={company}
            className="w-32 h-32 rounded-full object-cover absolute top-4 left-4 border-4 border-white shadow-md"
          />
          <img
            src="https://source.unsplash.com/800x200/?office"
            alt="Company"
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-500 mt-2">{description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div>
              <p>
                <strong className="text-gray-700">Company:</strong> {company}
              </p>
              <p>
                <strong className="text-gray-700">Location:</strong> {location}
              </p>
              <p>
                <strong className="text-gray-700">Job Type:</strong> {jobType}
              </p>
              <p>
                <strong className="text-gray-700">Category:</strong> {category}
              </p>
            </div>
            <div>
              {/* <p>
                <strong className="text-gray-700">Salary:</strong> {salaryRange}
              </p> */}
              <p>
                <strong className="text-gray-700">Deadline:</strong>{" "}
                {applicationDeadline}
              </p>
              <p>
                <strong className="text-gray-700">HR Contact:</strong>{" "}
                {hr_name} (
                <a
                  href={`mailto:${hr_email}`}
                  className="text-blue-500 hover:underline"
                >
                  {hr_email}
                </a>
                )
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Responsibilities:
            </h2>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
              {responsibilities.map((res, index) => (
                <li key={index}>{res}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Requirements:
            </h2>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
         <Link to={`/jobapply/${_id}`}>
         <div className="mt-8 text-center">
            <button className="btn btn-primary bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
              Apply Now
            </button>
          </div>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
