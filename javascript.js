let arr1 = [3, 2, 6, 12, 34, 5, 24, 67, 78];
// $("#content").append(arr1)

$("#content").append(displayArrayForViewer(arr1), "<br />");
sortArrayInAscendingOrder(arr1);
$("#content").append(displayArrayForViewer(arr1));

// $("#content").append("<ol>");
// for (i in arr1) {
//   $("#content").append(`<li>${arr1[i]} - ${determineShapeAndColor(arr1[i])}</li>`)
// }
// $("#content").append("</ol>");


function displayArrayForViewer(arr) {
  return arr.join(" ")
}

function sortArrayInAscendingOrder(arr) {
  return arr.sort((a, b) => { return a - b });
}

// If this was more complex, I could seperate the shape and color identification into two seperate functions
// Since I concluded that numbers divisible by 2 & 6 are even, and the rest are odd, I made it one function to do both
// To draw shapes, I'm using unicode hex characters
function determineShapeAndColor(num) {
  let shape = "";
  let color = "";

  if (num % 6 == 0) {
    // triangle
    shape = "&#x25B2";
    color = "red";
  }
  else if (num % 2 == 0) {
    // square
    shape = "&#x25FC;";
    color = "red";
  }
  else if (num % 3 == 0) {
    // circle
    shape = "&#x26AB";
    color = "green";
  } else {
    // x-shape
    shape = "&#x2605";
    color = "green";
  }

  return `The num is ${num}, the shape is ${shape} and the color is ${color}`;
}

