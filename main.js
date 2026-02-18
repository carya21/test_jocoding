function generateNumbers() {
    const numbersContainer = document.getElementById('numbers-container');
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    for (const number of numbers) {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = number;
        numbersContainer.appendChild(numberDiv);
    }
}

function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateToggleButton(isDarkMode);
}

function updateToggleButton(isDarkMode) {
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
    
    if (isDarkMode) {
        themeIcon.textContent = '☀️';
        themeText.textContent = '라이트 모드';
    } else {
        themeIcon.textContent = '🌙';
        themeText.textContent = '다크 모드';
    }
}

// 초기 설정 로드
window.onload = () => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
    }
    updateToggleButton(savedDarkMode);
};
