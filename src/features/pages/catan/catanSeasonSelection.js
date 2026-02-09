import gsap from 'gsap'

const seasonURLS = [
  'https://script.google.com/macros/s/AKfycbxvM_9Ely2DkXYBOKQlnnjPFtzZOQzyfPahP4gCIJLyIS3Hoqe_W2JlKCMfr5RUmgE8/exec',
  'https://script.google.com/macros/s/AKfycbz78LESKpro2VTbxiixzMY3ak7lrDgOcvLXHPkdOyYPgkTST5TH8ytRos1AVmpMslVj/exec',
]

async function catanSelectSeason() {
  const seasonSelectors = document.querySelectorAll('.season-selector')
  const icons = document.querySelectorAll('.loading-icon')

  document.body.style.overflow = 'hidden'
  gsap.to(icons, {
    rotation: 360,
    duration: 9.6,
    repeat: -1,
    ease: 'none',
  })

  return new Promise((resolve) => {
    seasonSelectors.forEach((s, index) => {
      const content = s.firstElementChild
      const loadingIcon = content.nextElementSibling
      s.addEventListener(
        'click',
        () => {
          gsap.to(content, {
            opacity: 0,
            duration: 0.2,
          })
          gsap.to(loadingIcon, {
            opacity: 1,
            duration: 0.2,
          })
          gsap.to(s, {
            scale: 0.98,
            duration: 0.1,
            ease: 'linear',
            onComplete: () => {
              document.body.style.overflow = 'visible'
              gsap.to(s, {
                scale: 1,
                duration: 0.1,
                ease: 'linear',
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
