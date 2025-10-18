import gsap from 'gsap'
import SplitType from 'split-type'

function workAnimations() {
  const workPs = document.querySelectorAll('.work-p')
  const workHs = document.querySelectorAll('.work-h')
  const workLines = document.querySelectorAll('.work-line')
  const workOverlays = document.querySelectorAll('.canvas-overlay')
  // const workCards = document.querySelectorAll('.work-card')

  workPs.forEach((p, index) => {
    const splitP = new SplitType(p, {
      types: 'lines',
    })

    splitP.lines.forEach((l) => {
      const wrapper = document.createElement('div')
      wrapper.style.overflow = 'hidden'
      wrapper.style.display = 'block' // ensures stacking vertically
      l.parentNode.insertBefore(wrapper, l)
      wrapper.appendChild(l)
    })
    gsap.set(splitP.lines, { yPercent: -100, opacity: 0 })

    gsap.to(splitP.lines, {
      delay: 0.1 * index,
      yPercent: 0,
      opacity: 1,
      stagger: 0.08,
      scrollTrigger: {
        trigger: splitP.lines,
        start: 'top 90%',
        end: 'top 60%',
      },
    })
  })

  workHs.forEach((h, index) => {
    const splitH = new SplitType(h, {
      types: 'lines',
    })

    splitH.lines.forEach((l) => {
      const wrapper = document.createElement('div')
      wrapper.style.overflow = 'hidden'
      wrapper.style.display = 'block' // ensures stacking vertically
      l.parentNode.insertBefore(wrapper, l)
      wrapper.appendChild(l)
    })
    gsap.set(splitH.lines, { yPercent: -100, opacity: 0 })

    gsap.to(splitH.lines, {
      delay: 0.1 * index,
      duration: 0.6,
      yPercent: 0,
      opacity: 1,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: splitH.lines,
        start: 'top 90%',
        end: 'top 60%',
      },
    })
  })

  workLines.forEach((l, index) => {
    gsap.set(l, { width: 0 })

    gsap.to(l, {
      delay: 0.14 * index,
      duration: 1.2,
      width: '100%',
      stagger: 0.4,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: l,
        start: 'top 90%',
        end: 'top 60%',
      },
    })
  })

  workOverlays.forEach((o, index) => {
    gsap.to(o, {
      delay: 0.1 * index,
      duration: 1.2,
      yPercent: 100,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: o,
        start: 'top 90%',
        end: 'top 60%',
      },
    })
  })
}

export default workAnimations
