console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"  
const breedList = document.getElementById("breedList");
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
// Get all <li> elements within the <ul>
const breedItems = breedList.getElementsByTagName("li");
const newColor = "red";

// Loop through each <li> and add a click event listener
for (let i = 0; i < breedItems.length; i++) {
    breedItems[i].addEventListener("click", function () {
        this.style.color = newColor;
        for (let j = 0; j < breedItems.length; j++) {
            if (j !== i) {
                breedItems[j].style.color = ""; // default color
            }
        }
    });
}
fetch(imgUrl)