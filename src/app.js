function generadorExcusa() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const whoRandom = Math.floor(Math.random() * who.length);
  const actionRandom = Math.floor(Math.random() * who.length);
  const whatRandom = Math.floor(Math.random() * who.length);
  const whenRandom = Math.floor(Math.random() * who.length);

  let excuse = `${who[whoRandom]} ${action[actionRandom]} ${what[whatRandom]} ${when[whenRandom]}`;

  return excuse;
}

function showExcuse() {
  let excuseId = document.getElementById("excuse");
  // let excuseRandom = generadorExcusa();
  excuseId.innerHTML = generadorExcusa();
}

window.onload = showExcuse();
