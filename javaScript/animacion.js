document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.scroll-animation');
  
    const handleScroll = () => {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar los elementos visibles al cargar la página.
  });
  


  //Animacion de fotos

  document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".img-animation");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "show 1s forwards";
          } else {
            entry.target.style.animation = "hide 1s forwards"; // Animación suave al salir
          }
        });
      },
      { threshold: 0.25 } // Se activa cuando el 25% de la imagen entra o sale
    );
  
    images.forEach((img) => {
      observer.observe(img);
    });
  });

  // Animacion de titulos
  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".tracking-in-expand-fwd-bottom");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active"); // Agrega la clase para animar
          }
        });
      },
      { threshold: 0.6 } // Se activa cuando el 30% de la sección es visible
    );
  
    elements.forEach((el) => observer.observe(el));
  });

// Contador

function actualizarContador() {
  const fechaBoda = new Date('2025-08-02T18:00:00'); // Cambia la fecha por la de la boda
  const ahora = new Date();

  const diferencia = fechaBoda - ahora;
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById('dias').textContent = dias;
  document.getElementById('horas').textContent = horas;
  document.getElementById('minutos').textContent = minutos;
  document.getElementById('segundos').textContent = segundos;
}

setInterval(actualizarContador, 1000); // Actualiza el contador cada segundo



document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("miVideo");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play(); // Reproduce el video cuando entra en la vista
      } else {
        video.pause(); // Pausa el video cuando sale de la vista
      }
    });
  }, { threshold: 0.5 }); // 0.5 significa que al menos el 50% del video debe ser visible para activarse

  observer.observe(video);
});


// Audio

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('playButton').addEventListener('click', function() {
      var audio = document.getElementById('audioElement');
      audio.play();
  });
});


// animacion de carga
window.addEventListener("load", function () {
  document.querySelector(".left").style.transform = "translateX(-100%)";
  document.querySelector(".right").style.transform = "translateX(100%)";

  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  }, 2000); // Espera a que termine la animación
});


/*const invitados = [
  { nombre: "Pablo", lugares: 2 },
  { nombre: "Ana", lugares: 3 },
  { nombre: "Juan", lugares: 1 }
];
const invitados = [
  { codigo: "abc123", nombre: "Pablo", lugares: 2 },
  { codigo: "xyz789", nombre: "Ana", lugares: 3 },
  { codigo: "lmn456", nombre: "Juan", lugares: 1 }
];*/


/*invitados.forEach(inv => {
  const enlace = `https://bodamargaritayroberto.netlify.app/?nombre=${encodeURIComponent(inv.nombre)}&lugares=${inv.lugares}`; 

  console.log(enlace);
})*/


document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const nombre = params.get("nombre") || "invitado";
    const lugares = parseInt(params.get("lugares")) || 1;

    document.getElementById("mensaje").innerText = 
        `Hola, ${nombre}. Tienes ${lugares} lugar(es) reservado(s).`;

        // Asignar el valor al input oculto
    document.getElementById("lugaresReservados").value = lugares;

    const opcionesAsistencia = document.getElementById("opcionesAsistencia");

    // Opción para confirmar asistencia con todos los lugares asignados
    const labelTodos = document.createElement("label");
    labelTodos.classList.add("main__form-box-label");
    labelTodos.innerHTML = `
        <input class="main__form-box-label-radio" type="radio" name="asistencia" value="Todos asistirán" required>
        Asistiremos todos (${lugares} persona(s))
    `;
    opcionesAsistencia.appendChild(labelTodos);

    // Si tiene más de 1 lugar, dar opción de asistir con menos
    if (lugares > 1) {
        for (let i = 1; i < lugares; i++) {
            const labelParcial = document.createElement("label");
            labelParcial.classList.add("main__form-box-label");
            labelParcial.innerHTML = `
                <input class="main__form-box-label-radio" type="radio" name="asistencia" value="${i} persona(s) asistirán">
                Solo asistiremos ${i} persona(s)
            `;
            opcionesAsistencia.appendChild(labelParcial);
        }
    }

    // Opción para no asistir
    const labelNo = document.createElement("label");
    labelNo.classList.add("main__form-box-label");
    labelNo.innerHTML = `
        <input class="main__form-box-label-radio" type="radio" name="asistencia" value="No asistiremos">
        No podremos asistir
    `;
    opcionesAsistencia.appendChild(labelNo);
});

