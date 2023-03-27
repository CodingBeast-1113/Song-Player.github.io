//initialize the songs
let songIndex = 0;
let audioelement = new Audio("songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let mastersongname = document.getElementById("mastersongname");
let gif = document.getElementById("gif");
let next = document.getElementById("next");
let songitems = Array.from(document.getElementsByClassName("songitem")); 

let songs = [
  {
    songsname: "Mere pass tum ho",
    filepath: "songs/1.mp3",
    coverpath: "cover/cover1.jpg",
  },
  {
    songsname: "Hawa Hawa ",
    filepath: "songs/2.mp3",
    coverpath: "cover/cover1.jpg",
  },
  {
    songsname: "lagan lagi",
    filepath: "songs/3.mp3",
    coverpath: "cover/cover1.jpg",
  },
  {
    songsname: "Tere naam",
    filepath: "songs/4.mp3",
    coverpath: "cover/cover1.jpg",
  },
  {
    songsname: "Tum ho",
    filepath: "songs/5.mp3",
    coverpath: "cover/cover1.jpg",
  },
  {
    songsname: "Tumhe dil lagi",
    filepath: "songs/6.mp3",
    coverpath: "cover/cover1.jpg",
  },
];

songitems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songsname;
});
//audioelement.play();

//handle play pause click
masterplay.addEventListener("click", () => {
  if (audioelement.paused || audioelement.currentTime <= 0) {
    audioelement.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioelement.pause();
    masterplay.classList.remove("fa-circle-pause");
    masterplay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});



//listen to events
audioelement.addEventListener("timeupdate", () => {
  //update seekbar
  progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);

  myprogressbar.value = progress;
});

myprogressbar.addEventListener("change", () => {
  audioelement.currentTime =
    (myprogressbar.value * audioelement.duration) / 100;
});

const makeallplays = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (element) => {
      element.classList.add("fa-circle-play");
      element.classList.remove("fa-circle-pause");
    }
  );
};
Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
  element.addEventListener("click", (e) => {
    makeallplays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    audioelement.src = `songs/${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songsname;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    
  });
});
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 5) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioelement.src = `songs/${songIndex + 1}.mp3`;
  mastersongname.innerText = songs[songIndex].songsName;
  audioelement.currentTime = 0;
  audioelement.play();
  songitems.classList.remove("fa-circle-play")
  songitems.classList.add("fa-circle-pause")
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 5;
  } else {
    songIndex -= 1;
  }
  audioelement.src = `songs/${songIndex + 1}.mp3`;
  mastersongname.innerText = songs[songIndex].songsName;
  audioelement.currentTime = 0;
  audioelement.play();
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
});
