// Navbar and move to top button
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

const siteLogo = document.querySelector('.logo a');

// Get all the menu items
const navLinks = document.querySelectorAll('.menu-list li');

const playSongBtn = document.querySelector('.play-song-btn');

// Add click event listener to each menu item
navLinks.forEach(item => {
  item.addEventListener('click', function () {
    // Remove the 'active' class from all menu items
    navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));

    // Add the 'active' class to the clicked menu item
    this.classList.add('active-menu-list');
  });
});

playSongBtn.onclick = () => {
  removeActiveClass();
}

siteLogo.onclick = () => {
  removeActiveClass();
};

function removeActiveClass() {
  navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));
}

window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");

  // When the user scrolls down 75px from the top of the document, show the button
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    moveTopBtn.style.display = "block";
  } else {
    moveTopBtn.style.display = "none";
  }
}

// PLAY MUSIC 
const playSong = document.getElementById("song");
var icon = document.getElementById("icon");

icon.addEventListener("click", playMusic);

function playMusic() {
  if (playSong.paused) {
    playSong.play();
    icon.src = "./assets/Image/pause.png";
  } else {
    playSong.pause();
    icon.src = "./assets/Image/play.png";
  }
}

// Move to Top button
var moveTopBtn = document.getElementById("moveTopBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  removeActiveClass();
}

// PreLoader
var loader = document.getElementById("loading");
function preLoader() {
  loader.style.display = "none";
}

// CHOOSE A SONG
const buttons = document.querySelectorAll(".btn");

const photo = document.getElementById("banner");
const song = document.getElementById("song");
const songName = document.getElementById("songName");
const songBy = document.getElementById("songBy");
const aboutSong = document.getElementById("aboutSong");
const title = document.getElementById("title");
const download = document.getElementById("download");

buttons[0].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Ya_Nabi_Salam_Alleyka.png";
  song.src = "./assets/Songs/ya-nabi-salam-alayka.mp3";
  songName.innerText = "Ya Nabi Salam Allayka";
  songBy.innerText = "Maher Zain";
  title.innerText = "Ya Nabi Salam Allayka";
  download.href = "./assets/Songs/ya-nabi-salam-alayka.mp3";
  aboutSong.innerText = "This is one of the most beloved Naats, centered around the repeated refrain “Ya Nabi Salam Alaika” (“O Prophet, peace be upon you”). It's a deeply spiritual invocation that calls for peace and blessings upon the Prophet Muhammad ﷺ. Known for its serene melody and heartfelt devotion, this piece is a poignant expression of reverence and love.";
});

buttons[1].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Mera_DIl_Badal.png";
  song.src = "./assets/Songs/mera-dil-badal-da.mp3";
  songName.innerText = "Mera Dil Badal Da";
  songBy.innerText = "Junaid Jamshaid";
  title.innerText = " Mera Dil Badal Da";
  download.href = "./assets/Songs/mera-dil-badal-da.mp3";
  aboutSong.innerText = "A beautifully emotional Hamd/Naat, “Mera Dil Badal De” (Change My Heart) is a soul-stirring supplication for inner transformation. One of the most celebrated renditions is by Junaid Jamshed, with lyrics written by Haider Hassan. It reflects a sincere plea to be cleansed of negligence and to be guided toward spiritual awakening. The song's heartfelt lyrics and Junaid Jamshed's soulful voice create a moving experience that resonates deeply with listeners, making it a cherished piece in the realm of Islamic devotional music.";
});
buttons[2].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Naatin_sarkar.png";
  song.src = "./assets/Songs/naatein-sarkar-ki-parta-hoon-mein.mp3";
  songName.innerText = "Naatein-sarkar-ki-parta-hoon-mein";
  songBy.innerText = "Milad Raza Rizvi";
  title.innerText = "Naatein-sarkar-ki-parta-hoon-mein";
  download.href = "./assets/Songs/naatein-sarkar-ki-parta-hoon-mein.mp3";
  aboutSong.innerText = "This line—“Naatein Sarkar Ki Parhta Hun Main” (“I recite the praises of the Master/Prophet”)—conveys humble devotion and continual remembrance of the Prophet ﷺ. While the specific author or origin of these words is not widely documented, they are cherished by Naat reciters and listeners alike.";

});

