const formData = { email: "", message: "" };


const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;


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

function updateLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  formData[name] = value.trim(); 
  updateLocalStorage();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
  
 
    if (!emailInput.value.trim() || !messageTextarea.value.trim()) {
      alert("Fill please all fields");
      return;
    }
  

    console.log(formData);
  
   
    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
    form.reset();
  });


initializeForm();

