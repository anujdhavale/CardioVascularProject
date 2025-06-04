

// // const Result = () => {
// //     return(
// //         <>
// //          <div className='text-center p-4'>Result Page</div>

// //         </>
// //     )
// // }
// // export default Result;



// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Result = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Destructure prediction result and user inputs passed via navigation state
//   const result = location.state?.result;
//   const inputSummary = location.state?.inputSummary;

//   // Redirect if accessed directly without prediction data
//   if (!result) {
//     return (
//       <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl text-center">
//         <h2 className="text-2xl font-semibold mb-4">No Prediction Available</h2>
//         <p className="text-gray-600 mb-4">
//           You need to complete the prediction form on the Home page first.
//         </p>
//         <button
//           onClick={() => navigate("/")}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Go to Home
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
//       <h1 className="text-3xl font-bold text-center mb-6">Prediction Result</h1>

//       <div className="bg-gray-100 p-4 rounded-md mb-6">
//         <h2 className="text-xl font-semibold mb-2">Your Input Summary</h2>
//         <ul className="list-disc list-inside text-gray-700">
//           {inputSummary &&
//             Object.entries(inputSummary).map(([key, value]) => (
//               <li key={key}>
//                 <span className="font-medium capitalize">{key}:</span>{" "}
//                 {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
//               </li>
//             ))}
//         </ul>
//       </div>

//       <div className="text-center">
//         <h2 className="text-2xl font-semibold">Risk Level:</h2>
//         <p
//           className={`text-3xl font-bold mt-2 ${
//             result === "High" ? "text-red-600" : "text-green-600"
//           }`}
//         >
//           {result}
//         </p>
//         <p className="mt-4 text-gray-700">
//           {result === "High"
//             ? "⚠️ You may be at higher risk for cardiovascular disease. It is advised to consult a healthcare provider."
//             : "✅ You appear to be at lower risk. Maintain a healthy lifestyle and have regular checkups."}
//         </p>

//         <button
//           onClick={() => navigate("/")}
//           className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//         >
//           Predict Again
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Result;



import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Result.css"; // Make sure path matches your project

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const result = location.state?.result;
  const inputSummary = location.state?.inputSummary;

  if (!result) {
    return (
      <div className="result-container">
        <h2 className="result-heading">No Prediction Available</h2>
        <p className="result-text">
          You need to complete the prediction form on the Home page first.
        </p>
        <button className="result-button" onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="result-container">
      <h1 className="result-title">Prediction Result</h1>

      <div className="input-summary">
        <h2 className="input-summary-title">Your Input Summary</h2>
        <ul className="input-summary-list">
          {inputSummary &&
            Object.entries(inputSummary).map(([key, value]) => (
              <li key={key}>
                <span className="input-key">{key}:</span>{" "}
                {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
              </li>
            ))}
        </ul>
      </div>

      <div className="result-details">
        <h2 className="risk-label">Risk Level:</h2>
        <p className={`risk-result ${result === "High" ? "high" : "low"}`}>
          {result}
        </p>
        <p className="risk-description">
          {result === "High"
            ? "⚠️ You may be at higher risk for cardiovascular disease. It is advised to consult a healthcare provider."
            : "✅ You appear to be at lower risk. Maintain a healthy lifestyle and have regular checkups."}
        </p>

        <button className="result-button" onClick={() => navigate("/")}>
          Predict Again
        </button>
      </div>
    </div>
  );
};

export default Result;
