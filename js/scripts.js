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
    speakerName: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    img: '/img/speaker02.png',
    speakerName: 'SohYeong Noh',
    title: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    img: '/img/speaker03.png',
    speakerName: 'Lila tretikov',
    title: 'Executive Director of the Wikimedia Foundation',
    description: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  {
    img: '/img/speaker04.png',
    speakerName: 'Kilnam Chon',
    title: 'Internet Hall of Fame',
    description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    img: '/img/speaker05.png',
    speakerName: 'Julia Leda',
    title: 'President of Young Pirates of Europe',
    description: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    img: '/img/speaker06.png',
    speakerName: 'Ryan Merkley',
    title: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
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