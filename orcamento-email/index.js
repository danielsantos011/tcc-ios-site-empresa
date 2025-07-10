const nodemailer = require('nodemailer');

// Configuração do transporte (exemplo Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'seuemail@gmail.com',      // seu email
    pass: 'suasenha ou app password' // sua senha ou senha de app (mais seguro)
  }
});

// Função para enviar o e-mail
async function enviarEmailOrcamento(emailCliente, plano, quantidade, valorTotal) {
  const mailOptions = {
    from: 'seuemail@gmail.com',
    to: emailCliente,
    subject: 'Orçamento Visão Perifa',
    text: `Olá!

Segue seu orçamento:

Plano: ${plano}
Quantidade: ${quantidade}
Valor Total: R$${valorTotal}

Obrigado por escolher a Visão Perifa!`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('E-mail enviado: ' + info.response);
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
  }
}

// Exemplo de uso
enviarEmailOrcamento('cliente@exemplo.com', 'Plano Intermediário', 4, 4000);
