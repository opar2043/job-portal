import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Root/Authprovider";
import formData from '../../../public/formdata.json'
import Lottie from "lottie-react";


const Addjob = () => {

    const {user} = useContext(AuthContext)

    const navigate = useNavigate()

    function addJobData(e) {
        
      e.preventDefault();
      const form = e.target;
  
      // Extract values from form fields
      const title = form.title.value;
      const location = form.location.value;
      const company_logo = form.logo.value;
      const jobType = form.jobType.value;
      const category = form.category.value;
      const applicationDeadline = form.applicationDeadline.value;
      const salaryMin = parseFloat(form.salaryMin.value);
      const salaryMax = parseFloat(form.salaryMax.value);
      const description = form.description.value;
      const company = form.company.value;
      const requirements = form.requirements.value.split(',').map(req => req.trim());
      const responsibilities = form.responsibilities.value.split(',').map(resp => resp.trim());
      const hr_email = form.hr_email.value;
      const hr_name = form.hr_name.value;
  
      // Organize data into an object
      const jobData = {
        hr_email,
        hr_name,
        title,
        company_logo,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange: {salaryMin, salaryMax},
        description,
        company,
        requirements,
        responsibilities 
          
   
      };
  
      // Log or handle the jobData object
      console.log(jobData);
      // Send to backend (example)
      fetch('http://localhost:3000/jobs', {
        method: 'POST',
        headers: {
             'Content-Type': 'application/json'
             },
        body: JSON.stringify(jobData),
      })
      .then(res=>res.json())
      .then(data => {

         if(data.insertedId){
           
                Swal.fire({
                  title: "Good job!",
                  text: "Youv has been created",
                  icon: "success"
                });
                navigate('/mypostedjobs')
              }
    
      })

    }
  
    return (
      <div>
        <div className="card bg-base-200  mx-auto w-11/12 md:w-3/5 shadow-2xl my-10">

          <form className="card-body" onSubmit={addJobData}>
   <div className="w-40 mx-auto">
    <Lottie animationData={formData}></Lottie>
   </div>
   <h2 className="text-center text-3xl font-bold">Add Job in your List</h2>

            {/* Form fields */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter job title"
                className="input input-bordered"
                defaultValue="Software Engineer"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Form Logo</span>
              </label>
              <input
                type="url"
                name="logo"
                placeholder="Enter logo Link"
                className="input input-bordered"
                defaultValue="https://i.ibb.co/Kw72gGC/icons8-youtube-logo-100.png"
                required
              />
            </div>
  
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Enter location"
                className="input input-bordered"
                defaultValue="Halishohor, NarayanGanj"
                required
              />
            </div>
  
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Type</span>
              </label>
              <select
                name="jobType"
                className="select select-bordered"
                defaultValue="Hybrid"
                required
              >
                <option value="Hybrid">Hybrid</option>
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
  
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter job category"
                className="input input-bordered"
                defaultValue="Engineering"
                required
              />
            </div>
  
            <div className="form-control">
              <label className="label">
                <span className="label-text">Application Deadline</span>
              </label>
              <input
                type="date"
                name="applicationDeadline"
                className="input input-bordered"
                defaultValue="2024-12-31"
                required
              />
            </div>
  
            <div className="form-control">
              <label className="label">
                <span className="label-text">Minimum Salary (BDT)</span>
              </label>
              <input
                type="number"
                name="salaryMin"
                placeholder="Enter minimum salary"
                className="input input-bordered"
                defaultValue="40000"
                required
              />
            </div>
  
            <div className="form-control">
              <label className="label">
                <span className="label-text">Maximum Salary (BDT)</span>
              </label>
              <input
                type="number"
                name="salaryMax"
                placeholder="Enter maximum salary"
                className="input input-bordered"
                defaultValue="60000"
                required
              />
            </div>
  
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Description</span>
              </label>
              <textarea
                name="description"
                placeholder="Enter job description"
                className="textarea textarea-bordered"
                required
              >
                We are seeking a skilled Software Engineer to join our dynamic team. The candidate will work on diverse projects and contribute to innovative solutions.
              </textarea>
            </div>
  
            <div className="form-control">
              <label className="label">
                <span className="label-text">Company Name</span>
              </label>
              <input
                type="text"
                name="company"
                placeholder="Enter company name"
                className="input input-bordered"
                defaultValue="Favorite IT"
                required
              />
            </div>
  
            <div className="form-control">
              <label className="label">
                <span className="label-text">Requirements (comma-separated)</span>
              </label>
              <input
                type="text"
                name="requirements"
                placeholder="e.g., JavaScript, React, Node.js, MongoDB"
                className="input input-bordered"
                defaultValue="JavaScript, React, Node.js, MongoDB"
                required
              />
            </div>
  
            <div className="form-control">
              <label className="label">
                <span className="label-text">Responsibilities (comma-separated)</span>
              </label>
              <input
                type="text"
                name="responsibilities"
                placeholder="e.g., Develop and maintain software, Collaborate with the team"
                className="input input-bordered"
                defaultValue="Develop and maintain software, Collaborate with the team, Participate in code reviews"
                required
              />
            </div>
  
            <div className="form-control">
              <label className="label">
                <span className="label-text">HR Email</span>
              </label>
              <input
                type="email"
                name="hr_email"
                placeholder="Enter HR email"
                className="input input-bordered"
                defaultValue={user.email}
                required
              />
            </div>
  
            <div className="form-control">
              <label className="label">
                <span className="label-text">HR Name</span>
              </label>
              <input
                type="text"
                name="hr_name"
                placeholder="Enter HR name"
                className="input input-bordered"
               
                required
              />
            </div>
  
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-outline">Publish Job</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Addjob;
  