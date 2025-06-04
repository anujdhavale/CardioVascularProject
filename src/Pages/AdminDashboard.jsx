

const AdminDashboard = () => {
    return(
        <>
        <div className='text-center p-4'>Admin Dashboard</div>

        </>
    )



}
export default AdminDashboard;

// frontend/src/pages/AdminDashboard.jsx
// import React, { useEffect, useState } from 'react';

// const AdminDashboard = () => {
//   const [stats, setStats] = useState({
//     totalPredictions: 0,
//     highRisk: 0,
//     lowRisk: 0,
//     accuracy: 0.91,
//     precision: 0.88,
//     recall: 0.85,
//   });

//   useEffect(() => {
//     // In real setup, fetch these from a secure admin API
//     // Example: axios.get('/admin/stats')
//     // setStats(response.data);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">
//         Admin Dashboard
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Stats Cards */}
//         <StatCard title="Total Predictions" value={stats.totalPredictions} />
//         <StatCard title="High Risk Predictions" value={stats.highRisk} />
//         <StatCard title="Low Risk Predictions" value={stats.lowRisk} />
//         <StatCard title="Model Accuracy" value={${(stats.accuracy * 100).toFixed(2)}%} />
//         <StatCard title="Model Precision" value={${(stats.precision * 100).toFixed(2)}%} />
//         <StatCard title="Model Recall" value={${(stats.recall * 100).toFixed(2)}%} />
//       </div>

//       <div className="mt-12">
//         <h2 className="text-xl font-semibold mb-4">📈 Notes</h2>
//         <p className="text-gray-700 text-sm">
//           The dashboard shows metrics and statistics of prediction activity. In a production app, this would be dynamically updated from a secure backend database.
//         </p>
//       </div>
//     </div>
//   );
// };

// // Reusable stat card component
// const StatCard = ({ title, value }) => (
//   <div className="bg-white shadow rounded-lg p-6">
//     <h3 className="text-sm font-semibold text-gray-600">{title}</h3>
//     <p className="mt-2 text-2xl font-bold text-red-500">{value}</p>
//   </div>
// );

// export default AdminDashboard;
