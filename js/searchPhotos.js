
let input = document.getElementById("search").addEventListener("keyup", searchPhotos);

function searchPhotos() {
    input = input.toUpperCase();
    // var x = document.getElementById("search");
    // x.value = x.value.toUpperCase();
    console.log(input);
}