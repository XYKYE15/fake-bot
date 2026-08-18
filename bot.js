const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container");

let init = 0;

const botSay = (data) => {
  return [
    "Perkenalkan Saya KiiBot, Siapa Nama Kamu?",
    `Hallo, ${data?.nama} Berapa usia kamu?`,
    `ohhh usia kamu ${data?.usia}, Hobi kamu apa?`,
    `wow, Aku juga suka ${data?.hobi}, btw kamu punya pacar gak?`,
    `ohhh ${data?.pacar} kasian banget dehh...`,
  ];
};
pertanyaan.innerHTML = botSay()[0];

let usersData = [];

function botStart() {
  if (jawaban.value.length < 1) return alert("silahkan isi jawaban dulu!")
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUSer) {
  loaders.style.display = "block";
  container[0].style.filter = "blur(8px)";
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUSer)[init];
    container[0].style.filter = "none"
    loaders.style.display = "none";
  }, [1000]);
  usersData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `Terima kasih ya ${usersData[0]} udah main ke kiibot`;
  jawaban.value = "Siap!!!";
}

function botEnd() {
  alert(`Terima kasih ${usersData[0]}, Kamu akan di arahkan kehalaman utama...`)
  window.location.reload();
}
