import './style.css'


const textElement = document.getElementById('gradient-text');

if (textElement) {
    window.addEventListener("mousemove", (e) => {
        // get the bounding box of the text
        const rect = textElement.getBoundingClientRect();

        // calculate the mouse's position relative to the text element size
        const x = e.clientX - rect.left;
        const y = e.clientY -  rect.top;

        const xPercent = (x/ rect.width) * 100 // convert to %
        const yPercent = (y/ rect.width) * 100

        textElement.style.setProperty("--x", `${xPercent}%`);
        textElement.style.setProperty("--y", `${yPercent}%`);

    });
}