// JavaScript credit/idea from itsmeganlynn's GitHub repo: techdegree-project-5

function searchPhotos() {
    let input = document.querySelector("#search").value; // This grabs the value typed into the search field
    let caption = document.querySelectorAll(".gallery-container a"); // This grabs the images within the gallery container
    for (let i = 0; i < caption.length; i++) {
       if (caption[i].getAttribute("data-caption").toLowerCase().includes(input.toLowerCase())) {
           caption[i].style.display = "";
       } else {
           caption[i].style.display = "none";
       }
    }
}