import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function scroll() {
  const claimHeadings = document.querySelectorAll('.claim-h')
  const claimWrapper = document.querySelector('.claim-wrapper')

  claimHeadings.forEach((h, index) => {
    gsap.to(h, {
      yPercent: 100,
      scrollTrigger: {
        trigger: claimWrapper,
        start: `top ${20 + index * 2}%`,
        end: 'top 8%',
        markers: false,
        scrub: 1,
      },
    })
  })

  const aboutSection = document.querySelector('.about__section')

  gsap.to(aboutSection, {
    y: 80,
    scrollTrigger: {
      trigger: aboutSection,
      start: `top 98%`,
      markers: false,
      scrub: 1,
    },
  })
}

export default scroll
