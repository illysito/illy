import gsap from 'gsap'

function button(button) {
  function buttonHoverIn(e) {
    const b = e.currentTarget
    const w = b.firstElementChild
    const text = w.firstElementChild
    const textHidden = text.nextElementSibling
    const circle = w.nextElementSibling
    const rootStyles = getComputedStyle(document.documentElement)
    const accent = rootStyles.getPropertyValue('--accent').trim()
    const typeColorComp = rootStyles
      .getPropertyValue('--type-color-comp')
      .trim()
    gsap.to(b, {
      scale: 0.98,
      duration: 0.4,
      borderColor: accent,
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
      color: typeColorComp,
      ease: 'power3.inOut',
    })
    gsap.to(textHidden, {
      yPercent: -100,
      duration: 0.4,
      color: typeColorComp,
      ease: 'power3.inOut',
    })
  }
  function buttonHoverOut(e) {
    const rootStyles = getComputedStyle(document.documentElement)
    const typeColor = rootStyles.getPropertyValue('--type-color').trim()
    const b = e.currentTarget
    const w = b.firstElementChild
    const text = w.firstElementChild
    const textHidden = text.nextElementSibling
    const circle = w.nextElementSibling
    gsap.to(text, {
      yPercent: 0,
      duration: 0.6,
      color: typeColor,
      ease: 'power3.inOut',
    })
    gsap.to(textHidden, {
      yPercent: 0,
      duration: 0.6,
      color: typeColor,
      ease: 'power3.inOut',
    })
    gsap.to(b, {
      scale: 1,
      duration: 0.4,
      borderColor: typeColor,
      ease: 'power3.inOut',
    })
    gsap.to(circle, {
      scale: 1,
      yPercent: 0,
      duration: 0.65,
      ease: 'power3.inOut',
    })
  }

  button.addEventListener('mouseenter', (e) => {
    buttonHoverIn(e)
  })
  button.addEventListener('mouseleave', (e) => {
    buttonHoverOut(e)
  })
}

export default button
