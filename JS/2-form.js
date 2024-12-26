// 1. Оголошення об'єкта formData з полями email та message
const formData = {
    email: '',
    message: '',
};

// 2. Отримуємо форму та елементи полів
const form = document.querySelector('.feedback-form');
const emailField = form.querySelector('[name="email"]');
const messageField = form.querySelector('[name="message"]');

// 3. Перевірка локального сховища при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (savedFormData) {
        formData.email = savedFormData.email;
        formData.message = savedFormData.message;
        
        emailField.value = formData.email;
        messageField.value = formData.message;
    }
});

// 4. Метод делегування для відстеження змін у формі через подію input
form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    
    // Оновлюємо відповідне поле в formData
    if (name === 'email') {
        formData.email = value.trim();
    } else if (name === 'message') {
        formData.message = value.trim();
    }

    // Зберігаємо актуальні дані в локальне сховище
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// 5. Обробка сабміту форми
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Запобігаємо відправці форми
    
    // Перевіряємо, чи заповнені всі поля
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    // Виводимо дані у консоль
    console.log(formData);

    // Очищаємо локальне сховище, formData та поля форми
    localStorage.removeItem('feedback-form-state');
    form.reset();
    Object.keys(formData).forEach(key => formData[key] = '');
});
