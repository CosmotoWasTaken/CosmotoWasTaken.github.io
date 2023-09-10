window.onload = function loadNavBar() {
    console.log('loaded');
    document.getElementsByTagName("nav")[0].innerHTML = ``;
}

function deleteElement(elementId) {
    const element = document.getElementById(elementId);
    element.remove();
}