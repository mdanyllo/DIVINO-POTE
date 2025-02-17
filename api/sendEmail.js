import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    const { nome, email, mensagem } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'markusdanyllo07@gmail.com',
            pass: 'yjhl ksjl rbqw ulek',
        },
    });

    try {
        await transporter.sendMail({
            from: `"${nome}" <${email}>`,
            to: 'markusdanyllo07@gmail.com',
            subject: 'Nova mensagem do formulário',
            text: `Nome: ${nome}\nEmail: ${email}\nMensagem:\n${mensagem}`,
        });

        res.status(200).json({ success: 'E-mail enviado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao enviar e-mail', details: error.message });
    }
}
