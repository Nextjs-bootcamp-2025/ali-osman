// 'use client';
// import React, { useState } from 'react';
// import DisplayName from '../components/DisplayName';
// // onChange Event

// const Contact = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <div className="text-center flex flex-col justify-center items-center">
//       <DisplayName />
//       <h1>Login</h1>
//       <form
//         action=""
//         className="max-w-[500px] flex flex-col gap-2 p-6 shadow-lg"
//       >
//         <div>
//           <label htmlFor="name" className="mr-2">
//             user name
//           </label>
//           <input
//             type="text"
//             id="name"
//             className="border"
//             defaultValue={username}
//             onChange={(event) => setUsername(event.target.value)}
//           />
//         </div>

//         <div>
//           <label htmlFor="password" className="mr-2">
//             password
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="border"
//             defaultValue={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//         </div>
//       </form>

//       <button
//         onClick={(e) => {
//           if (username === '' || password === '') {
//             alert('please enter username and password');
//           }
//           console.log(username);
//           console.log(password);
//         }}
//         className="px-4 py-2 mt-6 bg-orange-400 text-white w-[150px] m-auto text-center"
//       >
//         login
//       </button>
//     </div>
//   );
// };

// export default Contact;

// api route = /api/contact
