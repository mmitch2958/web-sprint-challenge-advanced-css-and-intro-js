/* Task 2: There is a typo in your dataset 😱 The 9th artist, Vincent Van Gogh is currently Vincent Van Dough.
Use an array method to fix this issue and console.log() to check your work. */
function changeName(array, index, name) {
  array[index].name = name;
  return array;
}
console.log(changeRegion(places, 9, 'Vincent Van Gogh'));
