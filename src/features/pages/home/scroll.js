import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function scroll() {
  const claimHeadings = document.querySelectorAll('.claim-h')
  const claimUnderscore = document.querySelector('.underscore.is--claim')
  const claimWrapper = document.querySelector('.claim-wrapper')
  const sectionLines = document.querySelectorAll('.line-outline')
  const headers = document.querySelectorAll('.header__info')

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

  gsap.to(claimUnderscore, {
    yPercent: 100,
    scrollTrigger: {
      trigger: claimWrapper,
      start: `top 20%`,
      end: 'top 8%',
      markers: false,
      scrub: 1,
    },
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

  sectionLines.forEach((l) => {
    gsap.set(l, { width: 0 })

    gsap.to(l, {
      duration: 1.2,
      width: '100%',
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: l,
        start: 'top 90%',
        end: 'top 60%',
      },
    })
  })

  headers.forEach((h) => {
    gsap.set(h, { opacity: 0 })

    gsap.to(h, {
      duration: 1.2,
      opacity: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: h,
        start: 'top 90%',
        end: 'top 60%',
      },
    })
  })
}

export default scroll
