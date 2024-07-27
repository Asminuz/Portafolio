document.getElementById('copyButton').addEventListener('click', function() {
    // Obtener el texto a copiar
    var textToCopy = document.getElementById('textToCopy').innerText;

    // Crear un elemento de área de texto temporal
    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;

    // Añadir el área de texto al DOM
    document.body.appendChild(tempTextArea);

    // Seleccionar el texto
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // Para móviles

    // Ejecutar el comando de copia
    document.execCommand('copy');

    // Remover el área de texto del DOM
    document.body.removeChild(tempTextArea);

    // Mostrar un mensaje de éxito
    document.getElementById('status').innerText = 'Texto copiado al portapapeles!';
});

