function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#user-prompt");
  let apiKey = "84e3dbta0a4fea2f6b9o9606a19150da";
  let context =
    "You are a poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML, and seperate each line with a <br />. Do not show the html formatting. Make sure to follow the user instructions. Sign the poem with '- SheCodes AI' inside an <em> element at the end of the poem";
  let prompt = `User instructions: Generate a poem about ${promptInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `⌛ Generating a poem about: ${promptInput.value}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
  // can add typewriter plug in
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
