interface notificarEmail {
    enviarEmail(mens: string, email: string): void
}

class Notificacao implements notificarEmail {
    enviarEmail(mens: string, email: string): void {
        console.log("Email: " + email + " - " + "Mensagem: " + mens)
    }
}

const newEmail: Notificacao = new Notificacao();

newEmail.enviarEmail("Enviado", "vitor@gmail.com")