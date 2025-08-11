import React from 'react';

const Details4 = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10 mt-20 ">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Welcome to Social Forum
            </h1>
            <p className="text-lg mb-6 text-center">
                An interactive MERN stack-based forum where users can post, comment, vote, and engage in topic-based discussions. Designed with recruiters in mind, this forum emphasizes a clean, scalable structure, accessibility, performance, and responsiveness.
            </p>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">🌐 Live URL</h2>
                <a
                    href="https://social-forum-83088.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800 transition"
                >
                    👉 View Live Project
                </a>
            </div>
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">🌐 GitHub repository link</h2>
                <a
                    href="https://github.com/dilruba-sarker/my-awesome-social-forum-client-site"
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
                  This project was developed as part of a portfolio to showcase MERN stack proficiency, modern UI/UX practices, real-time interactivity, and secure web application development.
                  
  <li>Join discussions</li>
  <li>Share knowledge</li>
  <li>Comment and vote on posts</li>
  <li>Upgrade membership</li>
  <li>Participate in a respectful online community</li>

                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">✨ Key Features</h2>
                <ul>

  <li>🔐 Authentication & Role-based Access (Firebase)</li>
  <li>📝 Create, Edit, Delete Posts and Comments</li>
  <li>⬆️ Upvote / Downvote System</li>
  <li>🔍 Tag-based Search and Filtering</li>
  <li>💬 Comment Threads</li>
  <li>💎 Membership System with Stripe Integration</li>
  <li>🧑‍💻 Admin Controls: Manage Users, Approve Reports</li>
  <li>🛡️ Secure Backend APIs with token verification</li>
  <li>📱 Fully Responsive Design (Mobile, Tablet, Desktop)</li>
  <li>🎨 Modern UI using Tailwind CSS + DaisyUI</li>
  <li>📦 Environment-secured config & database</li>
  <li>📈 Tracked user activity, post votes, and earnings</li>
  <li>🌍 Built to attract recruiters: clean layout, elegant color contrast, intuitive navigation</li>
</ul>

            </div>

            <div className="mb-8">
                <h2 className="text-3xl font-semibold mb-2">⚙️ Tech Stack</h2>
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

            

            <div>

                <h1 className='text-3xl font-bold mt-8 mb-4'>Challenges faced while developing the project</h1>
                <ul>
  <li>⚙️ Implementing secure and efficient authentication with role-based access control</li>
  <li>🔄 Designing a scalable database structure to handle complex relationships (posts, comments, votes, memberships)</li>
  <li>📡 Managing real-time updates for posts, comments, and votes without performance drops</li>
  <li>💳 Integrating Stripe for memberships while ensuring secure payment processing</li>
  <li>🔍 Building an advanced search and filtering system using tags</li>
  <li>📱 Maintaining a fully responsive design across devices and browsers</li>
  <li>🛡️ Protecting APIs with token verification and preventing security vulnerabilities</li>
  <li>🚀 Optimizing load speed and database queries for better user experience</li>
  <li>🛠 Handling bug fixes and feature requests during development without breaking existing features</li>
  <li>🌍 Ensuring the UI/UX appeals to recruiters and is accessible for all users</li>
</ul>

            </div>

            <div>

                <h1 className='text-3xl font-bold mt-8 mb-4'>Potential improvements and future plans for the project</h1>
              <ul>
  <li>⚡ Implement real-time notifications for comments, votes, and membership updates</li>
  <li>🤝 Add private messaging and group discussions</li>
  <li>🌐 Enable multi-language support for a global audience</li>
  <li>📊 Create an analytics dashboard for tracking user engagement and post performance</li>
  <li>🔒 Add two-factor authentication (2FA) for enhanced security</li>
  <li>🧠 Integrate AI-powered content recommendations</li>
 
</ul>
 

            </div>
        </div>
    );
};

export default Details4;
