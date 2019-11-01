const movies = [
    {
        title: 'Hors Normes' ,
        directors: 'Olivier Nakache & Eric Toledano',
        playTime: '114 min'
    }, 
    {
        title: 'The Mustang' ,
        directors: 'Laure de Clermont-Tonnerre',
        playTime: '96 min'
    }, {
        title: 'Joker' ,
        directors: 'Todd Phillips',
        playTime: '121 min'
    }, {
        title: 'Downton Abbey' ,
        directors: 'Micheal Engler',
        playTime: '122 min'
    }, {
        title: 'Parsite' ,
        directors: 'Bong Joon Ho',
        playTime: '132 min'
    }, {
        title: 'La Ragazza Nella Nebia' ,
        directors: 'Donato Carrisi',
        playTime: '128 min'
    }, {
        title: 'Once Upon a Time In Hollywood' ,
        directors: 'Quentin Tarratino',
        playTime: '161 min'
    }, {
        title: 'Au Nom De La Terre' ,
        directors: 'Édouard Bergeon',
        playTime: '103 min'
    }, {
        title: 'Itehak' ,
        directors: 'Alison Chernick',
        playTime: '82 min'
    }, {
        title: 'Everest: THe Small Yetti' ,
        directors: 'Jull Culton',
        playTime: '92 min'
    }, {
        title: 'Minuscule 2: Het Tropisch Avontuur' ,
        directors: 'Hélène Giraud & Thomas Szabo',
        playTime: '92 min'
    }, {
        title: 'The Lion King' ,
        directors: 'John Favreau',
        playTime: '118 min'
    },
]; 

const makeTag = (content , content1 , content2 , tagName) => `<${tagName}> ${content} , ${content1} , ${content2} </${tagName}>`;

const writeMovie = (movie , movie1 , movie2) => {
    document.write(makeTag(movie , movie1 , movie2 , 'li').toLowerCase());
}

document.write(`<ol>`);
movies.reverse().forEach(movie => writeMovie(movie.title , movie.directors , movie.playTime));
document.write(`</ol>`);