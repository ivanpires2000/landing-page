// Validação simples do formulário
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio padrão

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !phone || !email || !message) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Simulação de envio
  alert('Mensagem enviada com sucesso!');
  this.reset(); // Limpa o formulário
});