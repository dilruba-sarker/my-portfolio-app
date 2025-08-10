import React from "react";

const EducationTable = () => {
  const educationData = [
    {
      degree: "S.S.C",
      institution: "Rajshahi Board",
      result: "5.00",
      year: "2014",
      color: "from-blue-500 to-indigo-500",
    },
    {
      degree: "H.S.C",
      institution: "Rajshahi Board",
      result: "5.00",
      year: "2016",
      color: "from-green-500 to-emerald-500",
    },
    {
      degree: "BBA",
      institution: "Rajshahi University",
      result: "3.38",
      year: "2020",
      color: "from-purple-500 to-pink-500",
    },
    {
      degree: "MBA",
      institution: "Rajshahi University",
      result: "3.65",
      year: "2022",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-10 text-center text-blue-700">
        Educational Qualification
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {educationData.map((item, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${item.color} text-white p-6 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300`}
          >
            <h3 className="text-2xl font-bold mb-2">{item.degree}</h3>
            <p className="text-lg">{item.institution}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                CGPA: {item.result}
              </span>
              <span className="opacity-90">{item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationTable;
