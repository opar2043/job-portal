import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Root/Authprovider'

const MypostedJobs = () => {
    const {user} = useContext(AuthContext);
    const [jobs,setJobs] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/jobs?email=${user.email}`)
        .then(data=>data.json())
        .then(res =>{
            setJobs(res)
        })
    },[user.email])

  return (
    <div>
    
    <h2 className='text-2xl text-center font-bold my-4 '>MypostedJobs-{jobs.length}</h2>
     <div className="overflow-x-auto w-11/12 mx-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
       idx
        </th>
        <th>logo</th>
        <th>Category</th>
        <th>Job</th>
        
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        jobs.map((job,idx) =>   <tr key={job._id}>
            <th>
             <td>{idx+1}</td>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={job.company_logo}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{job.company}</div>
                  <div className="text-sm opacity-50">{job.company}</div>
                </div>
              </div>
            </td>
            <td>
              {job.category}
            </td>
            
            <th>
              <button className="btn btn-link btn-xs">details</button>
            </th>
          </tr>)
      }
   
    
     
    </tbody>
  </table>
</div>
   
    </div>
  )
}

export default MypostedJobs