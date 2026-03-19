import  nodemailer  from "nodemailer";     //importamos nodemialer despues de instalarlo este es para verificar email de user

export const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER, //tu correo de empresa
        pass: process.env.EMAIL_PASS          //clave que te da tu correo para apps

    }
});

export const sendVerificationEmail = async (email, code) => {   //cuerpo del mail con el cod. verify
    try {
        const mailOptions = {
            from: `"Creaciones KMG 🧸" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Confirma tu correo electrónico',
            html: `<h1>¡Bienvenido!</h1><p>Tu código de verificación es: <b>${code}</b></p>`
        };
        return await transporter.sendMail(mailOptions);
        
    } catch (error) {
        console.error(error);
        return null;
    
    }
    
};