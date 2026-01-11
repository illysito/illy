import gsap from 'gsap'

function iChing() {
  const yangLines = document.querySelectorAll('.yang-line')
  const yinLines = document.querySelectorAll('.yin-line')

  gsap.to(yangLines, {
    width: '100%',
    duration: 1.2,
    ease: 'expo.inOut',
  })
  gsap.to(yinLines, {
    width: '100%',
    duration: 1.2,
    ease: 'expo.inOut',
  })
}

export default iChing
