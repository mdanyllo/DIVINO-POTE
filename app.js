document.getElementById("meuFormulario").addEventListener("submit", async function(event) {
    event.preventDefault(); // Evita que a página recarregue ao enviar o formulário

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries()); // Converte os dados para um objeto

    const response = await fetch('https://apidp-production.up.railway.app/sendEmail', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data) // Agora enviamos os dados corretos
    });

    const result = await response.json();
    alert(result.success || result.error); // Exibe mensagem de sucesso ou erro
});
