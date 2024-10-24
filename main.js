// Инициализация сцены, камеры и рендерера
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Загрузка сцены из JSON файла
const loader = new THREE.ObjectLoader();
loader.load('scene.json', function (loadedScene) {
    scene.add(loadedScene);  // Добавляем загруженную сцену
});

// Позиционирование камеры
camera.position.z = 5;

// Анимация
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Адаптация сцены при изменении размера окна
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
