import "./style.css";

function generadorExcusa() {
  // Excusas
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];
  // Aleatoriedad para arrays
  const whoRandom = Math.floor(Math.random() * who.length);
  const actionRandom = Math.floor(Math.random() * action.length);
  const whatRandom = Math.floor(Math.random() * what.length);
  const whenRandom = Math.floor(Math.random() * when.length);

  //Concatenar
  let excusa = `${who[whoRandom]} ${action[actionRandom]} ${what[whatRandom]} ${when[whenRandom]}.`;

  return excusa;
}

// Función nueva para mostrar excusa en HTML
function showExcuse() {
  // Conseguir el id de "excuse"
  let excuseId = document.getElementById("excuse");

  // Generación de excusa aleatoria de función generadorExcusa
  let excuse = generadorExcusa();

  // Mostrar en HTML
  excuseId.innerHTML = excuse;
}

window.onload = showExcuse();
