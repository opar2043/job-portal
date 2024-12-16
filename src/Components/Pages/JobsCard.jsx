import { button } from "motion/react-client"
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";

const JobsCard = ({job}) => {
    const {title,location , jobType,category,applicationDeadline,salaryRange,description,company,requirements,responsibilities,status,hr_email,hr_name,company_logo,_id} = job

    // console.log(job);

    // console.log(salaryRange);
  return (
    <div>
        <div className="card card-compact h-[380px] py-2 border bg-base-100 shadow-xl">
   <div className="flex justify-start gap-5 items-center px-4">
   <figure>
    <img
      src={company_logo}
      alt="Shoes"
      className="w-12" />
  </figure>
   <div className="font-semibold">
    <h2 className="flex gap-1 items-center"><BiSolidCategory></BiSolidCategory> {category}</h2>
       <h2 className="flex gap-1 items-center"><FaLocationDot></FaLocationDot> {location}</h2>
       <h2>Deadline: {applicationDeadline}</h2>
  </div>
   </div>
  <div className="card-body gap-2 my-2">
 
    <h2 className="card-title">{title}

    <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{description}</p>
    <p className="flex flex-wrap gap-2">
        {
            requirements.map(req => <button className="px-1 font-semibold text-gray-600 bg-slate-100 py-1 rounded-lg border-2 ">{req}</button>)
        }
    </p>

    <p className="font-semibold text-lg text-gray-700">
        Salary: {salaryRange?.min || "15000"} - {salaryRange?.max || 'Contuct'} $
    </p>

  <Link to={`/job/${_id}`}>
  <div className="card-actions items-center justify-center">
    
    <button className="btn btn-info w-full">Apply</button>
  </div></Link>
  </div>
</div>
    </div>
  )
}

export default JobsCard