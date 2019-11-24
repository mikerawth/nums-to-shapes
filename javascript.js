class Shape {
  constructor(name, display, color) {
    this.name = name;
    this.display = display;
    this.color = color;
  }
}

const triangle = new Shape("triangle", "▲", "red");
const square = new Shape("square", "◼", "red");
const circle = new Shape("circle", "●", "green");
const star = new Shape("star", "★", "green");

let sample_array = [3, 2, 6, 12, 34, 5, 24, 67, 78];
displayArray(sample_array);



function displayArray(arr) {
  sortArrayInAscendingOrder(arr);
  $("#content").append(`<ol id="sample_array"></ol>`);
  for (let i of arr) {
    let shape = getShape(i);
    $("#sample_array").append(`<li class=${shape.name}>${i} - ${shape.display} - </li>`)
  }
}

function sortArrayInAscendingOrder(arr) {
  return arr.sort((a, b) => { return a - b });
}

function getShape(num) {
  if (num % 6 == 0) {
    return triangle;
  }
  else if (num % 2 == 0) {
    return square;
  }
  else if (num % 3 == 0) {
    return circle;
  } else {
    return star;
  }
}