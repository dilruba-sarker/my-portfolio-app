// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

// const ContactMe = () => {
//   const [formData, setFormData] = useState({ email: "", message: "" });
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.message) {
//       setStatus("❗ Please fill in both fields.");
//       return;
//     }

//     const serviceID = "service_6vcsd9s";
//     const templateID = "template_c28lhau";
//     const userID = "2zV2EqniGC4wZY_xQ";

//     const templateParams = {
//       from_email: formData.email,
//       message: formData.message,
//       reply_to: formData.email, // Allows you to reply directly
//     };

//     emailjs.send(serviceID, templateID, templateParams, userID).then(
//       (response) => {
//         setStatus("✅ Message sent successfully!");
//         setFormData({ email: "", message: "" });
//       },
//       (error) => {
//         console.error("EmailJS error:", error);
//         setStatus("❌ Failed to send message. Try again later.");
//       }
//     );
//   };

//   return (
//     <div>
//        <div className="text-center"><h1 className="text-2xl font-bold">My Contract Details</h1></div>
      
//       <div className="max-w-4xl mx-auto p-4 mt-10 border rounded-lg flex flex-col md:flex-row gap-6">
     
//       {/* Left contact info */}
//       <div className="flex-1 bg-green-50 p-6 rounded-lg border border-green-300">
//         <h2 className="text-xl font-bold mb-4  dark:text-white">Contact Information</h2>
//         <p><strong>Email:</strong> dilrubasarkerseo@gmail.com</p>
//         <p><strong>Phone:</strong> +8801708373229</p>
//         <p><strong>WhatsApp:</strong> +8801708373229 </p>
//       </div>

//       {/* Right contact form */}
//       <form
//         onSubmit={sendEmail}
//         className="flex-1 bg-green-50 p-6 rounded-lg border border-green-300 flex flex-col gap-4"
//       >
//         <input
//           type="email"
//           name="email"
//           placeholder="Your email"
//           className="rounded border border-gray-300 p-2"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Your message"
//           className="rounded border border-gray-300 p-2 h-32"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />
//         <button
//           type="submit"
//           className="bg-green-700 text-white font-bold py-2 rounded hover:bg-green-800"
//         >
//           Send Email
//         </button>
//         {status && <p className="text-sm text-gray-700 mt-2">{status}</p>}
//       </form>
//     </div></div>
//   );
// };

// export default ContactMe;
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      setStatus("❗ Please fill in both fields.");
      return;
    }

    const serviceID = "service_6vcsd9s";
    const templateID = "template_c28lhau";
    const userID = "2zV2EqniGC4wZY_xQ";

    const templateParams = {
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email, // Allows you to reply directly
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        setStatus("✅ Message sent successfully!");
        setFormData({ email: "", message: "" });
      },
      (error) => {
        console.error("EmailJS error:", error);
        setStatus("❌ Failed to send message. Try again later.");
      }
    );
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl font-bold dark:text-green-500">My Contract Details</h1>
      </div>

      <div className="max-w-4xl mx-auto p-4 mt-10 border rounded-lg flex flex-col md:flex-row gap-6 dark:bg-gray-900 dark:border-gray-700">
        {/* Left contact info */}
        <div className="flex-1  p-6 rounded-lg border border-green-300 dark:bg-gray-800 dark:border-green-700">
          <h2 className="text-xl font-bold mb-4 dark:text-green-500">Contact Information</h2>
          <p className="dark:text-blue-400"><strong>Email:</strong> dilrubasarkerseo@gmail.com</p>
          <p className="dark:text-green-400"><strong>Phone:</strong> +8801708373229</p>
          <p className="dark:text-green-400"><strong>WhatsApp:</strong> +8801708373229 </p>
        </div>

        {/* Right contact form */}
        <form
          onSubmit={sendEmail}
          className="flex-1  p-6 rounded-lg border border-green-300 flex flex-col gap-4 dark:bg-gray-800 dark:border-green-700"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="rounded border border-gray-300 p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-green-400"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            className="rounded border border-gray-300 p-2 h-32 dark:bg-gray-700 dark:border-gray-600 dark:text-green-400"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-green-700 text-white font-bold py-2 rounded hover:bg-green-800"
          >
            Send Email
          </button>
          {status && (
            <p className="text-sm text-red-600 mt-2">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
