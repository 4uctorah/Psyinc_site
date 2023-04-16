document.addEventListener("DOMContentLoaded", function () {
    // Получаем ссылки меню
    const navLinks = document.querySelectorAll(".nav-link");

    // Добавляем обработчики событий для ссылок меню
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = event.target.dataset.target;
            showSection(targetId);
        });
    });

    // Получаем элементы DOM
    const startChatButton = document.querySelector(".start-chat-btn");

    // Обработчик событий для кнопки "Начать разговор"
    if (startChatButton) {
        startChatButton.addEventListener("click", function (event) {
            event.preventDefault();
            startChat();
        });
    }
});

// Функция для отображения выбранной секции и скрытия остальных
function showSection(targetId) {
    const sections = document.querySelectorAll("section");
    sections.forEach(function (section) {
        if (section.id === targetId) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}

// Функция для запуска чата
function startChat() {
    // Здесь можно добавить код, который будет выполняться при нажатии на кнопку "Начать разговор".
    // Например, перенаправление на страницу чата, открытие модального окна или запрос к серверу.
    alert("Начало разговора");
}

const nextBtns = document.querySelectorAll(".next-btn");
const backBtns = document.querySelectorAll(".back-btn");

nextBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const currentStep = e.target.closest(".course-step");
    const nextStepId = `step-${parseInt(currentStep.id.split("-")[1]) + 1}`;
    const nextStep = document.getElementById(nextStepId);

    if (nextStep) {
      currentStep.style.display = "none";
      nextStep.style.display = "block";
    } else {
      // Если следующего шага нет, значит курс завершен
      alert("Курс завершен!");
    }
  });
});

backBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const currentStep = e.target.closest(".course-step");
    const prevStepId = `step-${parseInt(currentStep.id.split("-")[1]) - 1}`;
    const prevStep = document.getElementById(prevStepId);

    if (prevStep) {
      currentStep.style.display = "none";
      prevStep.style.display = "block";
    }
  });
});
