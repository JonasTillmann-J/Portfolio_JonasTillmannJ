<?php
// filepath: c:\Users\Usuário\ClonagensGit\Portfolio\Portfolio_JonasTillmannJ\sendemail.php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Inclui o autoload do Composer

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Captura os dados do formulário
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Configuração do PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configurações do servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Substitua pelo servidor SMTP do seu provedor
        $mail->SMTPAuth = true;
        $mail->Username = 'jonastillmann19@gmail.com'; // Seu endereço de e-mail
        $mail->Password = '19062006@Jon'; // Sua senha ou App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Configurações do e-mail
        $mail->setFrom($email, $name); // Remetente
        $mail->addAddress('jonastillmann19@gmail.com', 'Jonas Tillmann Júnior'); // Destinatário
        $mail->Subject = $subject;
        $mail->Body = "Nome: $name\nEmail: $email\n\nMensagem:\n$message";

        // Enviar o e-mail
        $mail->send();
        echo json_encode(['status' => 'success', 'message' => 'E-mail enviado com sucesso!']);
    } catch (Exception $e) {
        echo json_encode(['status' => 'error', 'message' => 'Erro ao enviar o e-mail: ' . $mail->ErrorInfo]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Método inválido.']);
}
?>