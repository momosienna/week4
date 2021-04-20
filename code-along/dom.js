let pageTitleElement = document.querySelector(`.page-title`)
pageTitleElement.innerHTML = `Movies to watch!`


let movieElements = document.querySelectorAll(`.movies-to-watch li`)

//loop through all the elements (all the lis)
//for (let i=0; i<movieElements.length; i++) {
    //store a reference to each movie li
  //  let movieElement = movieElements [i]
    //change the HTML for each li
  //  movieElement.innerHTML = `Spaceballs`
//}
//reference to the "movies to wacth" ul

let moviesList = document.querySelector(`.movies-to-watch`)

//insert some HTML before the end of the ul
//we are adding spaceballs as the html
moviesList.insertAdjacentHTML(`beforeend`, `<li>Spaceballs</li>`)