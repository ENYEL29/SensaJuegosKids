const menu = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main');
const searchInput = document.getElementById('search-input');
const searchIcon = document.getElementById('search-icon');

menu.addEventListener('click', () => {
    sidebar.classList.toggle('menu-toggle');
    menu.classList.toggle('menu-toggle');
    main.classList.toggle('menu-toggle');

    // Si el sidebar está abierto, mostrar el input y ocultar el ícono
    if (!sidebar.classList.contains('menu-toggle')) {
        searchInput.style.display = 'none'; // Muestra la barra de búsqueda
        searchIcon.style.display = 'block'; // Oculta el ícono de búsqueda
    } else {
        searchInput.style.display = 'block'; // Oculta la barra de búsqueda
        searchIcon.style.display = 'none'; // Muestra el ícono de búsqueda
    }
});
