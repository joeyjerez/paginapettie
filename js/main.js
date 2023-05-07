//Año actualizado al pie de pag
window.addEventListener("load", () => {
    const currentDate = new Date();
    document.getElementById("currentYear").innerText = currentDate.getFullYear()
});
//Fin año actualizado