buttons[3].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Jaga_Jee.png";
  song.src = "./assets/Songs/jaga-ji-lagane-ki-dunya-nahi-hai.mp3";
  songName.innerText = " Jaga ji lagane ki dunya nahi hai";
  songBy.innerText = " Junaid Jamshed";
  title.innerText = "Jaga ji lagane ki dunya nahi hai";
  download.href = "./assets/Songs/jaga-ji-lagane-ki-dunya-nahi-hai.mp3";
  aboutSong.innerText = "This phrase expresses a soul’s yearning for spiritual awakening, indicating that the transient material world (“dunya”) fails to truly hold life or fulfillment. Though the precise origin or author of this line is not readily traceable, it resonates deeply within devotional poetry, echoing the sentiment of divine longing over worldly distractions." ;
});

buttons[4].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/ALi-Mola.png";
  song.src = "./assets/Songs/ali-mola-ali-dam-dam.mp3";
  songName.innerText = "Ali Mola Ali Dam Dam";
  songBy.innerText = "Haseeb Siddique";
  title.innerText = "Ali Mola Ali Dam Dam";
  download.href = "./assets/Songs/ali-mola-ali-dam-dam.mp3";
  aboutSong.innerText = "A popular Manqabat (Sufi devotional poem) in praise of Imam Ali, “Ali Mola Ali Dam Dam” exalts his spiritual authority and solace in hardship. It has been performed by various artists, including Ramzan (Studio5), Gulaab, and Ghulam Mustafa Qadri, each offering a poignant reflection of devotion through melodic verse.Also, Reddit contributors recall how legendary qawwal Nusrat Fateh Ali Khan often included a version of “Ali Maula Ali Maula Dam Dam” in his live performances, highlighting its widespread spiritual appeal";
});

buttons[5].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Sue_Muntaha_wo.png";
  song.src = "./assets/Songs/sue-muntaha-wo-chale-nabi.mp3";
  songName.innerText = "Sue Muntaha Wo Chale Nabi";
  songBy.innerText = "Indian Naat Khwan";
  title.innerText = "Sue Muntaha Wo Chale Nabi";
  download.href = "./assets/Songs/sue-muntaha-wo-chale-nabi.mp3";
  aboutSong.innerText = `Derived from classical praise-language such as “Balaghal Ula Bi Kamaalihi”, this line—"Sue Muntaha Wo Chale Nabi" (“The Prophet walked toward sublime heights”)—depicts the Prophet ﷺ’s supreme virtues. While the exact author may be elusive, this poetic phrase is often used in devotional gatherings and classical naats to denote the Prophet’s unparalleled status and character.`;
});

buttons[6].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Darood-e-Pak.png";
  song.src = "./assets/Songs/aagae-pyare-nabi.mp3";
  songName.innerText = "Aagae Pyare Nabi";
  songBy.innerText = "Salman Raza Ashrafi";
  title.innerText = "Aagae Pyare Nabi";
  download.href = "./assets/Songs/aagae-pyare-nabi.mp3";
  aboutSong.innerText = "Salman Raza Ashrafi is an esteemed Naat-khawan from India, celebrated for his melodious and spiritually resonant voice. Among his devotional performances, “Aagae Pyare Nabi” stands out as a notable rendition. Its presence on NaatSharif.com affirms its popularity: the site highlights the “fabulous quality and best class” of the recording and emphasizes Salman Raza Ashrafi’s distinctive tonal appeal that resonates with listeners worldwide.";
});

