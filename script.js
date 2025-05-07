// script.js

// Navegación entre secciones
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        // Remover clase activa de todas las secciones
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));

        // Agregar clase activa al item seleccionado
        item.classList.add('active');

        // Mostrar la sección correspondiente
        const sectionId = item.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active');
    });
});

// Expansión de tarjetas
document.querySelectorAll('.tool-card .tool-header').forEach(header => {
    header.addEventListener('click', () => {
        const card = header.closest('.tool-card');
        card.classList.toggle('expanded');
    });
});

// Tabs dentro de ejemplos
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const tabContainer = tab.closest('.tab-container');
        const tabContentId = tab.getAttribute('data-tab');

        // Quitar activo de todos los tabs
        tabContainer.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

        // Ocultar todos los contenidos
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Activar el tab y mostrar el contenido correspondiente
        tab.classList.add('active');
        document.getElementById(tabContentId).classList.add('active');
    });
});

// Ejemplo de botón "Ver ejemplo"
document.querySelectorAll('.toggle-example').forEach(button => {
    button.addEventListener('click', () => {
        const exampleContainer = button.closest('.tool-card').querySelector('.example-container');
        exampleContainer.style.display = exampleContainer.style.display === 'none' ? 'block' : 'none';
    });
});

// Quizzes dinámicos
document.querySelectorAll('.quiz-button').forEach(button => {
    button.addEventListener('click', () => {
        const quizQuestion = button.closest('.quiz-question');
        const options = quizQuestion.querySelectorAll('.quiz-option');
        const feedback = quizQuestion.querySelector('.quiz-feedback');

        let selectedOption = null;

        // Limpiar clases previas
        options.forEach(option => {
            option.classList.remove('selected', 'incorrect');
        });

        // Buscar la opción seleccionada
        options.forEach(option => {
            if (option.classList.contains('selected')) {
                selectedOption = option;
            }
        });

        if (!selectedOption) {
            feedback.textContent = 'Por favor, selecciona una opción antes de continuar.';
            feedback.className = 'quiz-feedback incorrect';
            feedback.style.display = 'block';
            return;
        }

        const isCorrect = selectedOption.getAttribute('data-correct') === 'true';

        if (isCorrect) {
            selectedOption.classList.add('selected');
            feedback.textContent = '¡Correcto!';
            feedback.className = 'quiz-feedback correct';
        } else {
            selectedOption.classList.add('incorrect');
            feedback.textContent = 'Incorrecto. Inténtalo de nuevo.';
            feedback.className = 'quiz-feedback incorrect';
        }

        feedback.style.display = 'block';
    });
});

// Permitir selección de opciones en quizzes
document.querySelectorAll('.quiz-option').forEach(option => {
    option.addEventListener('click', () => {
        const quizQuestion = option.closest('.quiz-question');
        quizQuestion.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected', 'incorrect'));
        option.classList.add('selected');
    });
});