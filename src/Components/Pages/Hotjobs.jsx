import React, { useEffect, useState } from 'react';
import JobsCard from './JobsCard';

const Hotjobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  return (
    <div className="my-10">
      <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-800">
        Hot Jobs
        <span className="text-pink-500"> ({jobs.length})</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10 px-4">
        {jobs.length > 0 ? (
          jobs.map((job) => <JobsCard key={job._id} job={job}></JobsCard>)
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            Loading jobs, please wait...
          </p>
        )}
      </div>
    </div>
  );
};

export default Hotjobs;
