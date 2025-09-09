import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("#about");

  // Винесення повторюваних стилів в константи
  const baseLinkClassName = "text-lg font-medium transition-colors duration-300 relative group";
  const spanClassName = "absolute bottom-0 left-0 w-full h-0.5 bg-purple-300 origin-center transition-transform duration-300";
  
  const navItems = [
    { href: "#about", text: "Про мене" },
    { href: "#projects", text: "Проєкти" },
    { href: "#contact", text: "Контакти" }
  ];

  // Функція для відстеження скролу та визначення активної секції
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Зміщення для кращого визначення

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Виклик при завантаженні

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="w-full bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white p-6 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto flex justify-center space-x-8">
        {navItems.map((item, index) => {
          const isActive = activeLink === item.href;
          const linkClassName = `${baseLinkClassName} ${
            isActive ? 'text-purple-300' : 'hover:text-purple-300'
          }`;
          
          // Плавна анімація для кожного посилання окремо
          const linkAnimation = {
            whileHover: { scale: 1.1, y: -2 },
            whileTap: { scale: 0.95 },
            animate: isActive 
              ? { 
                  scale: 1.05, 
                  y: -1,
                  transition: { 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }
                } 
              : { 
                  scale: 1, 
                  y: 0,
                  transition: { 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }
                }
          };
          
          return (
            <motion.a
              key={index}
              href={item.href}
              className={linkClassName}
              onClick={() => setActiveLink(item.href)}
              {...linkAnimation}
            >
              {item.text}
              <motion.span 
                className={spanClassName}
                animate={{
                  scaleX: isActive ? 1 : 0,
                }}
                whileHover={!isActive ? { scaleX: 1 } : {}}
                transition={{ 
                  duration: 0.3, 
                  ease: "easeInOut" 
                }}
              ></motion.span>
            </motion.a>
          );
        })}
      </div>
    </motion.nav>
  );
}