window.onload = function load() {
    const navbar = document.createElement('div');

    navbar.innerHTML = `
    <img id="icon" src="assets/icon.png" aria-label="IA with a Groove Coaster crab head accessory">
    <p>Cosmoto</p>
    <div id="navbar-links">
        <a href="https://cosmoto.notion.site/e30ed44fd36a49469e83bc06c3b60dc2?v=fedbb99d82e74a698958e71bffd2bbb2&pvs=4" target="_blank">Distribution</a>
        <a href="index.html">Home</a>
    </div>
    `;
    navbar.id = "navbar"

    document.body.appendChild(navbar);
    document.getElementsByTagName("html")[0].style.visibility = "visible";
}
