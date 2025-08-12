import React from "react";
import Marquee from "react-fast-marquee";

const EducationTable = () => {
  const educationData = [
    {
      degree: "S.S.C",
      institution: "Rajshahi Board",
      result: "5.00",
      year: "2014",
      lightColor: "from-blue-500 to-indigo-500",
      darkColor: "dark:from-blue-300 dark:to-indigo-400",
    },
    {
      degree: "H.S.C",
      institution: "Rajshahi Board",
      result: "5.00",
      year: "2016",
      lightColor: "from-blue-500 to-indigo-500",
      darkColor: "dark:from-blue-300 dark:to-indigo-400",
    },
    {
      degree: "BBA",
      institution: "Rajshahi University",
      result: "3.38",
      year: "2020",
      lightColor: "from-blue-500 to-indigo-500",
      darkColor: "dark:from-blue-300 dark:to-indigo-400",
    },
    {
      degree: "MBA",
      institution: "Rajshahi University",
      result: "3.65",
      year: "2022",
 lightColor: "from-blue-500 to-indigo-500",
      darkColor: "dark:from-blue-300 dark:to-indigo-400",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4  mb-8">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-700 dark:text-blue-300">
        Educational Qualification
      </h2>

      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={true}
        className="space-x-6"
      >
        {educationData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 bg-white dark:bg-gray-800 rounded-3xl p-6 mb-8 shadow-lg mx-4 min-w-[250px]"
          >
            {/* Gradient circle */}
            <div
              className={`w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r ${item.lightColor} ${item.darkColor} text-white font-bold text-xl shadow-md`}
            >
              {item.year}
            </div>

            {/* Testimonial text */}
            <div className="text-center">
              <p className="italic text-gray-600 dark:text-gray-300 mb-2">
                "{item.degree} at {item.institution} with CGPA {item.result}."
              </p>
              <p className="font-semibold text-gray-800 dark:text-white">
                — {item.degree}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default EducationTable;
