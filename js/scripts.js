const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const toggleColors = document.getElementById('toggle-colors');

const rootStyles = document.documentElement.style;

toggleTheme.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
    if (toggleIcon.src.includes('moon.svg')){
        toggleIcon.src='assets/icons/sun.svg'
        toggleText.textContent='Light Mode'
    }else {
        toggleIcon.src='assets/icons/moon.svg'
        toggleText.textContent='Dark Mode'
    }
})

toggleColors.addEventListener('click',(e)=>{
    rootStyles.setProperty('--primary-color', e.target.dataset.color);
})


function esDispositivoMovil() {
    return window.innerWidth <= 768; // Cambia el valor según tu definición de "móvil"
  }
  
  function cambiarImagenSegunDispositivo() {
    const contenedor = document.querySelector('.experience');
    const imagenDesktop = document.querySelector('.desktop-image');
    const imagenMovil = document.querySelector('.mobile-image');
  
    if (esDispositivoMovil()) {
      imagenDesktop.style.display = 'none';
      imagenMovil.style.display = 'block';
    } else {
      imagenDesktop.style.display = 'block';
      imagenMovil.style.display = 'none';
    }
  }
  
  // Llama a la función para cambiar la imagen inicialmente
  cambiarImagenSegunDispositivo();
  
  // Agrega un evento para cambiar la imagen cuando el tamaño de la ventana cambia
  window.addEventListener('resize', cambiarImagenSegunDispositivo);
  