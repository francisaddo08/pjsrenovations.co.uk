var modal = document.getElementById("galeryModal"); // get modal div

var btn = document.getElementById("modalBtn"); // bet btn
var closeSpan = document.getElementsByClassName("close")[0] // array of classes
// now the event handler function
btn.onclick = function () {
    modal.style.display = "block";

}

closeSpan.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function () {
    if (this.event.target == this.modal) { this.modal.style.display = "none"; }
}