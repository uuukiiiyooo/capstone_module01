// Burger menu display
const menuIcon = document.querySelector('.menuBurger');
const menuText = document.querySelector('.menuText');

menuIcon.addEventListener('click', () => {
  menuText.classList.add('menuTextToggle');
});

const textList = document.querySelectorAll('.menuText a');
textList.forEach((item) => {
  item.addEventListener('click', () => {
    menuText.classList.remove('menuTextToggle');
  });
});
// Speakers info mapping
const speakersData = [
  {
    img: '/img/speaker01.png',
    speakerName: 'Chronicler',
    title: 'LCK Casting Crew',
    description: 'freelance caster for the LCK | music anime boardgame enthusiast | http://instagram.com/chroniclercasts | poetry at @chronipoems',
  },
  {
    img: '/img/speaker02.png',
    speakerName: 'Eefje Depoortere',
    title: 'LEC Analyst Crew',
    description: 'I do an awesome dolphin impression. Freelance esports host. 🇧🇪 For business inquiries: sjokz@loaded.gg',
  },
  {
    img: '/img/speaker03.png',
    speakerName: 'Clayton Raines',
    title: 'LCS Casting Crew',
    description: '| Streamer | Entertainer | Award-Winning Shoutcaster | #LCS since 2017 | Business email: TeamFlowers@unitedtalent.com',
  },
  {
    img: '/img/speaker04.png',
    speakerName: 'Alex ‘Nymaera’ Hapgood',
    title: 'LPL Casting Crew',
    description: 'LJL Unicorn | Ahri OTP (please build Mejai’s) | Freelance Colour Caster for LPL & #LEC guest | @LJLUnofficial Founder | I stream on http://twitch.tv/nymaera_',
  },
  {
    img: '/img/speaker05.png',
    speakerName: 'Sam Hartman-Kenzler',
    title: 'LCS Casting Crew',
    description: 'Streaming now @ http://twitch.tv/kobe | Insta http://instagram.com/esportskobe | Business: skenzler@gmail.com | Youtube/esportskobe',
  },
  {
    img: '/img/speaker06.png',
    speakerName: 'YamatoCannon',
    title: 'LEC Analyst Crew',
    description: 'former | @LiivSANDBOX | @TeamVitality | @FNATIC | @LEC',
  },
];

document.querySelector('#speakersModule').innerHTML = speakersData.map((speakers) => `
  <li>
  <img src="${speakers.img}">
  <div class="speakerInfo">
    <h4>${speakers.speakerName}</h4>
    <p class="speakerTitle">${speakers.title}</p>
    <div class="speakerDivider"></div>
    <p class="speakerDescription">${speakers.description}</p>
  </div>
  </li>
`).join('');