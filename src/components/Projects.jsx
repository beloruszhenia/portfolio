import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    { 
      name: "✅ ToDo App", 
      link: "https://github.com/beloruszhenia/todo-react-redux-client",
      description: "Додаток для управління завданнями з можливістю додавання, редагування та видалення завдань.",
      tech: ["React", "TypeScript", "CSS"],
      demo: "https://todo-react-redux-client.vercel.app/"
    },
    { 
      name: "🛒 Shop App", 
      link: "https://github.com/beloruszhenia/shop-app",
      description: "Інтернет-магазин з корзиною покупок, фільтрацією товарів та системою оплати.",
      tech: ["React", "Node.js", "MongoDB"],
      demo: "https://shop-demo.example.com"
    },
    { 
      name: "🌐 Portfolio Website", 
      link: "https://github.com/beloruszhenia/portfolio",
      description: "Особисте портфоліо з сучасним дизайном, анімаціями та адаптивним інтерфейсом.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      demo: "https://beloruszhenia.github.io/portfolio"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          variants={cardVariants}
        >
          Мої проєкти
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto"
          variants={cardVariants}
        >
          Ось деякі з моїх останніх робіт, які демонструють мої навички та досвід
        </motion.p>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 group"
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.h3 
                className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {project.name}
              </motion.h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-purple-600 bg-opacity-30 text-purple-300 rounded-full text-sm font-medium border border-purple-500 border-opacity-30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
                
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border-2 border-purple-500 text-purple-300 py-2 px-4 rounded-lg font-semibold text-center hover:bg-purple-500 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          variants={cardVariants}
        >
          <motion.a
            href="https://github.com/beloruszhenia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 bg-opacity-50 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold border border-gray-600 hover:border-purple-500 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Переглянути всі проєкти</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}