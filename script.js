// Функціональність для кнопки реєстрації
document.addEventListener('DOMContentLoaded', function () {
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseover', function () {
        ctaButton.style.backgroundColor = '#feb47b';
    });
    ctaButton.addEventListener('mouseout', function () {
        ctaButton.style.backgroundColor = '#ff7e5f';
    });
});
// Функція для реєстрації нового користувача
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Перевірка, чи є користувач вже зареєстрований
    if (localStorage.getItem(email)) {
        alert('This email is already registered.');
    } else {
        // Зберігання даних користувача в LocalStorage
        const user = { username, email, password };
        localStorage.setItem(email, JSON.stringify(user));
        alert('Registration successful!');
        window.location.href = "index.html"; // Перехід на головну сторінку
    }
});

// Функція для входу
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Перевірка даних для входу
    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        alert('Login successful!');
        window.location.href = "index.html"; // Перехід на головну сторінку
    } else {
        alert('Invalid email or password!');
    }
});
