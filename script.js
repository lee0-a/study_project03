const headerNav = [
    {title: '얄코강좌는', link: '#about'},
    {title: 'Html', link: '#html'},
    {title: 'Css', link: '#css'},
    {title: '커리큘럼', link: '#curriculum'},
    {title: '문의하기', link: '#contact'},
]

let headerNavUl = document.querySelector('.header__nav ul');

for( const nav of headerNav){
    let navList = document.createElement('li');
    let navLInk = document.createElement('a');

    navList.classList.add('header__nav-item');

    navLInk.textContent = nav.title;
    navLInk.setAttribute('href', nav.link);

    navList.appendChild(navLInk);
    headerNavUl.appendChild(navList);
}

const aboutCards = [
    {
      img: './images/about_1.svg',
      title: '빠른 강의',
      descs: [
        '군더더기 없는 진행으로',
        '여러분의 시간을 절약합니다.'
      ]
    },
    {
      img: './images/about_2.svg',
      title: '손쉬운 학습',
      descs: [
        '강의 페이지를 활용해서',
        '편리하게 실습할 수 있습니다.'
      ]
    },
    {
      img: './images/about_2.svg',
      title: '플레이그라운드',
      descs: [
        '강의를 위해 제작한 도구가',
        '반복학습을 도와줍니다.'
      ]
    }
  ];

  let aboutDiv = document.querySelector('.about');

  for(let i = 0; i<aboutCards.length;i++){
    let aboutCard = aboutCards[i];
    let aboutCardBox = document.createElement('div');

    aboutCardBox.classList.add('about__card');

    let aboutImgBox = document.createElement('img');
    let aboutTitleBox = document.createElement('h2');
    let aboutDesBox = document.createElement('p');

    aboutImgBox.classList.add('about__icon');
    aboutTitleBox.classList.add('about__title_1');
    aboutDesBox.classList.add('about__text');

    aboutImgBox.setAttribute('src', aboutCard.img);
    aboutTitleBox.textContent = aboutCard.title;

    for(const des of aboutCard.descs){
        let aboutDes = document.createElement('div');

        aboutDes.textContent = des;
        aboutDesBox.appendChild(aboutDes);
    }

    aboutCardBox.appendChild(aboutImgBox);
    aboutCardBox.appendChild(aboutTitleBox);
    aboutCardBox.appendChild(aboutDesBox);

    aboutDiv.appendChild(aboutCardBox);
  }

  //curriculum 
//   let currList = document.querySelectorAll('.curriculum__list li');
//   let currProgress = document.querySelector('.curriculum__progress .bar');

//   for(let i = 0;i<currList.length;i++){
//     let list = currList[i];
//     list.addEventListener('mouseenter', ()=>{
//         currProgress.style.width = (200 * i) + 'px'
//     });
//     list.addEventListener('mouseleave', ()=>{
//         currProgress.style.width = 0
//     });
//   };

let currList = document.querySelectorAll('.curriculum__list li');
let currProgress = document.querySelector('.curriculum__progress .bar');

for(let i=0; i<currList.length; i++){
    let list = currList[i];

    list.addEventListener('mouseenter', ()=>{
        currProgress.style.width = (200*i) + 'px';
    });
    list.addEventListener('mouseleave', ()=>{
        currProgress.style.width = 0;
    });
};

let contactTabs = document.querySelectorAll('input[name = contact]');
let contactSlide = document.querySelector('.contact__slide-con');

for(let i=0;i<contactTabs.length;i++){
    let contactTab = contactTabs[i];
    let marginLeft = [0, '-100vw'][i];

    contactTab.addEventListener('click', function(){
        contactSlide.style.marginLeft = marginLeft;
    })

}

let menuBtn = document.querySelector('.header__menu-btn');
let headerNavMo = document.querySelector('.header__nav');

menuBtn.addEventListener('click', (e)=>{
    menuBtn.classList.toggle('on');
    headerNavMo.classList.toggle('active');

    e.stopPropagation();
})

document.querySelector('body').addEventListener('click', ()=>{
    menuBtn.classList.remove('on');
    headerNavMo.classList.remove('active');
})

