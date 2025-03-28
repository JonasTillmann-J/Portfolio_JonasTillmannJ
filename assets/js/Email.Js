document.getElementById("main_contact_form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os dados do formulário
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Configuração do envio de e-mail (usando EmailJS)
    const serviceID = "your_service_id"; // Substitua pelo seu Service ID do EmailJS
    const templateID = "your_template_id"; // Substitua pelo seu Template ID do EmailJS

    // Enviar e-mail usando EmailJS
    emailjs.send(serviceID, templateID, {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
    })
    .then(() => {
        alert("E-mail enviado com sucesso!");
        document.getElementById("main_contact_form").reset(); // Limpa o formulário
    })
    .catch((error) => {
        console.error("Erro ao enviar o e-mail:", error);
        alert("Ocorreu um erro ao enviar o e-mail. Tente novamente.");
    });
});