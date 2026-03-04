document.addEventListener('DOMContentLoaded', function() {
    // Modal
    const modal = document.getElementById('modal');
    const btnModal = document.getElementById('btn-modal');
    const closeModal = document.getElementById('close-modal');
  
    // Abre o modal
    btnModal.addEventListener('click', function() {
      modal.style.display = 'block';
      modal.setAttribute('aria-hidden', 'false');
    });
  
    // Fecha o modal
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    });
  
    // Fecha o modal ao clicar fora dele
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  
    // Carrossel de imagens
    let currentIndex = 0;
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
  
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    }, 3000); // Troca a cada 3 segundos
  
    function updateCarousel() {
      const offset = -currentIndex * 100;
      carouselItems.forEach(item => {
        item.style.transform = `translateX(${offset}%)`;
      });
    }
  
    // Validação do formulário de contato
    const contactForm = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Simulando o envio do formulário
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
  
      // Exibir mensagem de sucesso
      responseMessage.textContent = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;
      responseMessage.style.color = 'green';
  
      // Limpar o formulário
      contactForm.reset();
    });
  });