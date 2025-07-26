// // components/homepage/LoginAndSend.jsx

// import React from 'react';
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../firebase/firebaseConfig";

// const LoginAndSend = () => {
//   const handleLoginAndSend = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       const idToken = await user.getIdToken(); // 🔑 Get Firebase token

//       // 🔽 Send to Django
//       const response = await fetch("http://localhost:8000/contact/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${idToken}`,
//         },
//         body: JSON.stringify({
//           name: user.displayName,
//           email: user.email,
//         }),
//       });

//       const data = await response.json();
//       console.log("Server response:", data);
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleLoginAndSend}>Login with Google & Send</button>
//     </div>
//   );
// };

// export default LoginAndSend;
// // 