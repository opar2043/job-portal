import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Root/Authprovider"

const Myapplications = () => {
    const {user} = useContext(AuthContext);
    const [jobs,setJobs] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/job-applications?email=${user.email}`)
        .then(data=>data.json())
        .then(res => {
            setJobs(res)
        })
    },[user.email])

  return (
    <div className="my-8">
        <div className="overflow-x-auto">
            <h2 className="text-center text-2xl font-bold py-5">My Application Job Info</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>index</th>
        <th>G-Mail</th>
        <th>Linkdein Link</th>
        <th>Gihub</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        jobs.map((job,idx )=> <tr key={job._id}>
            <th>{idx + 1}</th>
            <td>{job.email}</td>
            <td>{job.linkdein}t</td>
            <td>{job.github}</td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Myapplications