// تغيير لون النص عند تحريك الماوس فوقه
const greetingText = document.getElementById('greeting');

greetingText.addEventListener('mouseover', () => {
    greetingText.style.color = 'red';
});

greetingText.addEventListener('mouseout', () => {
    greetingText.style.color = '#333';
});
