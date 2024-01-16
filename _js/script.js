function copyEmailToClipboard() {
    const email = "guilhermeguerra.dev@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("E-mail copiado: " + email);
    }, (err) => {
        console.error('Erro ao copiar o e-mail: ', err);
    });
}