window.onload = _e => {
    for (let i = 1; i < 5; i++) {
        const el = document.getElementById(`link-${i}`);
        el.onmouseenter = _e => {
            document.getElementById("links-grid").setAttribute("link", `${i}`);
        }
    }
}