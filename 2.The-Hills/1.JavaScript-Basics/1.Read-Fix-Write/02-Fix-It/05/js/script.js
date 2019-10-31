const shows = [
  `legion`,
  `sneaky pete`,
  `santa clarita diet`,
  `riverdale`,
  `the young pope`,
  `a series of unfortunate events`,
  `taboo`,
  `colony`,
  `24: legacy`,
  `speechless`,
  `scherlock`,
  `stranger things`,
  `this is us`,
  `timeless`,
  `the oa`
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

const writeTitle = title => {
  const newTitle = uCFirst(title);
  document.write(wrapWithTag(newTitle, `li`));
};

const uCFirst = sentence => {
  const words = sentence.split(/\n/);
  var toUpperCase = [];
  for (var x = 0; x < words.length; x++) {
    toUpperCase.push(words[x].charAt(0).toUpperCase() + words[x].slice(1));
  }
  return toUpperCase.join(" ");
};

document.write(`<ol>`);
shows.forEach(show => writeTitle(show));
document.write(`</ol>`);
