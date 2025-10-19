import gsap from 'gsap'

function button(button) {
  function buttonHoverIn(e) {
    const isDarkMode = localStorage.getItem('isDarkModeOn')
    console.log(isDarkMode)
    const b = e.currentTarget
    const w = b.firstElementChild
    const text = w.firstElementChild
    const textHidden = text.nextElementSibling
    const circle = w.nextElementSibling
    if (isDarkMode === 'true') {
      gsap.to(b, {
        scale: 0.98,
        borderColor: '#f83d8b',
        duration: 0.4,
        ease: 'power3.inOut',
      })
      gsap.to(circle, {
        scale: 1.2,
        yPercent: -50,
        duration: 0.65,
        ease: 'power3.inOut',
      })
      gsap.to(text, {
        yPercent: -100,
        duration: 0.4,
        color: '#fff4e9',
        ease: 'power3.inOut',
      })
      gsap.to(textHidden, {
        yPercent: -100,
        duration: 0.4,
        color: '#fff4e9',
        ease: 'power3.inOut',
      })
    } else {
      gsap.to(b, {
        scale: 0.98,
        borderColor: '#0000ff',
        duration: 0.4,
        ease: 'power3.inOut',
      })
      gsap.to(circle, {
        scale: 1.2,
        yPercent: -50,
        duration: 0.65,
        ease: 'power3.inOut',
      })
      gsap.to(text, {
        yPercent: -100,
        duration: 0.4,
        color: '#fff4e9',
        ease: 'power3.inOut',
      })
      gsap.to(textHidden, {
        yPercent: -100,
        duration: 0.4,
        color: '#fff4e9',
        ease: 'power3.inOut',
      })
    }
  }
  function buttonHoverOut(e) {
    const isDarkMode = localStorage.getItem('isDarkModeOn')
    const b = e.currentTarget
    const w = b.firstElementChild
    const text = w.firstElementChild
    const textHidden = text.nextElementSibling
    const circle = w.nextElementSibling
    if (isDarkMode === 'true') {
      gsap.to(b, {
        scale: 1,
        duration: 0.4,
        borderColor: '#fff4e9',
        ease: 'power3.inOut',
      })
      gsap.to(circle, {
        scale: 1,
        yPercent: 0,
        duration: 0.65,
        ease: 'power3.inOut',
      })
      gsap.to(text, {
        yPercent: 0,
        duration: 0.4,
        color: '#fff4e9',
        ease: 'power3.inOut',
      })
      gsap.to(textHidden, {
        yPercent: 0,
        duration: 0.4,
        color: '#fff4e9',
        ease: 'power3.inOut',
      })
    } else {
      gsap.to(b, {
        scale: 1,
        duration: 0.4,
        borderColor: '#202020',
        ease: 'power3.inOut',
      })
      gsap.to(circle, {
        scale: 1,
        yPercent: 0,
        duration: 0.65,
        ease: 'power3.inOut',
      })
      gsap.to(text, {
        yPercent: 0,
        duration: 0.4,
        color: '#0e0e0e',
        ease: 'power3.inOut',
      })
      gsap.to(textHidden, {
        yPercent: 0,
        duration: 0.4,
        color: '#0e0e0e',
        ease: 'power3.inOut',
      })
    }
  }

  button.addEventListener('mouseenter', (e) => {
    buttonHoverIn(e)
  })
  button.addEventListener('mouseleave', (e) => {
    buttonHoverOut(e)
  })
}

export default button
