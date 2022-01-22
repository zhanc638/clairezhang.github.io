let aboutButton = document.getElementById("aboutButton")
let homeButton = document.getElementById("nameButton")
let portfolio = document.getElementById("portfolio")
let aboutPage = document.getElementById("about")

aboutButton.addEventListener("click", function(){
  portfolio.style.display = "none"
  aboutPage.style.display = "block"
})
homeButton.addEventListener("click", function(){
  portfolio.style.display = "block"
  aboutPage.style.display = "none"
})



//Expandig images

let projects = document.querySelectorAll("div.projects")

projects.forEach((project, i) => {
  let imagesToExpand = project.querySelectorAll(".expand")
  console.log(imagesToExpand)
  let details = project.querySelector("details")
  let summary = project.querySelector("summary")

  summary.addEventListener("click", function(){
    if (details.open == true) {
      imagesToExpand.forEach((image, i) => {
        image.style.display = "none"
      })
    }
    if (details.open == false) {
      imagesToExpand.forEach((image, i) => {
        image.style.display = "block"
      })
    }
    console.log(details.classList.contains("open"));
  })

});
