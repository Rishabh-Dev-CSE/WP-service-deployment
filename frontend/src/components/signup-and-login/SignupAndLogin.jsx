import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { auth, signInWithGoogle, logout } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [user, setUser] = useState(null);

  // Firebase auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit (Signup / Login)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      console.log("Signup Data:", form);
      // 👉 yaha Firebase createUserWithEmailAndPassword lagao
    } else {
      console.log("Login Data:", form);
      // 👉 yaha Firebase signInWithEmailAndPassword lagao
    }
  };

  // Handle Google login
  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error(error);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/authvd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🔹 Content */}
      <div className="relative grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#1f2a40]/90 backdrop-blur-md p-8 rounded-2xl shadow-lg"
        >
          {user ? (
            // If logged in, show welcome + logout
            <div className="text-center text-white">
              <h2 className="text-2xl font-bold mb-4">
               {window.location.href = '/services'}👋
              </h2>
              <button
                onClick={handleLogout}
                className="w-full py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            // If not logged in, show auth form
            <>
              <h2 className="text-3xl font-bold text-white text-center mb-6">
                {isSignup ? "Create " : "Welcome "}
                <span className="text-cyan-400">
                  {isSignup ? "Account" : "Back"}
                </span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {isSignup && (
                  <div>
                    <label className="text-sm text-gray-300 block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-[#141e30] text-white border border-gray-600 focus:border-cyan-400 focus:outline-none"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                )}
                <div>
                  <label className="text-sm text-gray-300 block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#141e30] text-white border border-gray-600 focus:border-cyan-400 focus:outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-300 block mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#141e30] text-white border border-gray-600 focus:border-cyan-400 focus:outline-none"
                    placeholder="Create password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition duration-200"
                >
                  {isSignup ? "Signup" : "Login"}
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center my-5">
                <div className="flex-grow h-px bg-gray-600"></div>
                <span className="px-2 text-gray-400 text-sm">or</span>
                <div className="flex-grow h-px bg-gray-600"></div>
              </div>

              {/* Google Auth */}
              <button
                onClick={handleLogin}
                className="flex items-center justify-center gap-2 w-full py-2 border border-gray-600 bg-[#141e30] hover:bg-gray-800 text-white rounded-lg transition duration-200"
              >
                <FcGoogle size={22} /> {isSignup ? "Sign up" : "Login"} with
                Google
              </button>

              {/* Toggle */}
              <p className="text-center text-gray-400 text-sm mt-5">
                {isSignup
                  ? "Already have an account?"
                  : "Don’t have an account?"}{" "}
                <button
                  onClick={() => setIsSignup(!isSignup)}
                  className="text-cyan-400 hover:underline"
                >
                  {isSignup ? "Login" : "Signup"}
                </button>
              </p>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
