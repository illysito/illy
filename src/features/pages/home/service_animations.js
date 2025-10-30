import gsap from 'gsap'
import SplitType from 'split-type'

function serviceAnimations() {
  const servicePs = document.querySelectorAll('.service-p')
  const serviceHs = document.querySelectorAll('.service-h')

  servicePs.forEach((p, index) => {
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

  serviceHs.forEach((h, index) => {
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
}

export default serviceAnimations
