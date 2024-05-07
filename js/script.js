// JavaScript para adicionar funcionalidades interativas, como animações ou efeitos de hover

// Exemplo: adicionar efeito de zoom suave ao passar o mouse sobre os eventos
const events = document.querySelectorAll(".event");

events.forEach(event => {
    event.addEventListener("mouseover", () => {
        event.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.2)";
    });

    event.addEventListener("mouseout", () => {
        event.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
    });
});