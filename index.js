const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// .map and .split (" ") 
// what 
// does 
// the 
// this 
// keyword 
// mean
// ?

// use variables to make it easier to manipulate the next steps in complex functions
//can change together methods but don't make them too long

const titleCased = () => {
  return tutorials.map(tutorial => {
    let words = tutorial.split(" ")
    let capWord = words.map(letters => letters.charAt(0).toUpperCase() + letters.slice(1)) //the reason we use slice is because we want to attach the upper cased letter to the rest of the word. get rid of the lower cased letter
    let backTogether = capWord.join(" ")
    return backTogether
  })
}