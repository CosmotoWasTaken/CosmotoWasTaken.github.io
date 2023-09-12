window.onload = function load() {
    const navbar = document.createElement('div');

    navbar.innerHTML = `
    <img id="icon" src="../assets/icon.png" aria-label="IA with a Groove Coaster crab head accessory">
    <p>Cosmoto</p>
    <div id="navbar-links">
        <a href="distribution.html">Distribution</a>
        <a href="../index.html">Home</a>
    </div>
    `;
    navbar.id = "navbar"

    document.body.appendChild(navbar);
    document.getElementsByTagName("html")[0].style.visibility = "visible";
}