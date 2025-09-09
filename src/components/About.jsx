import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-8 py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Привіт 👋 Я Yevgenii
        </motion.h1>
        
        <motion.p
          className="text-2xl md:text-3xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Junior FullStack Developer
        </motion.p>
        
        <motion.div
          className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="mb-4">
            Пристрасний розробник, який створює сучасні веб-додатки з використанням найновіших технологій.
          </p>
          <p>
            Спеціалізуюсь на React, Node.js та створенні інтуїтивних користувацьких інтерфейсів.
          </p>
        </motion.div>
        
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.a
            href="#projects"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Переглянути проєкти
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}