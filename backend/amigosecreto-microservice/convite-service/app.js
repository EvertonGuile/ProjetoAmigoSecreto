const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: 'meuemail@email.com',
        pass: 'Minha-senha123'
    }
})

transport.sendMail({
    from: 'meuemail@email.com',
    to: 'emaildestinatario@email.com',
    subject: 'Enviando Email com Node.js',
    html: '<h1>Olá Mundo!</h1><p>Esse Email foi enviado usando o Nodemailer</p>',
    text: 'Esse é o corpo do Email com Node.js!'
})
.then(() => console.log('Email enviado com sucesso!'))
.catch((err) => console.log('Erro ao enviar email: ', err));