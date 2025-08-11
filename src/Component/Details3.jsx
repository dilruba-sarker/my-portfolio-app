import React from 'react';

const Details3 = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10 mt-20 ">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Welcome to Social Development Events Platform
            </h1>
            <p className="text-lg mb-6 text-center">
                A user-friendly platform for managing and Road Cleaning Social Development Events Platform.
            </p>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">🌐 Live URL</h2>
                <a
                    href="https://b-11-assignment-11-client.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800 transition"
                >
                    👉 View Live Project
                </a>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">📌 Project Purpose</h2>
                <p>
                    Social Development Events Platform, responsive website It is designed to be intuitive, visually appealing, and efficient across all devices—mobile, tablet, and desktop. This project emphasizes clean UI/UX with secure backend architecture using Firebase and MongoDB.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">🚀 Key Features</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li> Social Development Events website authentication using Firebase</li>
                    <li>Fully responsive layout (mobile, tablet, desktop)</li>
                    <li>Secure Firebase and MongoDB integration using .env files</li>
                    <li>👤 User-friendly dashboard</li>
                    <li>⚙️Attractive, recruiter-friendly UI with proper alignment, spacing, and eye-pleasing color contrast</li>
                   
<li>  JWT-based route protection</li>
<li>  Express API with secure CRUD operations</li>

                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">📦 NPM Packages Used</h2>
                 <h3 className="font-medium mt-4 mb-2">Client-side:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>React – Frontend library</li>
          <li>React Router – Routing</li>
          <li>Tailwind CSS – Styling</li>
          <li>DaisyUI – Prebuilt UI components</li>
          <li>Axios – API calls</li>
          <li>Firebase – Authentication</li>
          <li>JWT Decode – Handling token-based authentication</li>
        </ul>
        <h3 className="font-medium mt-4 mb-2">Server-side:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Express.js – Server framework</li>
          <li>Cors – Cross-Origin Resource Sharing</li>
          <li>Dotenv – Environment variable management</li>
          <li>MongoDB – Database</li>
          <li>Jsonwebtoken – JWT token generation and verification</li>
        </ul>
            </div>

            
        </div>
    );
};

export default Details3;
