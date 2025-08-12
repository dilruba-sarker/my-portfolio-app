const skills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Responsive Design",
];

const SkillsGrid = () => {
  return (
    <div className="max-w-xl mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">My Skills Make Me Challenge Taker</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm hover:bg-blue-200 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;
