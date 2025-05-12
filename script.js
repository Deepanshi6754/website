// Function to toggle display of hidden info sections
function toggleInfo(element) {
    const info = element.querySelector(".hidden-info");
    if (info.style.display === "block") {
        info.style.display = "none";
    } else {
        info.style.display = "block";
    }
}
