;

// YouTube sintaxis for embedded videos and images

const ytVideoPrefix = `https://www.youtube.com/embed/`
const ytImagePathPrefix = `https://i.ytimg.com/vi/`
const ytImagePathSufix = `/hqdefault.jpg`

// Array of Videos

let arrVideos = [
  {name: 'इस्कॉन पंढरपूरद्वारा अनाज और किराणा वितरण', data: 'CfuJk2t_1us'},
  {name: 'सीता नवमी विशेष श्री श्री राधा पंढरीनाथ अप्रतिम शृंगार दर्शन', data: 'Xb3MMxrEsG8'},
  {name: 'श्री चैतन्य-नित्यानंद-विश्वरूप प्रभू चरण दर्शन', data: 'RgJqkQvKr5o'},
  {name: 'राधा पंढरीनाथ गोशाळा', data: '5O-dkmcjzBU'},
  {name: 'आज श्रावण विशेष संपूर्ण हिरवळीत नटलेले श्री श्री राधा पंढरीनाथ दर्शन', data: 'elwnQ8PDPqE'},
  {name: 'पदयात्रा अनुभव मेळा', data: 'xhOLqo7Yyz8'},
  {name: 'महाराष्ट्र पदयात्रेचे पंढरपूर मधून प्रस्थान', data: 'm5ctC_AFUOI'},
  {name: 'व्यासपौर्णिमेनिमित्त परमपूज्य लोकनाथ स्वामी महाराजांची व्यासपूजा साजरी करतानाची झलक', data: '3Z0yUqE-e7o'},
  {name: 'आषाढी एकादशी निमित्त श्री राधा पंढरीनाथ विशेष शृंगार दर्शन', data: 'H7GrsVdrVOY'},
  {name: 'जगातील सर्वात मोठे आश्चर्य काय आहे', data: 'RsPJy-2HhKo'},
  {name: 'श्री श्री राधा पंढरीनाथ मंगल आरती दर्शन', data: 'zyImTiv5tec'},
  {name: 'श्री नृसिंह चतुर्दशी अभिषेक इस्कॉन पंढरपूर', data: 'dlONf-4eO7U'}
]

// Current video

let currentVideo = document.getElementById('current-video')
currentVideo.src = `${ytVideoPrefix}${arrVideos[0].data}`

// Add .gallery__items to .gallery

let gallery = document.querySelector('.test')
gallery.innerHTML = ``

for (let i = 0; i < arrVideos.length; i++) {
  gallery.innerHTML += `
    <div class="test__item" data="${arrVideos[i].data}">
      <img class="test__item__img" src="${ytImagePathPrefix}${arrVideos[i].data}${ytImagePathSufix}">
      <span class="test__item__span">${arrVideos[i].name}</span>
    </div>`
}

// Add event listeners

gallery.addEventListener('click', (e) => {
  // When click on .gallery__item element
  if (e.target.classList.contains('test__item')) {
    currentVideo.src = `${ytVideoPrefix}${e.target.getAttribute('data')}`
  }
  // When click on .gallery__item__img element
  if (e.target.classList.contains('test__item__img')) {
    let data = e.target.src
    data = data.replace(ytImagePathPrefix, '')
    data = data.replace(ytImagePathSufix, '')
    currentVideo.src = `${ytVideoPrefix}${data}`
  }
  // When click on .gallery__item__span element
  if (e.target.classList.contains('test__item__span')) {
    console.log(e.target.innerText)
    for (let i = 0; i < arrVideos.length; i++) {
      if (arrVideos[i].name === e.target.innerText) {
        currentVideo.src = `${ytVideoPrefix}${arrVideos[i].data}`
      }
    }
  }
})
