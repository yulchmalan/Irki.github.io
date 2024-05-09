// Отримуємо всі кнопки .button
const buttons = document.querySelectorAll('.button');

// Отримуємо форму .form-wrapper
const form = document.querySelector('.form-wrapper');

// Додаємо обробник події click для кожної кнопки
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Перевіряємо, чи відображена форма
        if (form.style.display === 'block') {
            // Якщо так, ховаємо форму
            form.style.display = 'none';
        } else {
            // Якщо ні, показуємо форму
            form.style.display = 'block';
        }
    });
});
