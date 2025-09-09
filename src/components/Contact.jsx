import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [useAlternativeMethod, setUseAlternativeMethod] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    // Детальне логування для діагностики
    console.log('Форма відправляється...');
    console.log('Дані форми:', formData);

    try {
      if (useAlternativeMethod) {
        // Альтернативний метод через простий fetch (mailto)
        console.log('Використовується альтернативний метод...');
        
        // Симуляція відправки (відкриття email клієнта)
        const mailtoLink = `mailto:beloruszhenia@gmail.com?subject=Повідомлення з портфоліо від ${formData.name}&body=Ім'я: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AПовідомлення:%0D%0A${formData.message}`;
        window.location.href = mailtoLink;
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
      } else {
        // Основний метод через EmailJS
        console.log('Використовується EmailJS...');
        
        // Ініціалізація EmailJS
        emailjs.init('5t0lIaRsY-t2_VWjv');

        const serviceID = 'service_24d08xn';
        const templateID = 'template_q7zrr0s';

        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Yevgenii',
          reply_to: formData.email
        };

        console.log('Параметри шаблону:', templateParams);

        const result = await emailjs.send(serviceID, templateID, templateParams);
        
        console.log('EmailJS результат:', result);
        
        if (result.status === 200) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
          console.log('Повідомлення успішно відправлено!');
        } else {
          throw new Error(`EmailJS повернув статус: ${result.status}`);
        }
      }
      
    } catch (error) {
      console.error('Детальна помилка:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "beloruszhenia@gmail.com",
      link: "mailto:beloruszhenia@gmail.com"
    },
    {
      icon: "🔗",
      label: "LinkedIn",
      value: "linkedin.com/",
      link: "https://www.linkedin.com/in/євгеній-білорус-0a3b1258"
    },
    {
      icon: "💼",
      label: "GitHub",
      value: "github.com/beloruszhenia",
      link: "https://github.com/beloruszhenia"
    },
    {
      icon: "📱",
      label: "Telegram",
      value: "@yevgenii_dev",
      link: "https://t.me/beloruszheneia"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Зв'яжіться зі мною
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Готовий до співпраці? Напишіть мені, і давайте створимо щось неймовірне разом!
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Контактна інформація</h3>
            
            <div className="grid gap-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-3xl">{contact.icon}</span>
                  <div>
                    <p className="text-gray-400 text-sm">{contact.label}</p>
                    <p className="text-white group-hover:text-green-400 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-400 ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Напишіть мені</h3>
            
            {/* Перемикач методу відправки */}
            <div className="mb-6 p-4 bg-gray-700 bg-opacity-30 rounded-lg">
              <label className="flex items-center gap-3 text-gray-300">
                <input
                  type="checkbox"
                  checked={useAlternativeMethod}
                  onChange={(e) => setUseAlternativeMethod(e.target.checked)}
                  className="w-4 h-4 text-green-600 bg-gray-700 border-gray-600 rounded focus:ring-green-500"
                />
                <span className="text-sm">
                  Використовувати email-клієнт (якщо EmailJS не працює)
                </span>
              </label>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <label className="block text-gray-300 mb-2" htmlFor="name">
                  Ім'я
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300"
                  placeholder="Ваше ім'я"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <label className="block text-gray-300 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <label className="block text-gray-300 mb-2" htmlFor="message">
                  Повідомлення
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300 resize-none"
                  placeholder="Ваше повідомлення..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isLoading
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700'
                } text-white`}
                whileHover={!isLoading ? { scale: 1.02, y: -2 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <motion.div
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Відправляється...
                  </div>
                ) : (
                  'Відправити повідомлення'
                )}
              </motion.button>

              {/* Статуси відправки */}
              {submitStatus === 'success' && (
                <motion.div
                  className="p-4 bg-green-600 bg-opacity-20 border border-green-500 rounded-lg text-green-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ✅ Повідомлення успішно відправлено! Дякую за звернення.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="p-4 bg-red-600 bg-opacity-20 border border-red-500 rounded-lg text-red-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-2">
                    <div>❌ Помилка відправки повідомлення</div>
                    <div className="text-sm">
                      Можливі причини:
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Перевірте інтернет з'єднання</li>
                        <li>Можливо, EmailJS сервіс недоступний</li>
                        <li>Перевірте консоль розробника (F12) для детальної інформації</li>
                      </ul>
                      <div className="mt-2">
                        Або напишіть безпосередньо на:{' '}
                        <a 
                          href="mailto:beloruszhenia@gmail.com"
                          className="text-green-400 hover:underline"
                        >
                          beloruszhenia@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          className="text-center mt-16 pt-8 border-t border-gray-700"
          variants={itemVariants}
        >
          <p className="text-gray-400">
            © 2025 Yevgenii Beloruszhenia. Створено з ❤️ та React
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
