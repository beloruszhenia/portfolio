
import './index.css';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ scrollBehavior: 'smooth' }}
    >
      <Navbar />
      <main className="w-full">
        <About />
        <Projects />
        <Contact />
      </main>
    </motion.div>
  );
}

export default App;
