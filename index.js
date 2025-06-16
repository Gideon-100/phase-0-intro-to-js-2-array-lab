// Write your solution here!
// Initial cats array
const cats = ["Milo", "Otis", "Garfield"];

// 1. Append a cat to the end of the array destructively
function destructivelyAppendCat(name) {
  cats.push(name);
}

// 2. Prepend a cat to the beginning of the array destructively
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// 3. Remove the last cat destructively
function destructivelyRemoveLastCat() {
  cats.pop();
}

// 4. Remove the first cat destructively
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// 5. Append a cat to the end non-destructively
function appendCat(name) {
  return [...cats, name];
}

// 6. Prepend a cat to the beginning non-destructively
function prependCat(name) {
  return [name, ...cats];
}

// 7. Remove the last cat non-destructively
function removeLastCat() {
  return cats.slice(0, -1);
}

// 8. Remove the first cat non-destructively
function removeFirstCat() {
  return cats.slice(1);
}

