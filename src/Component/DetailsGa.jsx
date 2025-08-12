// import React from 'react';

const DetailsGa = () => {
    return (
        <div className="p-6 space-y-6 max-w-4xl mx-auto ">
            <h1 className="text-3xl font-bold text-green-700">🌱 GreenCircle - Gardening Community & Resource Hub</h1>
            <p>
                A vibrant and inclusive platform for gardening lovers to share knowledge, ask plant care questions, connect with local enthusiasts, and join green events. Whether you're into composting, hydroponics, or just sprucing up your balcony garden — GreenCircle is your digital gardening home.
            </p>

            {/* Live Site */}
            <h2 className="text-2xl font-semibold text-green-600">🔗 Live Site</h2>
            <a
                href="https:/my-10-assignment-b-11.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
            >
                🌐 Visit GreenCircle
            </a>

            {/* GitHub */}
            <h2 className="text-2xl font-semibold text-green-600">🔗 GitHub repository</h2>
            <a
                href="https://github.com/dilruba-sarker/gardening-tips-client"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
            >
                🌐 Visit GitHub
            </a>

            <hr />
     {/* Project Description */}
            <h2 className="text-2xl font-semibold text-green-600">📖 Project Description</h2>
            <p>
                GreenCircle is built to foster a tight-knit gardening community both online and offline. The platform empowers users to connect based on gardening interests, participate in local events, and share valuable tips that help others grow — literally and figuratively.
            </p>
            <p>
                From seasoned horticulturists to first-time plant parents, everyone is welcome. It’s more than a forum; it’s a living garden of shared knowledge and experiences.
            </p>

            <hr />

        

            {/* Key Features */}
            <h2 className="text-2xl font-semibold text-green-600">🌟 Key Features</h2>
            <ul className="list-disc pl-6 space-y-1">
                <li>🧑‍🌾 <strong>Community Tips & Posts</strong> – Share gardening tips, tricks, and inspiration with other members.</li>
                <li>📍 <strong>Find Local Gardeners</strong> – Connect with nearby gardeners for advice, trades, or collaborations.</li>
                <li>❓ <strong>Plant Care</strong> – Ask and answer plant care questions to help each other thrive.</li>
                <li>📅 <strong>Events & Meetups</strong> – Post or join gardening-related events like workshops and plant swaps.</li>
                <li>🧪 <strong>Topic-Based Categories</strong> – Join focused discussions on composting, hydroponics, balcony gardening, and more.</li>
            </ul>

            <hr />

            {/* Challenges Faced */}
            <h2 className="text-2xl font-semibold text-green-600">⚠ Challenges Faced</h2>
            <ul className="list-disc pl-6 space-y-1">
                <li>🌐 Implementing accurate location-based gardener search with privacy protection</li>
                <li>📅 Coordinating real-time event updates without performance issues</li>
                <li>🔄 Managing scalable database queries for posts, events, and categories</li>
                <li>📱 Ensuring consistent mobile responsiveness across devices</li>
                <li>🛡️ Securing user data and preventing spam or harmful content</li>
            </ul>

            <hr />

            {/* Improvements & Future Plans */}
            <h2 className="text-2xl font-semibold text-green-600">🚀 Potential Improvements & Future Plans</h2>
            <ul className="list-disc pl-6 space-y-1">
                <li>📢 Add push notifications for new events, replies, and messages</li>
                <li>🌐 Introduce multi-language support for international gardeners</li>
                <li>🤝 Enable group gardening projects and community challenges</li>
                <li>📊 Provide gardening analytics and seasonal planting suggestions</li>
                <li>📱 Launch a dedicated mobile app for easier on-the-go access</li>
            </ul>

            <hr />

       
            <hr />

            {/* GitHub Commit Guidelines */}
            <h2 className="text-2xl font-semibold text-green-600">📁 GitHub Commit Guidelines</h2>

            <h3 className="text-xl font-semibold text-green-500">🖥️ Client-side</h3>
            <ul className="list-disc pl-6 space-y-1">
                <li>Minimum: <strong>15 meaningful commits</strong></li>
                <li>Examples:
                    <ul className="list-disc pl-6">
                        <li><code>feat: add community post form with validation</code></li>
                        <li><code>fix: responsive layout issues on mobile nav</code></li>
                        <li><code>chore: cleanup unused CSS classes</code></li>
                    </ul>
                </li>
            </ul>

            <h3 className="text-xl font-semibold text-green-500">🔧 Server-side</h3>
            <ul className="list-disc pl-6 space-y-1">
                <li>Minimum: <strong>15 meaningful commits</strong></li>
                <li>Examples:
                    <ul className="list-disc pl-6">
                        <li><code>feat: implement REST API for event listings</code></li>
                        <li><code>fix: improve query performance for nearby users</code></li>
                        <li><code>refactor: separate routes and controllers</code></li>
                    </ul>
                </li>
            </ul>

            <hr />

            {/* Tech Stack */}
            <h2 className="text-2xl font-semibold text-green-600">🛠️ Tech Stack</h2>
            <ul className="list-disc pl-6 space-y-1">
                <li>React.js + Tailwind CSS (Frontend)</li>
                <li>Node.js + Express.js (Backend)</li>
                <li>MongoDB (Database)</li>
                <li>Firebase Hosting</li>
                <li>EmailJS (Contact Form)</li>
            </ul>

            <p className="text-green-700 text-xl">🌻 Happy Gardening!</p>
        </div>
    );
};

export default DetailsGa;
