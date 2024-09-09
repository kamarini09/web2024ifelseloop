// Get the container element
const list = document.getElementById("number-list");

// Loop through numbers from 1 to 20

const myNumbers = () => {
  let numbers = [];
  for (i = 1; i <= 20; i++) {
    numbers.push(i);
  }
  return numbers;
};
const numbers = myNumbers();
// Create a new div element for each number

numbers.forEach((x) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = `${x}`;

  newDiv.classList.add("number");
  // Check if the number is even or odd and apply the appropriate class
  if (x % 2 !== 0) {
    newDiv.classList.add("odd");
  } else {
    newDiv.classList.add("even");
  }

  // Add an event listener to highlight the number when clicked
  newDiv.addEventListener("click", () => {
    const allDivs = list.querySelectorAll("div"); // Remove highlight from all numbers
    allDivs.forEach((div) => {
      div.classList.remove("highlight");
    });
    newDiv.classList.add("highlight"); // Add highlight to the clicked number
  });

  // Append the new div to the container
  list.appendChild(newDiv);
});
