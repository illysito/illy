import gsap from 'gsap'

function heroWords() {
  // create mouse ball
  const words = document.querySelectorAll('.word-h')

  words.forEach((w) => {
    w.addEventListener('mouseenter', () => {
      gsap.to(w, {
        color: '#f83d8b',
        duration: 0.1,
        ease: 'power2.inOut',
      })
    })
    w.addEventListener('mouseleave', () => {
      gsap.to(w, {
        color: '#0a0a0a',
        duration: 0.4,
        ease: 'power2.inOut',
      })
    })
  })
}

export default heroWords
