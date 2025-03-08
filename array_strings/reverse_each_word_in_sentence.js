// Given a string reverse each word in a sentence.

const str1 = "My name is Akarsh";

function reverseWord(str) {
  const reversed = str
    .split(" ")
    .map((each) => {
      return each.split("").reverse().join("");
    })
    .join(" ");
  console.log(reversed);
  return reversed;
}

reverseWord(str1);

//Write a js function that returns a passed string in alphabetical order

function alphabetical(str) {
  return str.split("").sort().join("");
}

console.log(alphabetical("zxcbea")); //abcexz
