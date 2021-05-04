// const COLORS = ["turquoise", "pink", "yellow", "blue", "orange", "green"];
const COLORS = [1,2,3,4,5,6,7].map((color) => (`color${color}`));
const SECTIONS = ["about", "books", "music", "photos", "lichess", "github", "linkedin"];
const LINKS = ["about", "/books", "/music", "https://ethanbensman.com", "/lichess", "https://github.com/ebenz99", "/linkedin"];


const HOBBIES = ["Basketball", "Tennis", "Reading", "Chess", "Coding", "Painting", "Soccer"];
const INTERESTS = ["Swiss-style Design", "The Detroit Pistons", "Australian Drill", "Jake and Amir","Very Bad Wizards", "Bundesliga", "FC Cincinnati", "Universal Healthcare","Amphibians","Discrete Math"];
const MORE = ["Gibraltar", "What's that?"];

module.exports = { 
    COLORS,
    SECTIONS,
    LINKS,
    HOBBIES,
    INTERESTS,
    MORE
}