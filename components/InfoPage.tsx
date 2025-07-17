import React from "react";
import { motion } from "framer-motion";

const InfoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-zinc-800 to-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
        >
          Hi! I'm <span className="text-purple-400 font-semibold">Chinbat</span>, a passionate software developer with experience in web development, UI/UX design, and creative projects. I enjoy building modern, responsive, and user-friendly applications using the latest technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="p-6 bg-zinc-900 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all">
            <h3 className="text-xl font-semibold mb-2 text-purple-300">Skills</h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>React / Next.js / TypeScript</li>
              <li>Tailwind CSS / Figma</li>
              <li>Node.js</li>
              <li>Git / GitHub / Agile</li>
              <li>Functional and Non Functional test</li>
              <li>QA engineer experience</li>
            </ul>
          </div>
          <div className="p-6 bg-zinc-900 rounded-xl shadow-lg hover:shadow-pink-500/30 transition-all">
            <h3 className="text-xl font-semibold mb-2 text-pink-300">Projects</h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>KhanBank KIOSK Digital signature</li>
              <li>KhanBank AML (Anti money laundering) </li>
              <li>E-commerce</li>
              <li>KhanBank Alipay</li>
              <li>Etc...</li>
            </ul>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 mt-8"
        >
        <span className="text-purple-400 font-bold">Experience</span> <br />
        I'm a passionate and detail-oriented software professional with a background in full-stack development and two years of hands-on experience in Quality Assurance at Khan Bank. During my time there, I gained in-depth knowledge of various testing methodologies, including manual, automated, functional, and non-functional testing.

        I graduated from Indra Institute as a full-stack developer, where I built a solid foundation in both front-end and back-end technologies. I'm always curious about how things work and dedicated to delivering high-quality, reliable software.

        Outside of tech, I’m a highly active and competitive sports enthusiast. 
        
        <br /> <br /> <span className="text-purple-400 font-bold">Free time</span> <br />
        I enjoy basketball, volleyball, eSports, table tennis, and chess. I hold a 2nd-level basketball certification and a black belt in Taekwondo — I believe discipline and teamwork from sports carry over to everything I do.

        I'm constantly learning, growing, and looking for opportunities to contribute to exciting and meaningful projects.

        </motion.p>
      </div>
    </div>
  );
};

export default InfoPage;
