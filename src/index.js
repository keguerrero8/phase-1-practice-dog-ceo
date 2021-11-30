console.log('%c HI', 'color: firebrick')

//Challenge 1
function addImages () {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(data => data.json())
    .then(json => {
        //create variable for the div
        //take one element from json, and append it to the div
        const div = document.querySelector("#dog-image-container")
        json.message.forEach((url) => {
            const img = document.createElement("img")
            img.src = url
            div.appendChild(img)
        }      
        )

    })
}


document.addEventListener("DOMContentLoaded", addImages)

//Challenge 2

function addDogBreeds () {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(data => data.json())
    .then(json => {
        const ul = document.querySelector("#dog-breeds")
        for (let breed in json.message) {
            const li = document.createElement("li")
            li.textContent = breed
            ul.appendChild(li)
            li.addEventListener("click", changeColor)
        }
    })

}
addDogBreeds()

//Challenge 3
function changeColor (event) {
    console.log(event.target)
    if (event.target.style.color === "red") {
        event.target.style.color = "black"
    }
    else {
        event.target.style.color = "red"
    }
}

//document.addEventListener("click", changeColor)

//Challege 4

// const select = document.querySelector("#breed-dropdown")
// debugger
// function filter (event) {
//     console.log(event)
// }

//select.addEventListener("click", filter)





