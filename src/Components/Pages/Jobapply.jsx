import { useContext } from "react";
import { AuthContext } from "../Root/Authprovider";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Jobapply = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  function formLogin(e) {
    e.preventDefault();

    // Retrieve form values
    const linkdein = e.target.linkdein.value;
    const resume = e.target.resume.value;
    const github = e.target.github.value;
    const myData = { linkdein, github, resume };

    console.log(myData);

    const jobApplicant = {
      userId: id,
      email: user.email,
      linkdein,
      github,
      resume,
    };

    fetch('http://localhost:3000/job-applications',{
       method: 'POST',
       headers:{
        'content-type' : 'application/json',
       },
       body: JSON.stringify(jobApplicant)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
   
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });
      }
    })

    e.target.reset();
  }

  return (
    <div className="min-h-screen my-10 py-6 bg-gray-100 flex items-center justify-center">
      <div className="card bg-white  w-full max-w-lg mx-auto shadow-lg rounded-lg">
        <div className="p-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Apply for a Job</h2>
          <p className="text-gray-600">Fill out the form below to submit your application.</p>
        </div>
        <form className="card-body px-8 py-6" onSubmit={formLogin}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-gray-700">LinkedIn Profile</span>
            </label>
            <input
              type="url"
              name="linkdein"
              placeholder="Enter your LinkedIn URL"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-gray-700">Resume Link</span>
            </label>
            <input
              type="url"
              name="resume"
              placeholder="Enter your Resume URL"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-gray-700">GitHub Profile</span>
            </label>
            <input
              type="url"
              name="github"
              placeholder="Enter your GitHub URL"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary w-full py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Jobapply;
