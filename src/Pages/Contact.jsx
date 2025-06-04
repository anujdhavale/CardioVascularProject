


// import React, { useState } from "react";
// import "../styles/Contact.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simulate successful form submission
//     console.log("Form submitted:", formData);
//     setSubmitted(true);
//     setFormData({ name: "", email: "", message: "" });

//     // In a real app, send data to backend or email service
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
//       <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">
//         Contact Us
//       </h1>

//       {submitted ? (
//         <div className="text-center text-green-600 text-lg font-medium">
//           ✅ Thank you! Your message has been sent.
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block font-semibold text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border rounded p-2"
//               placeholder="Your name"
//             />
//           </div>

//           <div>
//             <label className="block font-semibold text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border rounded p-2"
//               placeholder="your@email.com"
//             />
//           </div>

//           <div>
//             <label className="block font-semibold text-gray-700">Message</label>
//             <textarea
//               name="message"
//               required
//               rows="5"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full border rounded p-2"
//               placeholder="Your message..."
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//           >
//             Send Message
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Contact;



import React, { useState } from "react";
import "../styles/Contact.css"; // Adjust path as needed

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      {submitted ? (
        <div className="contact-success">✅ Thank you! Your message has been sent.</div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;


