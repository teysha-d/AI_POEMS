function displayPoem(response) {
  console.log("#poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "a43ab0c5t7640e69ab4693092fo45cea";
  let prompt = `User instructions are: "Generate a poem about Stars" ${instructionsInput.value}`;
  let context =
    "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem in HTML. Make sure to follow the user instructions.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
