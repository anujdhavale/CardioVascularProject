

// import React from "react";
// import '../styles/About.css';

// const About = () => {
//   return (
//     <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
//       <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">
//         About the Project
//       </h1>

//       <section className="mb-6">
//         <h2 className="text-xl font-semibold mb-2 text-gray-800">
//           🧠 Project Overview
//         </h2>
//         <p className="text-gray-700 leading-relaxed">
//           This web application predicts the risk of cardiovascular disease
//           based on health indicators provided by the user. The prediction is
//           powered by an optimized deep learning model trained on a real-world
//           dataset of patient health records.
//         </p>
//       </section>

//       <section className="mb-6">
//         <h2 className="text-xl font-semibold mb-2 text-gray-800">
//           📊 Dataset Used
//         </h2>
//         <p className="text-gray-700 leading-relaxed">
//           The model was trained using a publicly available cardiovascular
//           dataset from sources such as Kaggle or the UCI Machine Learning
//           Repository. It includes medical features like:
//         </p>
//         <ul className="list-disc list-inside text-gray-700 mt-2">
//           <li>Age</li>
//           <li>Gender</li>
//           <li>Cholesterol</li>
//           <li>Blood Pressure</li>
//           <li>Glucose</li>
//           <li>Smoking, Alcohol Consumption</li>
//           <li>Physical Activity</li>
//         </ul>
//       </section>

//       <section className="mb-6">
//         <h2 className="text-xl font-semibold mb-2 text-gray-800">
//           ⚙️ Model Details
//         </h2>
//         <p className="text-gray-700 leading-relaxed">
//           The prediction model is built using a deep neural network (DNN) with
//           several hidden layers and ReLU activations. It has been optimized
//           using techniques such as:
//         </p>
//         <ul className="list-disc list-inside text-gray-700 mt-2">
//           <li>Hyperparameter tuning</li>
//           <li>Dropout and regularization</li>
//           <li>Batch normalization</li>
//           <li>Cross-validation</li>
//         </ul>
//         <p className="mt-2 text-gray-700">
//           The model achieved an accuracy of approximately <strong>XX%</strong>,
//           with a good balance between sensitivity and specificity.
//         </p>
//       </section>

//       <section className="mb-6">
//         <h2 className="text-xl font-semibold mb-2 text-gray-800">
//           🔒 Disclaimer
//         </h2>
//         <p className="text-gray-700 leading-relaxed">
//           This tool is intended for educational and research purposes only. It
//           does not replace professional medical advice or diagnosis. For any
//           health concerns, always consult a certified medical professional.
//         </p>
//       </section>

//       <section className="text-center text-sm text-gray-500 mt-6">
//         Built using React, Tailwind CSS, and a Python-based deep learning backend.
//       </section>
//     </div>
//   );
// };

// export default About;



import React from 'react';
import '../styles/About.css'; // ✅ Adjust path if needed

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About CardioPredict</h1>

      <div className="about-section">
        <h2 className="about-section-title">Project Overview</h2>
        <p>
          CardioPredict is a machine learning-powered web application designed to assist healthcare professionals
          and patients in predicting the risk of cardiovascular disease based on medical parameters. This tool
          aims to aid early detection and preventative care.
        </p>
      </div>

      <div className="about-section">
        <h2 className="about-section-title">Key Features</h2>
        <ul>
          <li>Predict cardiovascular disease risk with high accuracy</li>
          <li>User-friendly interface for both patients and medical staff</li>
          <li>Uses optimized deep learning algorithms for better performance</li>
          <li>Responsive design for all device sizes</li>
        </ul>
      </div>

      <div className="about-section">
        <h2 className="about-section-title">Technology Stack</h2>
        <ul>
          <li>Frontend: React, Axios, React Router</li>
          <li>Backend: Python (Flask or FastAPI), trained ML model</li>
          <li>Modeling: Scikit-learn, Pandas, NumPy, TensorFlow/PyTorch</li>
        </ul>
      </div>

      <div className="about-disclaimer">
        <strong>Disclaimer:</strong> CardioPredict is not a substitute for professional medical advice. Always consult with a licensed healthcare provider before making health decisions based on predictions.
      </div>

      <div className="about-footer">
        © {new Date().getFullYear()} CardioPredict. All rights reserved.
      </div>
    </div>
  );
};

export default About;
