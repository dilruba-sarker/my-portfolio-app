import React from 'react';

const Details2 = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10 mt-20">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Welcome to the Marigold Bill Management Website
            </h1>
            <p className="text-lg mb-6 text-center">
                A user-friendly platform for managing and paying utility bills online.
            </p>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">🌐 Live URL</h2>
                <a
                    href="https://my-a-9b-11-project.web.app/"
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
                    This website is built to streamline the bill payment process. Users can view and pay
                    their utility bills (electricity, gas, water, internet, etc.) directly from their account
                    balance. It’s designed to be simple, responsive, and efficient for end-users.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">🚀 Key Features</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>✅ View a list of utility bills (electricity, gas, water, internet, etc.)</li>
                    <li>💰 Pay bills using available balance</li>
                    <li>📊 See payment status and transaction history</li>
                    <li>👤 User-friendly dashboard</li>
                    <li>⚙️ Responsive design for all devices</li>
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">📦 NPM Packages Used</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>React</strong> – Front-end library for building the UI</li>
                    <li><strong>React Router</strong> – Routing between pages</li>
                    <li><strong>Tailwind CSS</strong> – Utility-first CSS framework for styling</li>
                    <li><strong>DaisyUI</strong> – Tailwind component library for UI elements</li>
                    <li><strong>Fetch</strong> – For handling API requests</li>
                    <li><strong>React Icons</strong> – For scalable vector icons</li>
                    <li><strong>env.local</strong> – To manage environment variables</li>
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">📁 Assignment Details</h2>
                <p><strong>Assignment Category:</strong> Assignment-09_category_Marigold</p>
                <p><strong>Video Reference:</strong> B11_Assignment_09_Marigold_DEMO.mp4</p>
                <p><strong>Update Notes:</strong> All the updates for this assignment will be declared in the update section of the project.</p>
            </div>
        </div>
    );
};

export default Details2;
