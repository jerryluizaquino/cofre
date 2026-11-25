function gerarSenha() {
    let tamanho = document.getElementById("tamanho").value;

    if (tamanho < 4 || tamanho > 32) {
        document.getElementById("senhaGerada").textContent =
            "Escolha um tamanho entre 4 e 32.";
        return;
    }

    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
    let senha = "";

    for (let i = 0; i < tamanho; i++) {
        let posicao = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[posicao];
    }

    document.getElementById("senhaGerada").textContent = senha;
}