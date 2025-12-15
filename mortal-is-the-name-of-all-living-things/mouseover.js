// step 1. we need to get the spans with class "hover-object"
const hoverObjects = document.querySelectorAll('div.text-overlay > p.description > span.hover-object')
const imgHolder = document.getElementById("image-overlay")
// step 2. get the image array set up
// JavaScript variables, it used to be "var", now we use "const" (constant) or "let"
const images = [
"../assets/selects/select-10.png",
"../assets/selects/select-62.png",
"../assets/selects/select-7.png",
"../assets/selects/select-65.png",
"../assets/selects/select-4.png",
"../assets/selects/select-39.png",
"../assets/selects/select-66.png",
"../assets/selects/select-32.png",
"../assets/selects/select-33.png",
"../assets/selects/select-36.png",
"../assets/selects/select-61.png",
"../assets/selects/select-1.png",
"../assets/selects/select-31.png",
"../assets/selects/select-2.png",
"../assets/selects/select-9.png",
"../assets/selects/select-11.png",
"../assets/selects/select-12.png",
"../assets/selects/select-13.png",
"../assets/selects/select-14.png",
"../assets/selects/select-15.png",
"../assets/selects/select-16.png",
"../assets/selects/select-18.png",
"../assets/selects/select-20.png",
"../assets/selects/select-21.png",
"../assets/selects/select-22.png",
"../assets/selects/select-23.png",
"../assets/selects/select-25.png",
"../assets/selects/select-27.png",
"../assets/selects/select-34.png",
"../assets/selects/select-35.png",
"../assets/selects/select-41.png",
"../assets/selects/select-42.png",
"../assets/selects/select-43.png",
"../assets/selects/select-19.png",
"../assets/selects/select-30.png",
"../assets/selects/select-44.png",
"../assets/selects/select-45.png",
"../assets/selects/select-46.png",
"../assets/selects/select-47.png",
"../assets/selects/select-48.png",
"../assets/selects/select-49.png",
"../assets/selects/select-3.png",
"../assets/selects/select-50.png",
"../assets/selects/select-51.png",
"../assets/selects/select-52.png",
"../assets/selects/select-53.png",
"../assets/selects/select-54.png",
"../assets/selects/select-55.png",
"../assets/selects/select-56.png",
"../assets/selects/select-57.png",
"../assets/selects/select-58.png",
"../assets/selects/select-59.png",
"../assets/selects/select-8.png",
"../assets/selects/select-6.png",
"../assets/selects/select-29.png",
"../assets/selects/select-5.png",
"../assets/selects/select-63.png"]
// step 2. we need to add event listeners to each of these spans
// when mouseover hoverObjects[index], images[index] (is image src) replaces the placehoder image src (setAttribute())
// when mouseout, placeholder image src goes empty
// JS events: keyup, keydown, click, mouseover, mouseout, mouseenter, mouseleave, scroll, load, resize, etc.

const altTexts = [
"acorn",
"ipod nano and headphones",
"incense",
"chinese bean pillow",
"bone folder",
"salton sea fish bone",
"artist conk mushroom bound with red thread",
"turkeytail mushroom",
"tea package with uncle's calligraphy",
"projection on the back of the wooden altar",
"water chestnut seed pod",
"milkweed seed pod",
"shell",
"mother of pearl",
"shell",
"shell",
"shell",
"shell",
"shell",
"shell",
"shell",
"shell",
"shell",
"shell",
"shell",
"shell",
"shell",
"shell",
"shell",
"sand dollar shard",
"red silk scarf",
"stone",
"stone",
"circular green jade pendant",
"carved blue name seal",
"stone",
"stone",
"stone",
"stone",
"stone",
"stone",
"green jade hand pendant",
"stone",
"stone",
"stone",
"stone",
"stone",
"stone",
"stone",
"stone",
"stone",
"stone",
"name seal in case",
"red thread with yellow jade pendant",
"bark",
"twisted branch",
"altar wooden frame",
]



// apply the mouse events to all hoverOjects using forEach
// in ES6 syntax, 'function(){}' can be replaced with '() => {}'
hoverObjects.forEach(function(element, index){
    element.addEventListener("mouseover", function(){
    imgHolder.setAttribute("src", images[index])
    imgHolder.setAttribute("alt", altTexts[index])
    imgHolder.style.display = "block"
    })
    element.addEventListener("mouseout", function(){
    imgHolder.setAttribute("src", "")
    imgHolder.style.display = "none"
    imgHolder.setAttribute("alt", "")
    })
})
