const nodemailer = require('nodemailer')

export default function sendEmail(req, res) {
    let transporter = nodemailer.createTransport({
        host: 'email-ssl.com.br',
        port: '587',
        auth: {
            user: 'noreply@portalcatalao.com.br',
            pass: 'Portaldeveloper228687535?'
        }
    })

    transporter.sendMail({
        from: 'noreply@portalcatalao.com.br',
        to: 'noreply@portalcatalao.com.br',
        subject: "Active email ✔",
        text: `${req.body.email} ${req.body.cell_phone}`,
    }).then((response) => {
        res.send(response)
    })
        .catch((error) => { res.send(error) });
}