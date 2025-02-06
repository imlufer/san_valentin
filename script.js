function showMessage(answer) {
    const message = document.getElementById('message');
    const card = document.getElementById('card');
    const whatsappBtn = document.getElementById('whatsapp-btn');
    
    // Reseteamos la altura del contenedor antes de actualizar el contenido
    card.style.height = 'auto'; // Esto permite que el contenedor se ajuste al nuevo contenido

    // Cambiar el mensaje y la visibilidad del botón de WhatsApp
    if (answer === 'yes') {
        message.innerHTML = "¡Gracias por aceptar mi invitación! Haré que ese día sea único e inolvidable. Recuerda siempre que me haces el hombre más feliz del mundo! 💕 Confírmame por WhatsApp. Te amo💕";
        whatsappBtn.href = "https://wa.me/+51991835173?text=Confirmo%20mi%20asistencia";
        whatsappBtn.style.display = "inline-block";
    } else {
        message.innerHTML = "Por favor, piénsalo bien. 💔";
        whatsappBtn.style.display = "none";
    }
    
    // Esperamos un poco para asegurar que el contenido se haya actualizado antes de ajustar la altura
    message.classList.add('show');
    setTimeout(() => {
        // Ajustamos la altura del contenedor según el nuevo contenido
        card.style.height = card.scrollHeight + 'px';
    }, 100);
}


window.addEventListener('load', function () {
    var audio = document.getElementById('audioPlayer');
    
    // Esperamos a que el audio esté listo para reproducirse
    audio.addEventListener('canplaythrough', function() {
      audio.play().catch(function(error) {
        console.log("Error en la reproducción automática: ", error);
      });
    });

    // Intentamos reproducirlo de inmediato en caso de que 'canplaythrough' no se dispare
    if (audio.paused) {
      audio.play().catch(function(error) {
        console.log("Error en la reproducción automática: ", error);
      });
    }
  });