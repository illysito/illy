import gsap from 'gsap'

const seasonURLS = [
  'https://script.google.com/macros/s/AKfycbxvM_9Ely2DkXYBOKQlnnjPFtzZOQzyfPahP4gCIJLyIS3Hoqe_W2JlKCMfr5RUmgE8/exec',
  'https://script.google.com/macros/s/AKfycbz78LESKpro2VTbxiixzMY3ak7lrDgOcvLXHPkdOyYPgkTST5TH8ytRos1AVmpMslVj/exec',
]

async function catanSelectSeason() {
  const seasonSelectors = document.querySelectorAll('.season-selector')
  const selectionScreen = document.querySelector('.season-catan-screen')

  return new Promise((resolve) => {
    seasonSelectors.forEach((s, index) => {
      s.addEventListener(
        'click',
        () => {
          gsap.to(s, {
            scale: 0.98,
            duration: 0.1,
            ease: 'linear',
            onComplete: () => {
              gsap.to(s, {
                scale: 1,
                duration: 0.1,
                ease: 'linear',
              })
              gsap.to(selectionScreen, {
                xPercent: -100,
                duration: 0.8,
                ease: 'expo.inOut',
              })
              resolve(seasonURLS[index])
            },
          })
        },
        { once: true }
      )
    })
  })
}

export default catanSelectSeason
