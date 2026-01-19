import gsap from 'gsap'

import Anim from '../../helpers/anim.js'

const D = Anim.D
const E = Anim.E

function button(button) {
  function isMobile() {
    return window.innerWidth <= 767
  }

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
      duration: D.med,
      borderColor: accent,
      ease: E.p2io,
    })
    gsap.to(circle, {
      scale: D.ultra_slow,
      yPercent: -50,
      duration: 0.65,
      ease: E.p2io,
    })
    gsap.to(text, {
      yPercent: -100,
      duration: D.med,
      color: typeColorComp,
      ease: E.eio,
    })
    gsap.to(textHidden, {
      yPercent: -100,
      duration: D.med,
      color: typeColorComp,
      ease: E.eio,
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
      duration: D.med,
      color: typeColor,
      ease: E.p2io,
    })
    gsap.to(textHidden, {
      yPercent: 0,
      duration: D.med,
      color: typeColor,
      ease: E.p2io,
    })
    gsap.to(b, {
      scale: 1,
      duration: D.med,
      borderColor: typeColor,
      ease: E.p2io,
    })
    gsap.to(circle, {
      scale: 1,
      yPercent: 0,
      duration: D.med,
      ease: E.p2io,
    })
  }

  function buttonMobileClick(e) {
    const rootStyles = getComputedStyle(document.documentElement)
    const typeColor = rootStyles.getPropertyValue('--type-color').trim()
    const b = e.currentTarget
    gsap.to(b, {
      scale: 0.92,
      duration: D.med,
      borderColor: typeColor,
      ease: E.p2io,
      onComplete: () => {
        gsap.to(b, {
          scale: 1,
          duration: D.med,
          borderColor: typeColor,
          ease: E.p2io,
        })
      },
    })
  }

  if (!isMobile()) {
    button.addEventListener('mouseenter', (e) => {
      buttonHoverIn(e)
    })
    button.addEventListener('mouseleave', (e) => {
      buttonHoverOut(e)
    })
  }

  if (isMobile()) {
    button.addEventListener('click', (e) => {
      buttonMobileClick(e)
    })
  }
}

export default button
