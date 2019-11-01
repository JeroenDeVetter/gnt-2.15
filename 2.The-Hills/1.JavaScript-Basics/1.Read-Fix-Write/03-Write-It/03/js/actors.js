const oscars = [
  {
    actor: "Forest Whitaker",
    film: "The Last King of Scotland",
    age: 45
  },
  {
    actor: "Daniel Day-Lewis",
    film: "There Will Be Blood",
    age: 50
  },
  {
    actor: "Sean Penn",
    film: "Milk",
    age: 48
  },
  {
    actor: "Jeff Bridges",
    film: "Crazy Heart",
    age: 60
  },
  {
    actor: "Colin Firth",
    film: "The King's Speech",
    age: 50
  },
  {
    actor: "Jean Dujardin",
    film: "The Artist",
    age: 39
  },
  {
    actor: "Daniel Day-Lewis",
    film: "Lincoln",
    age: 55
  },
  {
    actor: "Matthew McConaughey",
    film: "Dallas Buyers Club",
    age: 44
  },
  {
    actor: "Eddie Redmayne",
    film: "The Theory of Everything",
    age: 33
  },
  {
    actor: "Leonardo DiCaprio",
    film: "The Revenant",
    age: 41
  }
];

const makeTag = (content, content1, content2, tagName) =>
  `<${tagName}> ${content} , ${content1} , ${content2} </${tagName}>`;

const writeMovie = (movie, movie1, movie2) => {
  document.write(makeTag(movie, movie1, movie2, "li"));
};

oscars.sort(function(a, b) {
  return a.age - b.age;
});

const totalAge = function(oscars) {
    var age = 0;

    for (var i = 0; i < oscars.length; i++){
       age += oscars[i].age; 
    }
    return age;
}

console.log("Total Age : " + totalAge(oscars));

document.write(`<ol>`);
oscars.forEach(oscar => writeMovie(oscar.actor, oscar.film, oscar.age));
document.write(`</ol>`);
