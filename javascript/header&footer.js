const parts = ["header", "footer"];
parts.forEach(part => {
    fetch(`../sections/${part}.html`)
        .then(res => res.text())
        .then(html => {
            document.getElementById(`${part}-container`).innerHTML = html;

            if (part === "header") {
                if (typeof initNavbarScroll === "function") {
                    initNavbarScroll();
                }
            }
        });
});