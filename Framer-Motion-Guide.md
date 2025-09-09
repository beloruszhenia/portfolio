# Framer Motion - Детальний Огляд

Framer Motion - це потужна бібліотека для створення анімацій у React додатках.

## 🚀 Основні Концепції

### 1. **Motion Components**
```javascript
import { motion } from 'framer-motion'

// Замість звичайного div
<div>Content</div>

// Використовуємо motion.div
<motion.div>Animated Content</motion.div>
```

### 2. **Базові Анімації**
```javascript
<motion.div
  initial={{ opacity: 0, y: -50 }}    // Початковий стан
  animate={{ opacity: 1, y: 0 }}      // Кінцевий стан
  transition={{ duration: 0.5 }}      // Налаштування переходу
>
  Content
</motion.div>
```

## 🎯 У Вашому Проєкті

### **App.js:**
```javascript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
```
- Плавна поява всього додатку при завантаженні

### **Navbar.jsx:**
```javascript
<motion.nav
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  whileHover={{ scale: 1.1 }}
>
```
- Навігація "випливає" зверху
- Масштабування при наведенні

## 🔥 Розширені Можливості

### 1. **Gesture Animations**
```javascript
<motion.button
  whileHover={{ scale: 1.1 }}         // При наведенні
  whileTap={{ scale: 0.9 }}           // При натисканні
  whileDrag={{ rotate: 90 }}          // При перетягуванні
/>
```

### 2. **Variants (Варіанти)**
```javascript
const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 }
}

<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
/>
```

### 3. **Stagger Animation (Поетапна анімація)**
```javascript
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1  // Затримка між дочірніми елементами
    }
  }
}
```

### 4. **Scroll-triggered Animations**
```javascript
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}        // Анімація при появі у viewport
  viewport={{ once: true }}           // Тільки один раз
/>
```

### 5. **Layout Animations**
```javascript
<motion.div layout>                   // Автоматична анімація при зміні layout
  Content that changes size
</motion.div>
```

## 🎨 Типи Анімацій

### **Transform Properties:**
- `x, y, z` - позиція
- `scale, scaleX, scaleY` - масштаб
- `rotate, rotateX, rotateY` - обертання
- `skew, skewX, skewY` - нахил

### **Style Properties:**
- `opacity` - прозорість
- `backgroundColor` - колір фону
- `color` - колір тексту
- `width, height` - розміри

### **SVG Properties:**
- `pathLength` - довжина шляху
- `fill, stroke` - заливка та обводка

## ⚙️ Transition Types

### **Spring (Пружина)**
```javascript
transition: {
  type: "spring",
  stiffness: 100,
  damping: 10
}
```

### **Tween (Лінійна)**
```javascript
transition: {
  duration: 0.5,
  ease: "easeOut"
}
```

### **Ease Options:**
- `"linear"` - рівномірно
- `"easeIn"` - прискорення
- `"easeOut"` - сповільнення
- `"easeInOut"` - прискорення + сповільнення
- `[0.17, 0.67, 0.83, 0.67]` - custom cubic-bezier

## 🎭 Практичні Приклади

### **Hover Card:**
```javascript
<motion.div
  className="card"
  whileHover={{
    scale: 1.05,
    boxShadow: "0px 20px 40px rgba(0,0,0,0.3)"
  }}
  transition={{ duration: 0.3 }}
>
```

### **Loading Spinner:**
```javascript
<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: "linear"
  }}
/>
```

### **Modal Animation:**
```javascript
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.8 }}
  transition={{ duration: 0.3 }}
/>
```

### **Page Transition:**
```javascript
<motion.div
  initial={{ x: 300, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: -300, opacity: 0 }}
  transition={{ type: "spring", stiffness: 260, damping: 20 }}
/>
```

### **Bounce Effect:**
```javascript
<motion.div
  animate={{
    y: [0, -20, 0],
  }}
  transition={{
    duration: 0.6,
    repeat: Infinity,
    repeatType: "reverse"
  }}
/>
```

## 🚀 Performance Tips

1. **Віддавайте перевагу transform властивостям** (x, y, scale, rotate)
2. **Використовуйте `will-change: transform`** для важких анімацій
3. **Уникайте анімації layout властивостей** (width, height)
4. **Використовуйте `layout` prop** для автоматичних layout анімацій
5. **Використовуйте `AnimatePresence`** для анімацій появи/зникнення

## 📱 Responsive Animations

```javascript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    duration: window.innerWidth < 768 ? 0.3 : 0.6  // Швидше на мобільних
  }}
/>
```

## 🎪 AnimatePresence

Для анімацій елементів, що додаються/видаляються з DOM:

```javascript
import { AnimatePresence, motion } from 'framer-motion'

<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    />
  )}
</AnimatePresence>
```

## 🎨 Advanced Examples

### **Parallax Scroll Effect:**
```javascript
import { useScroll, useTransform, motion } from 'framer-motion'

const { scrollY } = useScroll()
const y = useTransform(scrollY, [0, 500], [0, -50])

<motion.div style={{ y }}>
  Parallax content
</motion.div>
```

### **Path Drawing Animation:**
```javascript
<motion.svg>
  <motion.path
    d="M10 10 L100 100"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 2 }}
  />
</motion.svg>
```

### **Text Animation:**
```javascript
const sentence = "Hello World"
const words = sentence.split(" ")

<motion.div>
  {words.map((word, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
    >
      {word}{" "}
    </motion.span>
  ))}
</motion.div>
```

## 📚 Корисні Ресурси

- **Офіційна документація:** https://www.framer.com/motion/
- **Examples:** https://codesandbox.io/examples/package/framer-motion
- **Easing Functions:** https://easings.net/

## 🎉 Заключення

Framer Motion дозволяє створювати складні, професійні анімації з мінімальним кодом та чудовою продуктивністю! Це ідеальний інструмент для створення сучасних, інтерактивних React додатків.

**Переваги:**
- ✅ Простий у використанні
- ✅ Відмінна продуктивність
- ✅ Декларативний синтаксис
- ✅ Підтримка TypeScript
- ✅ Активна спільнота

**Недоліки:**
- ❌ Збільшує розмір bundle
- ❌ Може бути надлишковим для простих проєктів

---

*Створено для проєкту Portfolio з ❤️*
