


// const Home = () => {
//     return(
//         <>
//          <div className='text-center p-4'>Welcome to CardioPredict</div>

//           <div className="container">
//           <h1>Welcome to CardioPredict</h1>
//           <p>Predict your cardiovascular health status easily and quickly.</p>
//     </div>

//         </>
//     )

// }
// export default Home;



import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Cardiovascular Disease Predictor</h1>
      <p>
        Enter your health information to get an instant risk prediction powered
        by deep learning.
      </p>
    </div>
  );
};

export default Home;
