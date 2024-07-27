document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copyButton');
    const textToCopy = document.getElementById('textToCopy')!.innerText;

    copyButton?.addEventListener('click', () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Texto copiado al portapapeles');
        }).catch((err) => {
            console.error('Error al copiar el texto: ', err);
        });
    });
});

