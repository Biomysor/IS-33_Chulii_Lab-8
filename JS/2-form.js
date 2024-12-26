// Об'єкт для зберігання даних форми
const formData = { email: "", message: "" };

// Ключ для локального сховища
const STORAGE_KEY = "feedback-form-state";

// Отримуємо посилання на форму та її елементи
const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;

// Ініціалізація форми при завантаженні сторінки
function initializeForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    emailInput.value = parsedData.email || "";
    messageTextarea.value = parsedData.message || "";
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
  }
}

// Функція для оновлення локального сховища
function updateLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Відстеження змін у полях форми
form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  formData[name] = value.trim(); // Очищуємо пробіли
  updateLocalStorage();
});
// Обробка події submit
form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    // Перевіряємо, чи заповнені всі поля
    if (!emailInput.value.trim() || !messageTextarea.value.trim()) {
      alert("Fill please all fields");
      return;
    }
  
    // Якщо всі поля заповнені, виводимо об'єкт formData у консоль
    console.log(formData);
  
    // Очищення після сабміту
    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
    form.reset();
  });

// Виклик ініціалізації
initializeForm();

