import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.post('/sendEmail', async (req, res) => {
    const { nome, email, mensagem } = req.body;

    if (!nome || !email || !mensagem) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Mensagem de ${nome}`,
            text: `Email: ${email}\n\nMensagem: ${mensagem}`
        };

        await transporter.sendMail(mailOptions);
        res.json({ success: 'Email enviado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao enviar email' });
    }
});

// Rota de teste para ver se o servidor está rodando
app.get('/', (req, res) => {
    res.send('Servidor rodando!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
