// Tema Değiştirme
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Simülasyon Başlatma ve Sıfırlama
const startButton = document.getElementById('start-simulation');
const resetButton = document.getElementById('reset-simulation');
const simulationImage = document.getElementById('simulation-image');

// Simülasyon Başlatma
startButton.addEventListener('click', () => {
    simulationImage.src = 'images/simulation_running.png'; // Simülasyon başladığında görsel değişir
    simulationImage.alt = 'Simülasyon Çalışıyor'; // Alternatif metin güncellenir
});

// Simülasyonu Sıfırlama
resetButton.addEventListener('click', () => {
    simulationImage.src = 'images/placeholder.png'; // Simülasyon sıfırlanır ve görsel eski haline döner
    simulationImage.alt = 'Simülasyon Durdu'; // Alternatif metin sıfırlanır
});

// Hız Ayarı
const speedControl = document.getElementById('speed-control');
const speedValue = document.getElementById('speed-value');

// Hız kaydırıcısı değiştiğinde değer güncellenir
speedControl.addEventListener('input', () => {
    speedValue.textContent = speedControl.value; // Kaydırıcıdaki değer label'da güncellenir
});
