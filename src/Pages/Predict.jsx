


// const Predict = () => {
//     return(
//         <>
//          <div className='text-center p-4'>Prediction Page</div>

//         </>
//     )

// }
// export default Predict;



import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const result = location.state?.result;
  const inputSummary = location.state?.inputSummary;

  if (!result) {
    // If someone visits this page directly without going through prediction
    return (
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl text-center">
        <h2 className="text-2xl font-semibold mb-4">No Prediction Found</h2>
        <p className="text-gray-600 mb-4">
          Please fill the form on the home page to get a prediction.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Go Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Prediction Result
      </h1>

      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <h3 className="text-xl font-semibold mb-2">Your Input Summary</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {inputSummary &&
            Object.entries(inputSummary).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {String(value)}
              </li>
            ))}
        </ul>
      </div>

      <div className="text-center mt-6">
        <h2 className="text-2xl font-bold">Risk Level:</h2>
        <p
          className={`text-3xl font-bold mt-2 ${
            result === "High" ? "text-red-600" : "text-green-600"
          }`}
        >
          {result}
        </p>

        <p className="mt-4 text-gray-600">
          {result === "High"
            ? "There may be a higher risk of cardiovascular disease. Please consult a medical professional."
            : "Low predicted risk. Continue regular checkups and a healthy lifestyle."}
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Predict Again
        </button>
      </div>
    </div>
  );
};

export default Result;

