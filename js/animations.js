const words = [

"Software Developer",

"Architecting Ideas",

"Building Solutions",

"Learning Forever",

"Problem Solver"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

const typingElement =
document.getElementById(
"typingText"
);

function typeEffect(){

const currentWord =
words[wordIndex];

if(!deleting){

typingElement.textContent =
currentWord.substring(
0,
charIndex++
);

if(charIndex >
currentWord.length){

deleting = true;

setTimeout(
typeEffect,
1200
);

return;

}

}else{

typingElement.textContent =
currentWord.substring(
0,
charIndex--
);

if(charIndex < 0){

deleting = false;

wordIndex =
(wordIndex + 1)
%
words.length;

}

}

setTimeout(
typeEffect,
deleting ? 50 : 100
);

}

typeEffect();

const observer =
new IntersectionObserver(

entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList
.add("show");

}

});

},

{
threshold:0.15
}

);

document
.querySelectorAll("section")
.forEach(section => {

section.classList.add("hidden");

observer.observe(section);

});
