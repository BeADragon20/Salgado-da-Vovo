function salvarNome() {
    const nome = document.getElementById("nomeUsuario").value;
    localStorage.setItem("nomeUsuario", nome);
}
