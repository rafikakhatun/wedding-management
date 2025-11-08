import { UserPlus } from "lucide-react";
import { Link } from "react-router";

const Register = () => {
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
        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Age</label>
            <input
              type="number"
              placeholder="Enter your age"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Gender</label>
            <select
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

          {/* Submit Button */}
          <button
            type="button"
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-semibold shadow-md"
          >
            Register
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
