import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaLightbulb,
  FaBrain,
  FaLeaf,
} from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { SiJavascript } from "react-icons/si";

const cardData = [
  {
    icon: <FaLaptopCode />,
    title: "Front-End Training",
    text: `I’ve completed an intensive training program on Front-End Development from Programming Hero, a well-known platform for practical and project-based learning. It was one of the most challenging yet rewarding phases of my journey.`,
    animation: { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  },
  {
    icon: <MdOutlineSchool />,
    title: "Academic Journey",
    text: `I hold a BBA and MBA from Rajshahi University, one of the top universities in Bangladesh, where I developed strong analytical and business skills that now support my career in development.`,
    animation: { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  },
  {
    icon: <SiJavascript />,
    title: "Tech Expertise",
    text: `I specialize in HTML, CSS, Tailwind, JavaScript, React, Node.js, and MongoDB. I love building clean, interactive, and responsive user interfaces.`,
    animation: { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 } },
  },
  {
    icon: <FaLightbulb />,
    title: "Work I Enjoy",
    text: `I enjoy solving challenges, building features, and turning ideas into working apps. I thrive in creative, fast-moving environments.`,
    animation: { initial: { y: 100, opacity: 0 }, animate: { y: 0, opacity: 1 } },
  },
  {
    icon: <FaLeaf />,
    title: "Life Beyond Code",
    text: `Outside of coding, I enjoy nature walks, family time, and reading. I'm always exploring tools and trends to stay sharp.`,
    animation: { initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 } },
  },
  {
    icon: <FaBrain />,
    title: "Who I Am",
    text: `I’m a hard worker, quick learner, and challenge taker. I believe in staying humble, hungry, and open to growth.`,
    animation: { initial: { rotate: -10, opacity: 0 }, animate: { rotate: 0, opacity: 1 } },
  },
];

const AboutMe = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-center text-xl font-medium mb-2 text-blue-600 uppercase tracking-wide">
        About Us
      </h1>

      <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">
        My Journey & Beyond
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={card.animation.initial}
            whileInView={card.animation.animate}
            transition={{ duration: 1., delay: index * 0.4 }}
            viewport={{ once: true }}
            className="bg-blue-100 text-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-3 text-xl font-semibold text-blue-700">
              {card.icon}
              <span className="text-black">{card.title}</span>
            </div>
            <p className="text-base leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
