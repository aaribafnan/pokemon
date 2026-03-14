let pikachuHP = 100;
let charmanderHP = 100;

function attack() {
  if (pikachuHP <= 0 || charmanderHP <= 0) {
    return;
  }

  let pikachuDamage = Math.floor(Math.random() * 15) + 5;
  let charmanderDamage = Math.floor(Math.random() * 15) + 5;

  charmanderHP -= pikachuDamage;
  pikachuHP -= charmanderDamage;

  if (charmanderHP < 0) charmanderHP = 0;
  if (pikachuHP < 0) pikachuHP = 0;

  document.getElementById("pikachu-hp").innerText = pikachuHP;
  document.getElementById("charmander-hp").innerText = charmanderHP;

  if (pikachuHP === 0) {
    document.getElementById("result").innerText = "🔥 Charmander Wins!";
  } else if (charmanderHP === 0) {
    document.getElementById("result").innerText = "⚡ Pikachu Wins!";
  }
}
