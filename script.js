// Mensagem de console para confirmar que o arquivo JS está funcionando
console.log("Script carregado com sucesso!");

// Função para personalizar algum comportamento futuro
// Por exemplo, adicionar um efeito visual quando o vídeo for pausado
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('pause', function() {
        alert('Você pausou o vídeo: ' + this.previousElementSibling.textContent);
    });
});