buttons[7].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Darood-e-Pak.png";
  song.src = "./assets/Songs/nabi-ka-lab-par.mp3";
  songName.innerText = " Nabi ka Lab par";
  songBy.innerText = "Muhammad Waqas Raza";
  title.innerText = "Nabi ka Lab par";
  download.href = "./assets/Songs/nabi-ka-lab-par.mp3";
  aboutSong.innerText = "This Urdu Naat, especially popular in video form, is often recited by groups of children or youth ensembles. One prominent version was produced by Hi-Tech Islamic Naat in 2021 and features a sweet, innocent chorus of children whose voices give a tender devotional resonance to the piece";
});

buttons[8].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Darood-e-Pak.png";
  song.src = "./assets/Songs/zamin-meli-nahin-hoti.mp3";
  songName.innerText = "Zamin Meli Nahin Hoti";
  songBy.innerText = "Farhan Ali Qadri";
  title.innerText = "Zamin Meli Nahin Hoti";
  download.href = "./assets/Songs/zamin-meli-nahin-hoti.mp3";
  aboutSong.innerText = "This heartfelt Naat has multiple celebrated renditions.Ghulam Mustafa Qadri is widely known for his popular version, especially through Heera Gold’s official video.Another rendition is by Farhan Ali Qadri, featured in the album Aa Gaye Sarkar.    Additionally, Shahbaz Qamar Fareedi, Hafiz Ahmed Raza Qadri, and Ghulam Mustafa Qadri are credited as reciters on certain lyric platforms.";
});

buttons[9].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Tu_Kuja.png";
  song.src = "./assets/Songs/tu-kuja-mann-kuja.mp3";
  songName.innerText = "Tu Kuja Mann Kuj";
  songBy.innerText = "Hafiz Ahmed Raza Qadri ";
  title.innerText = "Tu Kuja Mann Kuj";
  download.href = "./assets/Songs/tu-kuja-mann-kuja.mp3";
  aboutSong.innerText = "Originally composed by the legendary Nusrat Fateh Ali Khan, with lyrics by Muzaffar Warsi, this qawwali-naat fusion has been powerfully reinterpreted by Rafaqat Ali Khan and Shiraz Uppal in Season 9 of Coke Studio Pakistan. Additionally, Qari Shahbaz Ahmed is known for his soulful and heart-touching recitation of this piece";
});

buttons[10].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Darood-e-Pak.png";
  song.src = "./assets/Songs/durood-e-pak.mp3";
  songName.innerText = "Darood Pak";
  songBy.innerText = "Muhammad Waqas Raza";
  title.innerText = "Darood Pak";
  download.href = "./assets/Songs/durood-e-pak.mp3";
  aboutSong.innerText = "Darood Pak / Darood Sharif(Refers broadly to salutations upon the Prophet ﷺ.) While not tied to one specific recitation, Darood is a central feature of many naats and qaseedas. Recitations of Darood Pak are often embedded within broader poetic works like the Qaseeda Burda Sharif and are commonly delivered by celebrated naat-reciters in their live or recorded performances.";
});

buttons[11].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/Darood-e-Pak.png";
  song.src = "./assets/Songs/qasida-burda.mp3";
  songName.innerText = "Qasida Burda Sharif";
  songBy.innerText = "Junaid Jamshed";
  title.innerText = "Qasida Burda Sharif";
  download.href = "./assets/Songs/qasida-burda.mp3";
  aboutSong.innerText = "One of the most revered poems in praise of the Prophet Muhammad ﷺ, Qaseeda Burda Sharif has been beautifully recited by several prominent naat-khawans. Renowned voices include Mehmood-ul-Hassan Ashrafi, whose interpretation in multiple languages is widely acclaimed, and Qari Khushi Muhammad Al-Azhari, known for his deeply moving rendition. Additionally, versions sung by modern artists offer both traditional and contemporary expressions of devotion.";
});

 