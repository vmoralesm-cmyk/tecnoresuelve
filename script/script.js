document.addEventListener('DOMContentLoaded', () => {

    // Datos de ejemplo para Noticias y Calendario
    const noticias = [
        { titulo: 'Apertura del nuevo laboratorio de ciencias', fecha: '25 de Abril, 2025', resumen: 'Con gran entusiasmo, anunciamos la inauguración de nuestro laboratorio...', contenido: 'Texto completo de la noticia sobre el laboratorio... Esto incluye detalles sobre el equipo, el propósito del laboratorio y cómo beneficiará a los estudiantes y docentes. El laboratorio está diseñado para fomentar la investigación y el aprendizaje práctico en todas las áreas de la ciencia.' },
        { titulo: 'Taller de programación para principiantes', fecha: '20 de Abril, 2025', resumen: 'Se invita a todos los estudiantes a participar en el taller de introducción a la programación...', contenido: 'Texto completo del taller de programación... El taller cubrirá los fundamentos de lenguajes como Python y JavaScript, y se enfocará en proyectos sencillos para que los estudiantes puedan aplicar lo aprendido de inmediato. No se requiere experiencia previa.' },
        { titulo: 'Celebración del Día del Libro', fecha: '23 de Abril, 2025', resumen: 'Celebramos el Día del Libro con una feria de libros y cuentacuentos...', contenido: 'Texto completo sobre la celebración del Día del Libro... El evento incluyó la participación de autores locales, intercambio de libros y actividades de lectura para todas las edades. Fue una jornada dedicada a promover el amor por la literatura.' }
    ];

    const eventos = [
        { nombre: 'Feria de Ciencias Anual', fecha: '28 de Mayo, 2025', lugar: 'Gimnasio del Colegio' },
        { nombre: 'Reunión de Padres y Maestros', fecha: '10 de Junio, 2025', lugar: 'Salón de Actos' },
        { nombre: 'Graduación de 5to de Bachillerato', fecha: '15 de Diciembre, 2025', lugar: 'Teatro Municipal' },
        { nombre: 'Vacaciones de Mitad de Año', fecha: '01 de Julio, 2025', lugar: 'No Aplica' }
    ];

    // Funciones para cargar contenido dinámico
    function cargarNoticias(containerId, isFull) {
        const container = document.getElementById(containerId);
        if (!container) return;

        noticias.forEach(noticia => {
            const article = document.createElement('article');
            article.className = 'card noticia-card';
            article.innerHTML = `
                <h3>${noticia.titulo}</h3>
                <p class="fecha">${noticia.fecha}</p>
                <p>${isFull ? noticia.contenido : noticia.resumen}</p>
                ${!isFull ? `<a href="noticias.html" class="btn">Leer más</a>` : ''}
            `;
            container.appendChild(article);
        });
    }

    function cargarEventos(containerId, isFull) {
        const container = document.getElementById(containerId);
        if (!container) return;

        if (isFull) {
            eventos.forEach(evento => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <strong>${evento.nombre}</strong> <br>
                    Fecha: ${evento.fecha} <br>
                    Lugar: ${evento.lugar}
                `;
                container.appendChild(li);
            });
        } else {
            // Cargar solo los 2 primeros eventos en la página de inicio
            eventos.slice(0, 2).forEach(evento => {
                const eventCard = document.createElement('div');
                eventCard.className = 'card evento-card';
                eventCard.innerHTML = `
                    <h4>${evento.nombre}</h4>
                    <p>📅 ${evento.fecha}</p>
                    <p>📍 ${evento.lugar}</p>
                `;
                container.appendChild(eventCard);
            });
        }
    }

    // Lógica para cargar contenido en la página correcta
    if (document.getElementById('noticias-container')) {
        cargarNoticias('noticias-container', false); // Cargar noticias resumidas en index.html
    }
    if (document.getElementById('noticias-container-full')) {
        cargarNoticias('noticias-container-full', true); // Cargar noticias completas en noticias.html
    }
    if (document.getElementById('calendario-container')) {
        cargarEventos('calendario-container', false); // Cargar eventos resumidos en index.html
    }
    if (document.getElementById('calendario-lista')) {
        cargarEventos('calendario-lista', true); // Cargar lista completa en calendario.html
    }
});
