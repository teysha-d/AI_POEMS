function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "In the quiet of the night....",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
