# Налаштування EmailJS для Contact Form

## 📧 Покрокова інструкція:

### 1. **Створення акаунту EmailJS**
- Перейдіть на https://www.emailjs.com/
- Зареєструйтеся безкоштовно
- Підтвердіть email

### 2. **Налаштування Email Service**
- У панелі EmailJS перейдіть до "Email Services"
- Натисніть "Add New Service"
- Виберіть ваш email провайдер (Gmail, Outlook, Yahoo, etc.)
- Введіть дані для автентифікації
- Запам'ятайте **Service ID**

### 3. **Створення Email Template**
- Перейдіть до "Email Templates"
- Натисніть "Create New Template"
- Налаштуйте шаблон листа:

```html
Нове повідомлення з портфоліо

Ім'я: {{from_name}}
Email: {{from_email}}

Повідомлення:
{{message}}

---
Відправлено через портфоліо сайт
```

- Збережіть та запам'ятайте **Template ID**

### 4. **Отримання Public Key**
- Перейдіть до "Account" > "General"
- Знайдіть **Public Key**

### 5. **Оновлення коду**
У файлі `Contact.jsx` замініть:

```javascript
const serviceID = 'YOUR_SERVICE_ID';     // Service ID з п.2
const templateID = 'YOUR_TEMPLATE_ID';   // Template ID з п.3
const publicKey = 'YOUR_PUBLIC_KEY';     // Public Key з п.4
```

### 6. **Тестування**
- Запустіть проєкт: `npm start`
- Заповніть форму
- Перевірте email

## 🔧 Альтернативні способи:

### **1. Formspree (простіший)**
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  if (response.ok) {
    setSubmitStatus('success');
  } else {
    setSubmitStatus('error');
  }
};
```

### **2. Netlify Forms**
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- Ваші поля форми -->
</form>
```

### **3. Web3Forms**
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('access_key', 'YOUR_ACCESS_KEY');
  formData.append('name', formData.name);
  formData.append('email', formData.email);
  formData.append('message', formData.message);

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData
  });
};
```

## 🎯 Рекомендації:

### **EmailJS** - найкращий для:
- ✅ Повний контроль над email шаблонами
- ✅ Безкоштовно до 200 листів/місяць
- ✅ Не потребує backend

### **Formspree** - найкращий для:
- ✅ Максимальна простота
- ✅ Швидке налаштування
- ✅ Хороша безкоштовна версія

### **Netlify Forms** - для сайтів на Netlify:
- ✅ Автоматична обробка
- ✅ Спам-захист
- ✅ Інтеграція з Netlify

---

**Поточний статус:** EmailJS встановлено, потрібно лише додати ваші ключі! 🚀
