import { UserPlus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const Register = () => {

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [profileImageFile, setProfileImageFile] = useState(null)








  //  formData state to handle user input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: ''
  });

  // image upload
  const handleFileChange = (e) => {
    setProfileImageFile(e.target.files[0]);

  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Register form Data:', formData);

    setLoading(true);
    setError(null);
    setSuccess(null);

    const submissionData = new FormData();
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("password", formData.password);
    submissionData.append("age", formData.age);
    submissionData.append("gender", formData.gender);

    if(profileImageFile){
      submissionData.append('profileImage',profileImageFile)
    }



    try {

      const response = await fetch('http://localhost:5001/api/users/create', {

        method: 'POST',
       // headers: {
       //   'content-Type': "application/json",
      //  },

       body: submissionData,

      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'filed to Register user')
      }

      const result = await response.json();
      setSuccess(result.message || 'Registration Successful')

      setFormData({
        name: '',
        email: '',
        password: '',
        age: '',
        gender: ''
      })




    } catch (error) {

      setError(error.message || 'An unexpected error occured');


    } finally {
      setLoading(false);
    }


  };














  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="bg-white/90 max-w-xl backdrop-blur-md rounded-2xl shadow-2xl w-full  p-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-indigo-600 text-white p-3 rounded-full mb-3 shadow-md">
            <UserPlus size={26} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Create Account </h2>
          <p className="text-gray-500 text-sm">Please fill the details below to register</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Your password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
              defaultValue=""
            >
              <option value="" disabled>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Image*/}
          <div>
            <label htmlFor="profileImage" className="block text-gray-700 text-sm mb-1">
              Profile Image
            </label>

            <input onChange={handleFileChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="file" name="profileImage" id="profileImage" accept="image/png, image/jpeg, image/jpg" />

          </div>

          {/*error msg */}
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

          {/* success msg*/}
          {success && <div className="text-green-500 text-sm mt-2">{success}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold shadow-md"
            disabled={isLoading}
          >
            {isLoading ? 'Registering......' : 'register'}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
