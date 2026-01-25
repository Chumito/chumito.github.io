document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
        delimiters: [
            {left: "$$", right: "$$", display: true},   // Para ecuaciones grandes centradas
            {left: "$", right: "$", display: false}     // Para ecuaciones pequeñas en línea con el texto
        ]
    });
});
