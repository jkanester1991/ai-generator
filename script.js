function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML =
    "The fog comes on little cat feet. It sits looking over harbor and city on silent haunches and then moves on";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
