
function searchPhotos() {

    let input = document.getElementById("search");
    let filter = input.value.toUpperCase();
    let textValue;
    let caption = document.querySelectorAll(".gallery-container a");

    for (i = 0; i < caption.length; i++) {
        a = caption[i].getAttribute("data-caption")[0];
        textValue = caption.textContent || caption.innerText;
        if (textValue.toUpperCase().includes(filter) > -1) {
            caption[i].style.display = "block";
        } else {
            caption[i].style.display = "none";
        }
    }
}