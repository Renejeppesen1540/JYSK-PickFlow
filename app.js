let current = 0;
let startTime = null;
let user = {};

const saved = JSON.parse(localStorage.getItem("pickUser") || "null");

if (saved) {
  user = saved;
  document.getElementById("login").classList.add("hidden");
  document.getElementById("pick").classList.remove("hidden");
  document.getElementById("userInfo").textContent =
    `${user.initialer} • ${user.navn} • ${user.dc}`;
  startTime = new Date();
  showItem();
}

function start() {
  const initialer = document.getElementById("i").value.trim();
  const navn = document.getElementById("n").value.trim();
  const dc = document.getElementById("d").value.trim();

  if (!initialer || !navn || !dc) {
    alert("Udfyld alle felter.");
    return;
  }

  user = { initialer, navn, dc };
  localStorage.setItem("pickUser", JSON.stringify(user));

  document.getElementById("login").classList.add("hidden");
  document.getElementById("pick").classList.remove("hidden");
  document.getElementById("userInfo").textContent =
    `${user.initialer} • ${user.navn} • ${user.dc}`;

  startTime = new Date();
  current = 0;
  showItem();
}

function showItem() {
  const item = PICK_DATA[current];

  document.getElementById("toNr").textContent = "TO 846757814";
  document.getElementById("progress").textContent =
    `${current + 1}/${PICK_DATA.length}`;

  document.getElementById("lokation").textContent = item[0];
  document.getElementById("artikel").textContent = item[1];
  document.getElementById("antal").textContent = item[2] + " stk";

  const scan = document.getElementById("scan");
  scan.value = "";
  scan.focus();
}

function ok() {
  const value = document.getElementById("scan").value.trim();
  const item = PICK_DATA[current];

  if (value === item[1] || value === item[3]) {
    if (navigator.vibrate) navigator.vibrate(120);

    current++;

    if (current >= PICK_DATA.length) {
      finishPick();
    } else {
      showItem();
    }
  } else {
    alert("Forkert vare.");
    document.getElementById("scan").select();
  }
}

function finishPick() {
  const end = new Date();
  const minutes = Math.round((end - startTime) / 60000);

  const subject = encodeURIComponent("TO 846757814 færdigplukket");
  const body = encodeURIComponent(
`TO: 846757814

Plukker: ${user.navn} (${user.initialer})
DC: ${user.dc}

Lokationer: ${PICK_DATA.length}
Tid: ${minutes} minutter`
  );

  window.location.href =
    `mailto:rloejeppesen@gmail.com?subject=${subject}&body=${body}`;

  alert("Pluk gennemført.");
}

document.addEventListener("keydown", e => {
  if (e.key === "Enter" &&
      !document.getElementById("pick").classList.contains("hidden")) {
    ok();
  }
});
